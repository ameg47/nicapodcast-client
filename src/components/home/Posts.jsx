/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Post from './Post';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Posts() {
  const [sliderRef, setSliderRef] = useState(null);
  const posts = useSelector((state) => state.posts);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-16 mx-48">
      <h2 className="text-3xl text-center">Blog posts</h2>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {posts && posts.map((post) => (
          <Post
            title={post.title.rendered}
            content={post.content.rendered}
            author={post._embedded.author[0].name}
            category={post._embedded['wp:term'][0][0].name}
            date={post.date}
          />
        ))}
      </Slider>
      <div className="flex justify-center">
        <button type="button" onClick={sliderRef?.slickPrev}>
          <FiArrowLeft size={28} />
        </button>
        <button type="button" onClick={sliderRef?.slickNext}>
          <FiArrowRight size={28} />
        </button>
      </div>
    </div>
  );
}
