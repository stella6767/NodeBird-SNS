import React, { memo, useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
import { useSelector } from 'react-redux';

const UserProfile = memo(() => {
  //props 꼭 {} 안에서 받아라..

  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br />0
          </div>,
          <div key="following">
            팔로잉
            <br />0
          </div>,
          <div key="following">
            팔로워
            <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
        <Button onClick={onLogOut} loading={isLoggingOut}>
          로그아웃
        </Button>
      </Card>
    </>
  );
});

export default UserProfile;
