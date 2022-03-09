import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { PrimaryColours } from "../styles/GlobalStyles";
import capture from "../assets/capture.png";
import colourPicker from "../assets/colour-picker.png";
import musicPlayer from "../assets/music-player.png";
import photographyPortfolio from "../assets/photography-portfolio.png";
import beatmaker from "../assets/beatmaker.png";

const Section = styled.section`
  margin: 25rem 5rem;
  display: flex;

  @media screen and (max-width: 900px) {
    margin: 20rem 3rem;
  }

  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin: 8rem 3rem;
  }

  @media screen and (max-width: 500px) {
    margin: 8rem 2rem;
  }
`;

const PortfolioText = styled.div`
  flex: 1 1 20rem;
  margin-right: 7rem;

  h2 {
    font-weight: bold;
  }

  svg {
    color: ${PrimaryColours.textGrey};
    height: 5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: ${PrimaryColours.white};
    }
  }

  @media screen and (max-width: 750px) {
    margin-right: 0rem;
  }
`;

const ColourP = styled.p`
  display: flex;
  align-items: center;
  color: ${PrimaryColours.blue};
  font-size: 1.8rem;

  span {
    display: inline-block;
    width: 4rem;
    height: 0.3rem;
    margin-right: 2rem;
    background: ${PrimaryColours.blue};
  }
`;

const SwiperStyled = styled(Swiper)`
  flex: 1 1 20rem;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${PrimaryColours.blue};
  }

  .swiper-button-next {
    padding-right: 4rem;
  }

  .swiper-button-prev {
    padding-left: 4rem;
  }

  @media screen and (max-width: 750px) {
    min-height: 45vh;
    margin-top: 3rem;
    width: 100%;
  }

  @media screen and (max-width: 650px) {
    min-height: 40vh;
  }

  @media screen and (max-width: 550px) {
    min-height: 35vh;
  }

  @media screen and (max-width: 450px) {
    min-height: 30vh;
  }

  @media screen and (max-width: 400px) {
    min-height: 27vh;
  }
`;

const GreyP = styled.p`
  color: ${PrimaryColours.textGrey};
  font-size: 1.8rem;

  span {
    display: block;
    padding-top: 2rem;
  }
`;

const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio">
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
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <a
            href="https://vibrant-brattain-45c715.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={capture} alt="capture website" />
          </a>
          <h3>Capture</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://optimistic-rosalind-1bef0e.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={colourPicker} alt="colour picker website" />
          </a>
          <h3>Colour Picker</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://gifted-yonath-096073.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={musicPlayer} alt="music player website" />
          </a>
          <h3>Music Player</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://determined-bhaskara-0b23f3.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={photographyPortfolio}
              alt="photography portfolio website"
            />
          </a>
          <h3>Photography Portfolio</h3>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://gracious-lovelace-036ae5.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={beatmaker} alt="beatmaker website" />
          </a>
          <h3>Beatmaker</h3>
        </SwiperSlide>
      </SwiperStyled>
    </Section>
  );
};

export default Portfolio;
