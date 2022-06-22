"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const index_1 = require("./index");
const registration = require("./db/registration");
const auth = require("./db/auth");
const createPost = require("./db/create_post");
const showPosts = require("./db/show_posts");
const deletePosts = require("./db/delete_posts");
const editPosts = require("./db/edit_posts");
const secretKey = `kdsa02k384mzowsp02`;
index_1.router.use(express_1.default.json());
index_1.router.use(require("./jwt_check"));
index_1.router.post("/registration", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    registration(Object.assign(Object.assign({}, req.body), { password: yield bcrypt.hash(req.body.password, 10) }))
        .catch((err) => { res.send('Error'); throw err; })
        .then(() => { res.send(jwt.sign({ login: req.body.login }, secretKey)); });
}));
index_1.router.post("/auth", (req, res) => {
    auth(req.body)
        .catch((err) => { res.send('Error'); throw err; })
        .then((data) => {
        if (data.dataValues.password)
            return { access: bcrypt.compare(req.body.password, data.dataValues.password), id: data.dataValues.id };
        res.send('Incorrect data');
    })
        .then((data) => { if (data.access)
        res.send(jwt.sign({ login: req.body.login, id: data.id }, secretKey)); });
});
index_1.router.post("/create_post", (req, res) => {
    if (req.jwt) {
        createPost(Object.assign(Object.assign({}, req.body), { id: req.jwt.id }))
            .catch((err) => { res.send('Error'); throw err; })
            .then(() => { res.send('Data Inserted!'); });
    }
});
index_1.router.post("/show_posts", (req, res) => {
    if (req.jwt) {
        showPosts(req.body.myPosts ? req.jwt.id : false)
            .catch((err) => { res.send('Error'); throw err; })
            .then((data) => { res.send(data); });
    }
});
index_1.router.post("/delete_posts", (req, res) => {
    if (req.jwt) {
        deletePosts(Object.assign(Object.assign({}, req.body), { id: req.jwt.id }))
            .catch((err) => { res.send('Error'); throw err; })
            .then((data) => {
            if (data) {
                return res.send('Post has been deleted');
            }
            res.send('No posts has been deleted');
        });
    }
});
index_1.router.post("/edit_posts", (req, res) => {
    if (req.jwt) {
        editPosts(Object.assign(Object.assign({}, req.body), { id: req.jwt.id }))
            .catch((err) => { res.send('Error'); throw err; })
            .then((data) => {
            if (data) {
                return res.send('Record has been updated');
            }
            res.send('No record has been updated');
        });
    }
});
module.exports = index_1.router;
