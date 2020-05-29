const express =require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/",require("./routes/index"))


app.listen(5000,()=>{
    console.log("Server Started")
})