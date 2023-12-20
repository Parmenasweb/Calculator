const expresss = require('express');
const bodyParser = require('body-parser')

const app = expresss();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    let weight = Number(req.body.weight); 
    let height = Number(req.body.height);

    let BMI = (weight/(height*height)).toFixed(2);
    if(BMI<=18.5) {
        res.send(`Your BMI is ${BMI}, your BMI of ${BMI} suggests that you are underweight`);
    } else if(BMI>18.5 && BMI<25) {
        res.send(`Your BMI is ${BMI}, your BMI of ${BMI} suggests that you have a normal weight`);
    } else {
        res.send(`Your BMI is ${BMI}, your BMI of ${BMI} suggests that you are overweight`);
    }});
    

app.listen(3000, function() {
    console.log('Server is active on part 3000');
}); 

console.log('hey are you sorry there');