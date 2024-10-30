const jwt = require('jsonwebtoken');

function tokenAuthentication(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(401).send('Falta de token')
    }
    try{
        const secret = process.env.JWT_SECRET;
        const userVerify = jwt.verify(token,secret);
        req.user = userVerify;
        next();
    }catch(erro){
        res.status(403).send('Token inválido');
    }
}

module.exports = tokenAuthentication;