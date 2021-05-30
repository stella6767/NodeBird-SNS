import Head from "next/head";
import AppLayout from "../components/AppLayout";
import {Button, Checkbox, Form, Input} from 'antd';
import { useCallback, useEffect, useState } from "react";
import styled from 'styled-components';
import useInput from "../hooks/useInput";



const StyledErrorMessage = styled.div`
  color:red;
`;

const Signup = () => {

  const[id,onChangeId] = useInput('');
  const[nickName,onChangeNickname] = useInput('');
  const[password,onChangePassword] = useInput('');

 const [passwordCheck, setPasswordCheck]= useState('');
 const [passwordError, setPasswordError] = useState(false);

const onChangePasswordCheck = useCallback((e)=>{
  setPasswordCheck(e.target.value);
  setPasswordError(e.target.value !== password);
},[password])


const [term,setTerm] = useState('');
const [termError,setTermError] = useState(false);

const onChangeTerm = useCallback((e)=>{
  //console.log(e.target.checked);
  setTerm(e.target.checked);
  
  setTermError(false);
},[]);

  const onSubmit= useCallback(()=>{
    if(password !== passwordCheck)  {
       setPasswordError(true);
       return;
    }
    if(!term){
      //console.log("term", term); //왜??????
       setTermError(true);
       return;
    }
    console.log(id,nickName,password);
  },[password, passwordCheck,passwordError]);

 
useEffect(()=>{
  console.log(term+" "+termError);
},[term, termError])

  return (
    <>
          <AppLayout>

      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아아디</label>
          <br/>
          <Input name="user-id" value={id} required onChange={onChangeId}/>
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br/>
          <Input name="user-nickname" value={nickName} required onChange={onChangeNickname}/>
        </div>
        <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && <StyledErrorMessage>비밀번호가 일치하지 않습니다.</StyledErrorMessage>}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관을 잘 들어야 하는 걸 동의합니다.</Checkbox>
            {termError && <StyledErrorMessage>약관에 동의하셔야 합니다.</StyledErrorMessage>}
          </div>
          <div style={{marginTop: 10}}>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
      </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
