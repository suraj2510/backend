const express= require("express")
const app = express();
const cors= require("cors")
const mainRouter = require("./routes/index.js")


app.use(express.json())
app.use(cors())
app.use("/api/v1", mainRouter)


const listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port +".....");
});