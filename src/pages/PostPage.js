import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const { id } = useParams();

    // 假设这里我们从某个数据源获取文章内容
    const post = {
        title: `Post ${id}`,
        content: `This is the content of post ${id}.`
    };

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostPage;