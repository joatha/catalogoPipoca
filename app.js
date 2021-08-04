const express = require("express")
const app = express()

app.use( express.static( "public" ) )

app.set('view engine', 'ejs')


app.get("/", (req, res)=>{
    res.render('../views/index.ejs')
})

app.get("/sobre", (req, res)=>{
    res.render('../views/partials/sobre.ejs')
})


app.listen(8081)
