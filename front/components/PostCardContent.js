import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';


const PostCardContent = ({postData}) => ( //첫 번째 게시글 #해시태그 #익스


    <div>
    {postData.split(/(#[^\s#]+)/g).map((v) => { //정규표현식 괄호로 감싸야 된다. [^] : 제외  \s: 공백 g: n개 이상
      if (v.match(/(#[^\s]+)/)) {
        return (
          <Link
            href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
            as={`/hashtag/${v.slice(1)}`}
            key={v}
          >
            <a>{v}</a>
          </Link>
        );
      }
      return v;
    })}
  </div>


);



PostCardContent.propTypes = {

}



export default PostCardContent;
