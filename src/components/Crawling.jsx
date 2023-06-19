import React, { useState ,useEffect} from 'react';
import axios from 'axios';
const SERVER_URL = 'http://localhost:3002/api/crawling';
function Crawling() {
    
    const [searchKeyword, setSearchKeyword] = useState('');
    const [entities, setEntities] = useState([]);
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
            window.location.href = `/entities?searchName=${searchKeyword}`;
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
    <div>
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
        <h2>Entities</h2>
        {entities.map((entity) => (
            <div key={entity.id}>
            <p>{entity.name}</p>
            </div>
        ))}
    </div>
    )
}

export default Crawling