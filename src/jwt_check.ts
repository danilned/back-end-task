const jwt = require("jsonwebtoken");
const secretKey = `kdsa02k384mzowsp02`;

module.exports = function(req:any, res:any, next:any) {
    const nonSecurePaths = ['/registration', '/auth'];
    if (nonSecurePaths.includes(req.path)) return next();
    try {
        req.jwt = jwt.verify(req.body.jwt, secretKey);
        return next();
    } catch(err) {
        console.log('Error');
        return res.status(401).send("Invalid Token");
    }
}