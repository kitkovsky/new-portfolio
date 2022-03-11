import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { PrimaryColours } from "../styles/GlobalStyles";
import Backdrop from "./Backdrop";

const dropIn: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const StyledModal = styled(motion.div)`
  margin: auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${PrimaryColours.bgBlack};

  p {
    padding: 2rem;
    color: ${PrimaryColours.white};
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

interface Props {
  handleClose: any;
}

const Modal: React.FC<Props> = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <StyledModal
        onClick={(event) => event.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>Twoja wiadomość została wysłana!</p>
        <button onClick={handleClose}>Zamknij</button>
      </StyledModal>
    </Backdrop>
  );
};

export default Modal;
