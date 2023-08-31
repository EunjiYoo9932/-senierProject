import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecommendResult.css';
import Modal from 'react-modal';
import { useNavigate  } from 'react-router-dom';
function RecommendResult() {
    const [result, setResult] = useState(['']);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPlantName, setSelectedPlantName] = useState('');
    const [selectedPlants, setSelectedPlants] = useState([''])
    const navigate = useNavigate();

    const openModal = (plantsName) => {
        setSelectedPlantName(plantsName);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedPlantName('');
        setModalIsOpen(false);
    };

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
        const plantsData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/plantsData");
                setSelectedPlants(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching additional data:', error);
            }
        };
        fetchResult();
        plantsData();
    }, []);

    return (
        <div className='recommend'>      
            <div>
                <ul className='recommendResultul'>
                    <li className='recommendResultli'>온도 : {result[0].temperature}</li>    
                    <li className='recommendResultli'>조도 : {result[0].light}</li>
                    <li className='recommendResultli'>물 : {result[0].water}</li>
                    <li className='recommendResultli'>레벨 : {result[0].level}</li>
                </ul>
            </div>

            
            {result.slice(1).map((comments) => (
                <><div className='recommendResultWi' key={comments.id}>{comments.id}위</div>
                <div className='recommendResultRanking' key={comments.id} onClick={() => openModal(comments.plantsName)}>{comments.plantsName}</div></>
            ))}
            <button className='recommendResultButton' onClick={() => navigate('/Recommend')}>질문지로</button>


            <Modal className='recommendResultModal' isOpen={modalIsOpen}>
                {/* <div>Selected Plant: {selectedPlants.plantsName}</div> */}
                {selectedPlants.map((plant) => {
                    if (plant.plantsName === selectedPlantName) {
                        return (
                            <div key={plant.id}>
                            <ul className='plantExplain'>
                                <li className='plantExplainTitle'>식물명</li>
                                <li>{plant.plantsName}</li>
                                <li className='plantExplainTitle'>사진</li>
                                <li>{plant.plantsPic}</li>
                                <li className='plantExplainTitle'>난이도</li>
                                <li >{plant.plantsLevel}</li>
                                <li className='plantExplainTitle'>물</li>
                                <li>{plant.plantsWater}</li>
                                <li className='plantExplainTitle'>효과</li>
                                <li>{plant.plantsEffect}</li>
                                <li className='plantExplainTitle'>주의점</li>
                                <li>{plant.plantsNotice}</li>
                            </ul>
                            </div>
                        );
                        }
                        return null;
                    })}
                <button className='modalCloseButton' onClick={closeModal}>close</button>
            </Modal>
        </div>
    );
}

export default RecommendResult;