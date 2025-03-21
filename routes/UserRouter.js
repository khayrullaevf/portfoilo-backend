import express from "express";
import User from "../models/userModel.js";

const UserRouter = express.Router();

UserRouter.get("/", async (req, res) => {
  try {
    const user = await User.findOne();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
});
UserRouter.post("/", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User created", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
  });

export default UserRouter;  
