import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import './Login.css'; 
import {useEffect, useState} from 'react';
import axios from 'axios';
const SERVER_URL = 'http://localhost:3002/api/login';


function Login() {

    const axiosData = async() => {
        const response = await axios.post(SERVER_URL);
        console.log(response);
    };  
    useEffect(()=> {
        axiosData();
    },[]);

    const onSubmit = async(data) => {
        await axios.post(SERVER_URL, {data}); 
        axiosData();
    }
    const formSchema = yup.object({
        userEmail: yup
            .string()
            .required('이메일을 입력해주세요')
            .email('이메일 형식이 아닙니다.'),
        userPasswd: yup
            .string()
            
        });
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(formSchema),
    });
    

    return (
        <div className='login'>
        <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
        <input
            name='userEmail'
            placeholder='이메일'
            {...register('userEmail')}
          // register에 포함된 구문임 onChange={(e)=> setUserEmail(e.target.value)}
        />
        {errors.userEmail && <p>{errors.userEmail.message}</p>}
        <input 
            name='userPasswd'
            type='password'
            placeholder='비밀번호'
            {...register('userPasswd')}
        />
        {errors.userPasswd && <p>{errors.userPasswd.message}</p>}

        <input className='loginButton' type="button" value="로그인" onClick={handleSubmit(onSubmit)} />

        </form>
        </div>
    );
}
export default Login;