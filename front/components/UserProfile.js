import React, { memo, useCallback } from "react";
import { Card, Avatar,Button } from 'antd';

const UserProfile = memo(({setIsLoggedIn}) => {  //props 꼭 {} 안에서 받아라..

  const onLogOut = useCallback(()=>{
    console.log(setIsLoggedIn)
    setIsLoggedIn(false);
  },[]);

  return <>
  <Card
    actions={[ 
    <div key="twit">짹짹<br/>0</div>,
    <div key="following">팔로잉<br/>0</div>,
    <div key="following">팔로워<br/>0</div>,
            ]}
  >
    <Card.Meta
      avatar={<Avatar>ZC</Avatar>}
      title="Card title"
    />
    <Button onClick={onLogOut}>로그아웃</Button>
  </Card>
  
  </>;
});

export default UserProfile;
