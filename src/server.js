const { log } = require("console")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000
const { mongoose } = require("./dataBase")

app.use(express.json())


app.use(require("./routes/tareas.routes"))





app.listen(PORT, () => { console.log(`Server on http://localhost:${PORT}/`) })




module.exports = app