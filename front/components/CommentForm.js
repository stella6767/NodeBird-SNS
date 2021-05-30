import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useInput from '../hooks/useInput';

export const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, onChangeCommentText] = useInput('');
    const onSubmitComment = useCallback(() => {
        console.log(`안 나오는디...  ${post.id}  와  ${commentText}`);
    }, [commentText, id]);

   useEffect(()=>{
    console.log('인라인 스타일링 하니 form tag가 작동을 안 하네 도화지가 가려져서 그런가..');
   },[]);

    return (
        <Form onFinish={onSubmitComment}> 
            <Form.Item style={{ position: 'relative', margin: 0 }}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                {/* zIndex를 주니 작동... */}
                <Button style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1}} type="primary" htmlType="submit">삐약</Button> 
            </Form.Item>
        </Form>
    )
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm; 