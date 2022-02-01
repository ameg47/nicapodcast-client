/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="my-16 mx-48">
      <h2 className="text-3xl text-center">Blog posts</h2>
      <ul className="flex my-8 space-x-4">
        {posts && posts.map((post) => (
          <li>
            <Post
              title={post.title.rendered}
              content={post.content.rendered}
              author={post._embedded.author[0].name}
              category={post._embedded['wp:term'][0][0].name}
              date={post.date}
            />
          </li>
        ))}
        {/* <li><Post /></li>
        <li><Post /></li>
        <li><Post /></li> */}
      </ul>
    </div>
  );
}
