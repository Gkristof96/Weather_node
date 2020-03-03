const express = require('express')
const router = require('./src/router')

const app = express()
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.set("views", "views")
app.set("view engine", "hbs")

app.use("/", router)

app.listen(3000, () => {
    console.log('Server running at port 3000!')
})


