import express from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", (req, res) => {
    res.send("Bienvenidos!")
})

app.use((req, res) => {
    res.status(404).json({
        code: 404,
        message: "Not found."
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

