import React from 'react';

function Video() {
  return (
    <video
      autoPlay
      loop
      muted
      className="fixed opacity-70 top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="vid.mp4" type="video/mp4" />
    </video>
  );
}

export default Video;
