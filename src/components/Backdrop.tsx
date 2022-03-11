import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBackdrop = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

interface Props {
 children: any;
 onClick: any;
}

const Backdrop: React.FC<Props> = ({ children, onClick }) => {
  return (
    <StyledBackdrop
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
