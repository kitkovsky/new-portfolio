import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { PrimaryColours } from "../styles/GlobalStyles";
import capture from "../assets/capture.png";
import colourPicker from "../assets/colour-picker.png";
import musicPlayer from "../assets/music-player.png";
import photographyPortfolio from "../assets/photography-portfolio.png";
import beatmaker from "../assets/beatmaker.png";

const PortfolioStyled = styled.section`
  margin: 10rem 5rem;
  display: flex;
`;

const PortfolioText = styled.div`
  flex: 1 1 20rem;
  margin-right: 7rem;

  h2 {
    font-weight: bold;
  }

  svg {
    color: ${PrimaryColours.grey};
    height: 5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

const SwiperStyled = styled(Swiper)`
  flex: 1 1 20rem;

  // .swiper {
  //   width: 50rem;
  //   height: 10rem;
  // }

  // .swiper-slide {
  //   text-align: center;
  //   font-size: 18px;
  //   background: #fff;

  //   /* Center slide text vertically */
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }

  // .swiper-slide img {
  //   display: block;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  // }

  // .swiper {
  //   margin-left: auto;
  //   margin-right: auto;
  // }
`;

const ColourP = styled.p`
  display: flex;
  align-items: center;
  color: ${PrimaryColours.blue};

  span {
    display: inline-block;
    width: 4rem;
    height: 0.3rem;
    margin-right: 2rem;
    background: ${PrimaryColours.blue};
  }
`;

const GreyP = styled.p`
  color: ${PrimaryColours.grey};

  span {
    display: block;
    padding-top: 2rem;
  }
`;

const Portfolio: React.FC = () => {
  return (
    <PortfolioStyled id="portfolio">
      <PortfolioText>
        <ColourP>
          <span></span>Portfolio
        </ColourP>
        <h2>Moje projekty</h2>
        <GreyP>
          Oto moje portfolio, w którym zamieściłem najważniejsze zrealizowane
          przeze mnie projekty.
          <br />
          <span>Wszystkie są do obejrzenia na GitHubie:</span>
        </GreyP>
        <div>
          <a
            href="https://github.com/kitkovsky"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </PortfolioText>
      <SwiperStyled
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={capture} alt="capture website" />
          <h3>Capture</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={colourPicker} alt="colour picker website" />
          <h3>Colour Picker</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicPlayer} alt="music player website" />
          <h3>Music Player</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={photographyPortfolio} alt="photography portfolio website" />
          <h3>Photography Portfolio</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={beatmaker} alt="beatmaker website" />
          <h3>Beatmaker</h3>
        </SwiperSlide>
      </SwiperStyled>
    </PortfolioStyled>
  );
};

export default Portfolio;
