import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import './CrawlingResult.css';

const SERVER_URL = 'http://localhost:4000/crawlingData';
function Crawling() {
    
    const [searchKeyword, setSearchKeyword] = useState('');
    const [crawlingData, setCrawlingData] = useState(['']);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value);
    }
    useEffect(() => {
        const crawlingData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/comments");
                setCrawlingData(response.data);
                console.log(crawlingData);
            } catch (error) {
                console.error('Error fetching result:', error);
            }
        };
        crawlingData();
    }, []); 

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(SERVER_URL, { searchName : searchKeyword });
            // 백엔드랑 searchName을 맞춰줘야 한다.

            navigate('/CrawlingResult');
            // window.location.href = `/entities?searchName=${searchKeyword}`;
        } catch (error) {
            console.error(error);
        }
    };

    return(
    <div className='crawlingResult'>
        <form className='crawlingForm' >
            <input 
                className='crawlingInput' 
                placeholder='찾으시는 식물을 입력해주세요!'
                value={searchKeyword}
                onChange={handleInputChange}
            />
            <input className='crawlingButton' 
                type="submit"
                onClick={onSubmit} 
            />        
        </form>

        <div className='store'>
        {crawlingData.map((comment) => (
            <div className='storeName' key={comment.id}>
                <div>스토어이름 :{comment.storeName}</div>
                <div>가격 :{comment.price}</div>
                <img src={comment.imageUrl} alt='이미지' />
            </div>
        ))}
        </div>

    </div>
    )
}

export default Crawling