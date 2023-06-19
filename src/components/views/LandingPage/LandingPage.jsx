import React,{ useEffect, useState} from 'react'
import axios from 'axios';
// import { response } from 'express';

function LandingPage() {
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:3002/api/hello')
        // get(request)를 server로 보냄 endpoint는 /api/hello
        .then(response => {
            console.log(response.data);
            setResponseData(response.data)
        })
        // server에서 돌아오는 response를 console창에 보여줌 
    }, [])
    return (
        <div>
            LandingPage 랜딩랜딩
            <p>
                {responseData}
            </p>
        </div>
    )
}

export default LandingPage

// import { response } from 'express'
// import React, {useEffect} from 'react'
// import axios from 'axios'
// function LandingPage() {
//     useEffect(()=>{
//         fetchData();
//     },[])

//     const fetchData = async()=> {
//         try {    
//             const response = await axios.get('http://localhost:3002/api/hello')
//             console.log(response.data);
//         } catch(error){
//             console.error(error);
//         }    
//     }

//     return (
//         <div>LandingPage</div>
//     )
// }

// export default LandingPage