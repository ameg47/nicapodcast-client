import React from 'react';
import Episodes from './Episodes';
import Featured from './Featured';
import Gallery from './Gallery';
import Posts from './Posts';
import Subscribe from './Subscribe';

export default function Home() {
  return (
    <div>
      <Featured />
      <Episodes />
      <Posts />
      <Gallery />
      <Subscribe />
    </div>
  );
}
