const express = require("express")
const app = express()
const db  = require("./db.js")

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    // res.json({reults: "ok", data:[1,2,2,3,4,5]})
    db.query("SELECT * FROM user WHERE user.email='cs27@fitwhey.com'",(err, result) => {
        if (err){
            console.log(err);
        } else {
            res.send(result);
        }
    });

})

app.listen(PORT, () => {
    console.log(`server is running. ${PORT}`)
})