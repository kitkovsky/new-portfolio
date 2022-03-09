import React from "react";
import styled from "styled-components";
import { PrimaryColours } from "../styles/GlobalStyles";

const Section = styled.section`
  margin: 25rem 5rem;
  display: flex;

  @media screen and (max-width: 900px) {
    margin: 20rem 3rem;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin: 15rem 3rem;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 20rem;

  h2 {
    font-weight: bold;
    padding-right: 3rem;
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

const GreyP = styled.p`
  color: ${PrimaryColours.textGrey};
  font-size: 1.8rem;
  padding-right: 7rem;
`;

const FormWrapper = styled.div`
  flex: 1 1 20rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 100%;

  label {
    color: ${PrimaryColours.white};
    font-size: 2.3rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  input {
    min-height: 6rem;
  }

  textarea {
    min-height: 30rem;
    resize: none;
  }

  input,
  textarea {
    background: ${PrimaryColours.bgGrey};
    border: none;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${PrimaryColours.white};
    font-size: 1.8rem;
  }

  button {
    color: ${PrimaryColours.white};
    background: ${PrimaryColours.bgGrey};
    border: none;
    padding: 2rem 3.5rem;
    margin: 2rem 0rem;
    font-size: 2.3rem;
    width: 15rem;
    cursor: pointer;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const ContactDiv = styled.div`
  margin-right: 5rem;

  p {
    padding-bottom: 1rem;
  }

  a {
    color: ${PrimaryColours.textGrey};
  }
`;

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <Text>
        <ColourP>
          <span></span>Kontakt
        </ColourP>
        <h2>Popracujmy razem!</h2>
        <GreyP>
          Jeśli interesują Cię moje projekty i chcesz nawiązać ze mną
          współpracę, możesz skorzystać z formularza kontaktowego, napisać maila
          lub do mnie zadzwonić. Porozmawiamy o Twoim projekcie, przygotuję
          wstępną specyfikację i niezobowiązującą wycenę.
        </GreyP>
        <ContactLinks>
          <ContactDiv>
            <p>Zadzwoń</p>
            <a href="tel:+48534896084">534 896 084</a>
          </ContactDiv>
          <ContactDiv>
            <p>Napisz</p>
            <a href="mailto:okitkowski114@gmail.com">okitkowski114@gmail.com</a>
          </ContactDiv>
        </ContactLinks>
      </Text>
      <FormWrapper>
        <StyledForm data-netlify="true" name="contact" action="POST">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Wiadomość</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Wyślij</button>
        </StyledForm>
      </FormWrapper>
    </Section>
  );
};

export default Contact;
