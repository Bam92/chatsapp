import { Router } from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config.js";

import User from "../Models/User.js";

const router = Router()

router.post("/signup", async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        await User.create(req.body)

        res.status(201).json({ 
            "status": 201, 
            "success": true, 
            "message": `User ${req.body.username} created successfully`
         })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post("/login", async (req, res) => {
    try {
        const username = req.body.username
        const user = await User.findOne({ username, })

        if (user) {
            const result = await bcrypt.compare(req.body.password, user.password)
            if (result) {
                // sign token and send it in response
                const token = await jwt.sign({ username: user.username, }, process.env.TOKEN_SECRET)
                
                res.header("auth-token", token).status(200).json({
                    token,
                    "message":"login successfully",
                    "success": true,
                    "status": 200
                })

            } else res.status(403).json({
                error: "Password does not match. Try again",
                "success": false,
                "status": 403
            })

        } else res.status(404).json({
            error: `User ${username} doesn't exist in the app`
        })
        
    } catch (error) {
        res.status(400).json(error)
    }
})

export default router