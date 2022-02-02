import React from 'react';
import { useSelector } from 'react-redux';

export default function Images() {
  const images = useSelector((state) => state.images);
  const gallery = images.filter((img) => img.caption.rendered);

  return (
    <div className="my-16 mx-6 md:mx-18 xl:mx-48">
      <h2 className="text-3xl text-center mb-6">Our Gallery</h2>
      <div className="grid grid-cols-4">
        {gallery
        && gallery.map((img) => (
          <a href={img.media_details.sizes.full.source_url} target="_blank" rel="noreferrer">
            <img
              className="object-cover h-48 w-96 opacity-75 hover:opacity-100"
              src={img.media_details.sizes.full.source_url}
              alt={img.alt_text}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
