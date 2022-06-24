import React from "react";

function VideoTab(props) {
  return (
    <div className="VideoTab">
      <div className="heading">
        <img src={props.profileImg} alt="profile Img" />
        <h3>Lorem Ipsum is Simply Dummy Text</h3>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat
        cum, asperiores doloremque dolorem libero voluptatem ipsa eos provident
        ipsum, vel et repellat suscipit! Recusandae rerum inventore
        exercitationem sed hic.
      </p>
      <video controls>
        <source src={props.Clip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoTab;
