import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
function Popup(props) {
  return (
    <div className="Popup">
      <div className="content">
        <div className="close" onClick={props.showPopup}>
          <AiOutlineCloseCircle className="icon-close" />
        </div>
        <div className="imges">
          <img src={props.bannerImg1} alt="popup-img" />
          <img src={props.bannerImg2} alt="popup-img" />
        </div>
        <div className="text-area">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>

          <div className="parah">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              rerum quibusdam soluta id eius, quis cupiditate reiciendis,
              provident necessitatibus, consectetur tempore porro. Rerum
              voluptate consectetur velit. Qui commodi sint, iste ab animi minus
              architecto natus modi eum officiis fuga, blanditiis laudantium
              explicabo. Non illo vero quis harum accusantium. Unde, expedita!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              obcaecati, voluptate harum quaerat quae dolor labore quam iste
              nobis aliquam autem ipsum, repellat dignissimos nihil nam
              perspiciatis cumque ex! Repellendus harum odio quis, doloremque,
              ex aperiam inventore aliquam molestiae laudantium illum numquam,
              explicabo ipsum placeat magni blanditiis tempore consequatur?
              Aliquam?
            </p>
          </div>

          <button className="buy-btn">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
