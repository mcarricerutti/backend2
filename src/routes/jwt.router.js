// import { Router } from "express";
// import UserModel from "../persistencia/models/user.model.js"
// import { compareData, generateToken } from "../utils.js";
// import { jwtValidation } from "../middlewares/jwt.middlewares.js";
// const router = Router()

// router.post('/login', async (req, res) => {
//       const { email, password } = req.body
//       const userDB = await UserModel.findOne({ email })
//       if (!userDB) {
//         return res.status(401).send('Wrong email or password')
//       }
//       const isPassword = await compareData(password,userDB.password)
//       if(!isPassword){
//           return res.status(401).send('Wrong email or password')
//       }
//       const token = generateToken(userDB)
//       res.status(200).json({message: 'Login',token})
// })
    
// router.get('/validation',jwtValidation,(req,res)=>{
//   const {email} = req.user
//   res.send(`Probando ${email}`)
// })


// export default router