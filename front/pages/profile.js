import Head from "next/head";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {

  const followingList = [{nickname:'제로초'}, {nickname:'홍길동'}, {nickname:'바노'} ];
  const followerList = [{nickname:'제로초'}, {nickname:'홍길동'}, {nickname:'바노'} ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm/>
        <FollowList header="팔로잉 목록" data={followingList}/>
        <FollowList header="팔로워 목록" data={followerList}/>
      </AppLayout>
    </>
  );
};

export default Profile;
