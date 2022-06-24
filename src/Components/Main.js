import React from "react";
import mainLogo from "../Img/main_logo.png";
import { SiHomeadvisor } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { GrNext } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { GrPrevious } from "react-icons/gr";
import bannerImg1 from "../Img/Banner_1.jpg";
import bannerImg2 from "../Img/Banner_2.jpg";
import profileImg from "../Img/profile_image.png";
import mockup1 from "../Img/mockups.png";
import mockup2 from "../Img/mockups2.png";
import VideoTab from "../Components/MinComponents/VideoTab";
import Clip from "../video/Clip.mov";
import Popup from "./Popup";

function Main() {
  const [popup, setPopup] = React.useState(false);
  const [banner, setBanner] = React.useState(false);
  const [data, setData] = React.useState([
    {
      name: "",
      email: "",
      country: "",
      role: "",
      company: "",
      contact: "",
    },
  ]);
  const showPopup = () => {
    setPopup(!popup);
  };

  const next = () => {
    setBanner(!banner);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  return (
    <div className="Main">
      {popup ? (
        <Popup
          bannerImg1={bannerImg1}
          bannerImg2={bannerImg2}
          showPopup={showPopup}
        />
      ) : (
        ""
      )}
      <header>
        <img src={mainLogo} alt="logo" />
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            className="input-search"
            placeholder="Search..."
          />
          <div className="search-icon">
            <BsSearch className="icon-search" />
          </div>
        </div>

        <div className="profile">
          <img src={profileImg} alt="profile img" />
        </div>
      </header>

      <section className="hero-section" id="Home">
        <nav>
          <a href="#Home">
            <SiHomeadvisor className="nav-icons" />
          </a>
          <a href="#Video">
            <MdOndemandVideo className="nav-icons" />
          </a>
          <a href="#Setting">
            <VscSettingsGear className="nav-icons" />
          </a>
        </nav>
        <div className="hero-banner">
          {banner ? (
            <img src={bannerImg2} alt="Banner img" />
          ) : (
            <img src={bannerImg1} alt="Banner img" />
          )}

          <div className="left">
            <GrNext className="banner-icon" onClick={next} />
          </div>
          <div className="right">
            <GrPrevious className="banner-icon" onClick={next} />
          </div>
        </div>

        <div className="advisors">
          <h3>
            <span>Welcome to the Life</span> Life Advisors
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            repudiandae architecto nisi exercitationem facilis similique,
            suscipit, consequatur laboriosam, ratione doloremque incidunt.
            Voluptas quam eaque, ex impedit saepe mollitia facilis alias aliquam
            atque rem quod id, rerum quia cumque neque eos, optio beatae.
            Voluptates, nesciunt eaque dolorum fuga sapiente ea iure
            necessitatibus laudantium hic recusandae possimus velit vero
            molestiae cumque qui maxime odit omnis explicabo ab repellat dolor
            perspiciatis. Non est assumenda iste! Enim doloremque, sit sint
            nostrum et quidem tempora.
          </p>
        </div>
      </section>
      <section className="types">
        <div className="sub-section-top sub-section">
          <div className="type-img">
            <img src={mockup1} alt="book-img" />
          </div>
          <div className="Simply">
            <small>Lorem Ipsum</small>
            <h4>Lorem Ipsum is Simply</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              doloribus quaerat alias, fugiat tenetur in tempora deleniti
              consectetur maiores reiciendis.
            </p>
            <button className="readmore-btn" onClick={showPopup}>
              Read more
            </button>
          </div>
        </div>
        <div className="sub-section-bottom sub-section">
          <div className="Simply ">
            <small>Lorem Ipsum</small>
            <h4>Lorem Ipsum is Simply</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              doloribus quaerat alias, fugiat tenetur in tempora deleniti
              consectetur maiores reiciendis.
            </p>
            <button className="readmore-btn" onClick={showPopup}>
              Read more
            </button>
          </div>
          <div className="type-img">
            <img src={mockup2} alt="book-img" />
          </div>
        </div>
      </section>
      <section className="video-tab" id="Video">
        <VideoTab profileImg={profileImg} Clip={Clip} />
        <VideoTab profileImg={profileImg} Clip={Clip} />
        <VideoTab profileImg={profileImg} Clip={Clip} />
        <VideoTab profileImg={profileImg} Clip={Clip} />
      </section>

      <section className="form-tab" id="Setting">
        <div className="form" action="">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="name"
          />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            onChange={handleChange}
            type="text"
            name="country"
            id="country"
            placeholder="country"
          />
          <input
            onChange={handleChange}
            type="text"
            name="you role"
            id="yourole"
            placeholder="you role"
          />
          <input
            onChange={handleChange}
            type="text"
            name="company"
            id="company"
            placeholder="company"
          />
          <input
            onChange={handleChange}
            type="num"
            name="contact no"
            id="contactno"
            placeholder="contact no"
          />
          <button className="submit-btn">Submit</button>
        </div>
      </section>

      <footer className="bottom-footer">
        <img src={mainLogo} alt="main logo" />
        <p>Copyright 2022 | All Rights reserved </p>
      </footer>
    </div>
  );
}

export default Main;
