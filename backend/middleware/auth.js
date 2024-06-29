// import { json } from 'body-parser';
import Jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    // console.log("Im in auth.js",req);
    const token  = req.cookies;
    // const token = Cookies.get('token');
    if(!token){
        console.log('Login first');
        return res.status(403).send('Please login first');
    }
    try{
        const decodedToken = Jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decodedToken)
        req.user = decodedToken;
        // console.log("This is in Auth js ",req);
        return next();
    }catch(err){
        console.log(err);
    }
}

export default auth;