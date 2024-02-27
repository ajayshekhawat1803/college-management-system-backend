import express from "express";
import studentModel from "../models/student-model.js";

const studentRouter = express.Router();

studentRouter.get('/', async (req, res) => {
    console.log("hello");
    await studentModel.find();
    res.json({ message: "hello" })
})

studentRouter.post('/add', async (req, res) => {
    console.log(req.body)
})

export default studentRouter;