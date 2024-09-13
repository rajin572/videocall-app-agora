import React from "react";

const page = ({ searchParams }) => {
  const videoCallingId = searchParams.videoID;
  console.log(videoCallingId);
  return <div>{videoCallingId}</div>;
};

export default page;
