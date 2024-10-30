const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register = async(req,res)=>{
    const { name, email, password } = req.body;
    const HashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: HashPassword
    });
    try{
        await newUser.save();
        res.status(201).send('Usuario cadastrado com sucesso.');
    }catch(erro){
        res.status(500).send('Erro ao registrar usuario');
    }
};

exports.login= async(req,res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).send('Usuario não encontrado');
        }
        const truePassword = await bcrypt.compare(password,user.password);
        if(!truePassword){
            return res.status(401).send('Senha inválida');
        }
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET, {expiresIn:'1h'});
        return res.json({token});
    }catch(erro){
        return res.status(500).send('Erro no login');
    }
}