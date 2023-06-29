// import jwt from 'jsonwebtoken'
// import 'dotenv/config'

// export const jwtValidation = (req,res,next)=>{
//     const authorizationHeader = req.get('Authorization')
//     const token = authorizationHeader.split(' ')[1]
//     const isValidToken = jwt.verify(token,process.env.SECRET_KEY)
//     if(isValidToken){
//         req.user = isValidToken.user
//         console.log(token)
//         next()
//     }else{
//     res.status(401).json({message: 'Autentication error'})
//     }
// }