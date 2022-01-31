import React from 'react';
import Episodes from './Episodes';
import Featured from './Featured';
import Posts from './Posts';

export default function Home() {
  return (
    <div>
      <Featured />
      <Episodes />
      <Posts />
    </div>
  );
}
