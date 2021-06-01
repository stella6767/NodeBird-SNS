import { Button, Form, Input } from 'antd';
import React, { memo, useCallback, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../reducers/user';
import { useSelector } from 'react-redux';

const StyledButtonWrapper = styled.div`
  margin-top: 10px;
`;

const StyledFormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = memo(() => {
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector((state) => state.user);

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  // const [id, setId] = useState("");
  // const onChangeId = useCallback((e) => {
  //   console.log(e.target.value);
  //   setId(e.target.value);
  // }, []);

  // const [password, setPassword] = useState("");
  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // }, []);

  const onSubmitForm = useCallback(
    (e) => {
      console.log(id, password);
      dispatch(loginRequestAction({ id, password }));
    },
    [id, password],
  );

  return (
    <>
      <StyledFormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>

        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <StyledButtonWrapper>
          <Button type="primary" htmlType="submit" loading={isLoggingIn}>
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </StyledButtonWrapper>
      </StyledFormWrapper>
    </>
  );
});

LoginForm.prototype = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
