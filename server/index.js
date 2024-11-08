import express from 'express'
import "dotenv/config";
import {db} from "./config/db.js"
import userRouter from './routes/user.route.js'

const app = express();
const PORT = process.env.PORT;

app.use('/api/v1/users', userRouter)

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello world"
    })
})

app.use("*", (req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

app.listen(PORT, () => {
    console.log(`server strated, list on port ${PORT}`);
})
// test