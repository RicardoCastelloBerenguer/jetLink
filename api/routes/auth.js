import express from 'express';
import User from '../models/User.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const router  = express.Router();

router.post('/register' , async (req, res) => {
    const { user } = req.body;
    
    // res.send(user);

    let userExists = await User.findOne({
        where: {
          email: user.email,
        },
      });

    if(userExists) {
        return res.status(400).send({ error : 'This user already exists.' })
    }
    else {
        try{
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(user.password ,salt)
            user.password = password

            User.create({
                email: user.email,
                password: user.password,
            });

            return res.json({ Status : '200' ,  message : 'User saved correctly.' , user : user.email  })
        }catch(err){
            return res.status(500).send({ error : err.message })
        }
    } 
})

router.post('/login' , async (req, res) => {
    let { user } = req.body;

    try {
        // Intenta buscar el usuario en la base de datos
        const userDB = await User.findOne({
            where: {
                email: user.email,
            }
        });

        // Verifica si el usuario no existe o la contraseña no coincide
        if (!userDB || !bcrypt.compareSync(user.password, userDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            });
        } else {
            // Genera el token si la autenticación es exitosa
            const token = jwt.sign({
                user : {id : userDB.id , email : userDB.email},
            }, process.env.JWT_SECRET_KEY, {
                expiresIn: process.env.CADUCIDAD_TOKEN
            });
    
            // Envía la respuesta con el token y la información del usuario
            res.json({
                ok: true,
                usuario: {
                    'email' : userDB.email,
                    'created_at' : userDB.createdAt,
                },
                token,
            });
        }
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante el proceso
        console.error("Error en la autenticación:", error);
    


        return res.status(500).json({
            ok: false,
            err: {
                message: "Error en la autenticación. Por favor, inténtelo de nuevo." , error : error,
            }
        });
    }

})

export default router;