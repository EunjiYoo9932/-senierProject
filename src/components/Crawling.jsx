import React, { useState ,useEffect} from 'react';
import axios from 'axios';
const SERVER_URL = 'http://localhost:3002/api/crawling';
function Crawling() {
    
    const [crawling, setCrawling] = useState('');
    const handleInputChange = (e) => {
        setCrawling(e.target.value);
        e.preventDefault();
    }

    const axiosData = async() => {
        const response = await axios.post(SERVER_URL);
        console.log(response);
        console.log(crawling);
    };  

    useEffect(()=> {
        axiosData();
    },[]);

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.post(SERVER_URL, {searchName:crawling}); 
        axiosData();
        // 백엔드랑 searchName을 맞춰줘야 한다.
        
    }
    return(
    <div>
        <form className='crawlingForm' >
            <input 
                className='crawlingInput' 
                placeholder='찾으시는 식물을 입력해주세요!'
                value={crawling}
                onChange={handleInputChange}
            />
            <input className='crawlingButton' 
                type="submit" 
                value="crawling" 
                onClick={onSubmit} 
            />        
        </form>
    </div>
    )
}

export default Crawling