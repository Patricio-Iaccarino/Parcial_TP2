import express from "express"
import Router from "./routes/facturas.route.js"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", new Router().start())

app.use((req, res) => {
    res.status(404).json({
        code: 404,
        message: "Not found."
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

