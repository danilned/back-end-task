import express, { Request, Response } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { router } from "./index";
const registration = require("./db/registration");
const auth = require("./db/auth");
const createPost = require("./db/create_post");
const showPosts = require("./db/show_posts");
const deletePosts = require("./db/delete_posts");
const editPosts = require("./db/edit_posts");
const secretKey = `kdsa02k384mzowsp02`;

router.use(express.json());
router.use(require("./jwt_check"));

router.post("/registration", async (req:Request, res:Response) => {
    registration({...req.body, password: await bcrypt.hash(req.body.password, 10)})
    .catch((err:Error) => { res.send('Error'); throw err; })
    .then(() => { res.send(jwt.sign({ login: req.body.login }, secretKey)) });
});

router.post("/auth", (req:Request, res:Response) => {
    auth(req.body)
    .catch((err:Error) => { res.send('Error'); throw err; })
    .then((data:any) => { 
        if (data.dataValues.password) return {access: bcrypt.compare(req.body.password, data.dataValues.password), id: data.dataValues.id};
        res.send('Incorrect data');
    })
    .then((data:any) => { if (data.access) res.send(jwt.sign({ login: req.body.login, id: data.id }, secretKey)) });
});

router.post("/create_post", (req:any, res:Response) => {
    if (req.jwt) {
        createPost({...req.body, id: req.jwt.id})
        .catch((err:Error) => { res.send('Error'); throw err; })
        .then(() => { res.send('Data Inserted!'); });
    }
});

router.post("/show_posts", (req:any, res:Response) => {
    if (req.jwt) {
        showPosts(req.body.myPosts ? req.jwt.id : false)
        .catch((err:Error) => { res.send('Error'); throw err; })
        .then((data:any) => { res.send(data); });
    }
});

router.post("/delete_posts", (req:any, res:Response) => {
    if (req.jwt) {
        deletePosts({...req.body, id: req.jwt.id})
        .catch((err:Error) => { res.send('Error'); throw err; })
        .then((data:any) => {
            if (data) {
                return res.send('Post has been deleted');
            }
            res.send('No posts has been deleted');
        });
    }
});

router.post("/edit_posts", (req:any, res:Response) => {
    if (req.jwt) {
        editPosts({...req.body, id: req.jwt.id})
        .catch((err:Error) => { res.send('Error'); throw err; })
        .then((data:number) => { 
            if (data) { 
                return res.send('Record has been updated');
            } 
            res.send('No record has been updated');
        })
    }
});

module.exports = router;