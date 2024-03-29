import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import './Crawling.css';
const SERVER_URL = 'http://localhost:3002/api/crawling';
function Crawling() {
    
    const [searchKeyword, setSearchKeyword] = useState('');
    const [entities, setEntities] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchKeyword(e.target.value);
    }
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async() => {
        try {
            const response = await axios.get(SERVER_URL);
            setEntities(response.data);
        } catch(error){
            console.error(error);
        }
    };  

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(SERVER_URL, { searchName : searchKeyword });
            navigate('/CrawlingResult');
            // window.location.href = `/entities?searchName=${searchKeyword}`;
        } catch (error) {
            console.error(error);
        }
    };

    // const onSubmit = async(e) => {
    //     e.preventDefault();
    //     await axios.post(SERVER_URL, {searchName:searchKeyword}); 
    //     axiosData();
    //     // 백엔드랑 searchName을 맞춰줘야 한다.
    // }
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

    </div>
    )
}

export default Crawling