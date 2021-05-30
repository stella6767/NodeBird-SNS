import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

//여기는 dev branch
const Home = () => {

const {isLoggedIn}  = useSelector((state)=>state.user);
const{mainPosts}  = useSelector((state)=>state.post);

  return (
    <AppLayout>
       {isLoggedIn && <PostForm/>}
      {mainPosts.map((post,index)=><PostCard key={post.id} post={post}/> )}
      </AppLayout>
  );
};

export default Home;
