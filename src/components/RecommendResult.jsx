// import React, { useEffect,useState } from 'react'
// import axios from 'axios'



// function RecommendResult() {
//     const {result, setResult} = useState(null);
//     const fetchResult = async () => {
//         const { data } = await axios.get("http://localhost:4000/recommendResult");
//         setResult(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
//         console(result)
//         };
//     useEffect(() => {
//     // effect 구문에 생성한 함수를 넣어 실행합니다.
//         fetchResult();
//     }, []);    
//     return (
//         <div>RecommendResult</div>
//     )
// }

// export default RecommendResult

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecommendResult() {
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchResult = async () => {
            try {
                const response = await axios.get("http://localhost:4000/comments");
                setResult(response.data);
                console.log(result);
            } catch (error) {
                console.error('Error fetching result:', error);
            }
        };
        fetchResult();
    }, []);

    return (
        <div>
            {result && result.map((comment) => (
                <div key={comment.id}>{comment.plantsName}</div>
            ))}
        </div>
    );
}

export default RecommendResult;