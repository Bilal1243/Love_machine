const express = require('express')
const bparser = require('body-parser')
const app = express()

app.use(express.static('public'))
app.set('view engine','ejs')
app.use(bparser.urlencoded({extended : true}))
app.use(express.json())

const calculate = require('./helper/helper')


app.get('/',(req,res) => {
    res.render('index')
})

app.post('/loveYou/greatLove/enjoyYourLove/Have-A-Great-life', async (req, res) => {
    const name = req.body.name;
    const lname = req.body.lname;
    if (!name || !lname) {
        return res.status(400).json({ status: false, message: "Both name and lovername must be provided." });
    }

    const percentage = await calculate(name, lname);
    if(percentage === 0){
        return res.json({ status: false, percentage });
    }
    return res.json({ status: true, percentage });
});


app.listen(1010,() => {console.log("server started on 1010")})