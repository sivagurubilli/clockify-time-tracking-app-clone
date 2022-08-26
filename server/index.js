

const express = require("express")
const app = express()
const cors = require("cors")
const {connection} = require("./dbconfig")
const taskRouter = require("./routes/task.routes")



connection()
app.use(cors())
app.use(express.json())

app.use("/tasks",taskRouter)

const port = process.env.PORT || 8080;


app.listen(port,
    console.log(`listen on port ${port}`))