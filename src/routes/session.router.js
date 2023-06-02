import { Router } from "express";
// import userModel from "../persistencia/models/user.model.js";
import passport from "passport"

const router = Router()

//Vista para registrar usuario
router.get('/register', (req,res) => {
    res.render('sessions/register')
})

// API para crear usuarios en la DB
router.post('/register', passport.authenticate('register', {
    failureRedirect: '/sessions/failRegister'
}), async(req, res) => {
    res.redirect('/sessions/login')
})

router.get('/failRegister', (req, res) => {
    res.send({ error: 'Failed!'})
})

// Vista de Login
router.get('/login', (req, res) => {
    res.render('sessions/login')
})

// API para login
router.post('/login', passport.authenticate('login', {
    failureRedirect: '/sessions/failLogin'
}), async (req, res) => {
    if (!req.user) {
        return res.status(400).send({ status: 'error', error: 'Invalid credentials'})
    }

    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        email: req.user.email,
        age: req.user.age
    }
    res.redirect('/api/products/')
})

router.get('/failLogin', (req, res) => {
    res.send({ error: 'Fail Login'})
})

// Cerrar Session
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) {
            console.log(err);
            res.status(500).render('errors/base', {error: err})
        } else res.redirect('/sessions/login')
    })
})



export default router

// router.post('/register', async (req,res) => {
//     const userNew = req.body
//     const user = new userModel(userNew)
//     await user.save()
//     res.redirect('/sessions/login')
// })

// //Vista de LOGIN
// router.get('/login', (req,res) => {
//     res.render('sessions/login')
// })

// router.post('/login', async (req,res) => {
//     const {email, password} = req.body 
//     const user = await userModel.findOne({ email, password }).lean().exec()
//     if(!user){
//         return res.status(401).render('errors/base', {
//             error: 'Error en email y/o constraseña'
//         })
//     }
//     req.session.user = user
//     res.redirect('/api/products/')
// })

// router.get('/logout', (req,res)=>{
//     req.session.destroy(err => {
//         if(err) res.status(500).render('/errors/base', {
//             error: err
//         })
//         else res.redirect('/sessions/login')
//     })
// })

// export default router