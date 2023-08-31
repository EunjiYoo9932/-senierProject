
const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


const login = [{}];
const signin =[{}];
const submitResults = [{}];
const crawling = [{}];

app.get('/api/login', (req, res)=> {
    res.json(login);
})

app.post('/api/login', (req,res)=> {
    const {data} = req.body;
    login.push({
        data
    });
    res.send('success')
});


app.get('/api/signin', (req, res)=> {
    res.json(signin);
})

app.post('/api/signin', (req,res)=> {
    const {data} = req.body;
    signin.push({
        data
    });
    res.send('success')
});

app.get('/api/submitResults', (req, res)=> {
    res.json(submitResults);
})

app.post('/api/submitResults', (req,res)=> {
    const {answerTemperature, answerLight, answerWater, answerLevel} = req.body;
    submitResults.push({
        answerTemperature, 
        answerLight, 
        answerWater, 
        answerLevel
    });
    res.send('success')
});


app.get('/api/crawling', (req, res)=> {
    res.json(crawling);
})

app.post('/api/crawling', (req,res)=> {
    const {searchName} = req.body;
    crawling.push({
        searchName
    });
    res.send('success')
});

app.get('/api/hello', (req,res)=> res.send('hello'));
//카카오 
//로그인 맞는지 확인하는 과정
app.listen(3002, ()=>{
    console.log('server start!!');
})