import { Router } from "express";
import bcrypt from "bcryptjs"
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

export default router