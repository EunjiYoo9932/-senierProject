import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import './SignIn.css'; 
import {useEffect, useState} from 'react';
import axios from 'axios';
const SERVER_URL = 'http://localhost:3002/api/signin';

function SignIn() {

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
            .required('영문, 숫자포함 8자리를 입력해주세요.')
            .min(8, '최소 8자 이상 가능합니다')
            .max(15, '최대 15자 까지만 가능합니다')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
                '영문 숫자포함 8자리를 입력해주세요.'
            ),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref('userPasswd')], '비밀번호가 다릅니다.'),
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

        <input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            {...register('passwordConfirm')}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        <input
            name='userBirth'
            placeholder='생년월일'
            {...register('userBirth')}
        />
        
        <input
            name='userPhone'
            placeholder='핸드폰 번호'
            {...register('userPhone')}
        />
        <input className='loginButton' type="button" value="회원가입" onClick={handleSubmit(onSubmit)} />

        </form>
        </div>
    );
}

export default SignIn;