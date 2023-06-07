/*const express = require("express"); // npm i express | yarn add express
const cors    = require("cors");    // npm i cors | yarn add cors
const mysql   = require("mysql");   // npm i mysql | yarn add mysql
const app     = express();
const PORT    = 3001; // 포트번호 설정

const db = mysql.createPool({
    host: "localhost", // 호스트
    user: "root",      // 데이터베이스 계정
    password: "1234",      // 데이터베이스 비밀번호
    database: "simpleboard",  // 사용할 데이터베이스
});

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    //res.header에 접근권한을 모두로 허용하여 cors에러 막음
    //const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
    // requested 테이블에 rowno라는 컬럼에 밸류 1추가
    const sqlQuery = "SELECT * FROM requested";
    db.query(sqlQuery, (err, result) => {
        console.log(err);
        res.send(result);
    });
});
*/

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
    const {answer} = req.body;
    submitResults.push({
        answer
    });
    res.send('success')
});

app.listen(3002, ()=>{
    console.log('server start!!');
})
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
//카카오 
//로그인 맞는지 확인하는 과정
