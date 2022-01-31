import React from 'react';
import Post from './Post';

export default function Posts() {
  return (
    <div className="my-16 mx-48">
      <h2 className="text-3xl text-center">Blog posts</h2>
      <ul className="flex my-8 space-x-4">
        <li><Post /></li>
        <li><Post /></li>
        <li><Post /></li>
      </ul>
    </div>
  );
}
