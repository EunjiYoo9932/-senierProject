import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useEffect, useState} from 'react';
import axios from 'axios';
const SERVER_URL = 'http://localhost:4000/api/login';

function Body() {

    //const [todoList, setTodoList] = useState(null);
    const [login, setLogin] = useState(null);
    
    const fetchData = async() => {
        const response = await axios.get(SERVER_URL);
        //setTodoList(response.data);
        setLogin(response.data);
    };  
    useEffect(()=> {
        fetchData();
    }, []);

    const onSubmitHandler = async(e) => {
        //e.preventDefault();
        const userEmail= e.target.userEmail.value;
        const userPasswd = e.target.userPasswd.value;
        await axios.post(SERVER_URL, {userEmail,userPasswd}); 
        fetchData();
    }  
    return (
        <section class="bg-light py-5 border-bottom">
            <div class="container px-5 my-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bolder">로그인</h2>
                    <p class="lead mb-0">가입이 안되어 있다면 회원가입을 해주세요!</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6 col-xl-4">
                        <div class="card mb-5 mb-xl-0">
                            <div class="card-body p-5">
                                <form className='form' onSubmit={onSubmitHandler}>
                                    
                                    이메일  
                                    <input name='userEmail' type='text'/>
                                    비밀번호
                                    <input name='userPasswd' type='password'/>
                                    
                                    {/*<input type='submit' value='로그인'/>*/}
                                    <input className='btn btn-outline-primary' type='submit' value='로그인'/>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        /*<div className="login">
            <h2>로그인</h2>
            <form className='form' onSubmit={onSubmitHandler}>
                
                이메일  
                <input name='userEmail' type='text'/>
                비밀번호
                <input name='userPasswd' type='password'/>
                
                <input type='submit' value='로그인'/>
            </form>
            {login && login.map((login)=>(
                <div key = {login.id} style={{display:'flex'}}>
                    <div>{login.userEmail}</div>
                    <div>{login.userPasswd}</div>
                    
                </div>
            ))}
        </div>*/
    );
}

export default Body;