import React, { useEffect, useMemo, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UpArrow from "./components/UpArrow";
import "swiper/css/bundle";
import { useInView } from "react-intersection-observer";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

export enum SectionNames {
  Hero,
  Portfolio,
  Tools,
  Contact,
}

type Sections = "hero" | "portfolio" | "tools" | "contact";

export interface SectionState {
  name: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const threshold = 0.5;

  const [heroRef, heroInView] = useInView({ threshold: threshold });
  const [portfolioRef, portfolioInView] = useInView({ threshold: threshold });
  const [toolsRef, toolsInView] = useInView({ threshold: threshold });
  const [contactRef, contactInView] = useInView({ threshold: threshold });

  const [heroState, setHeroState] = useState(false);
  const [portfolioState, setPortfolioState] = useState(false);
  const [toolsState, setToolsState] = useState(false);
  const [contactState, setContactState] = useState(false);

  const sectionStates: SectionState[] = useMemo(() => {
    return [
      {
        name: "hero",
        state: heroState,
        setState: setHeroState,
      },
      {
        name: "portfolio",
        state: portfolioState,
        setState: setPortfolioState,
      },
      {
        name: "tools",
        state: toolsState,
        setState: setToolsState,
      },
      {
        name: "contact",
        state: contactState,
        setState: setContactState,
      },
    ];
  }, [heroState, portfolioState, toolsState, contactState]);

  useEffect(() => {
    const sectionsInView = new Map<Sections, boolean>([
      ["hero", heroInView],
      ["portfolio", portfolioInView],
      ["tools", toolsInView],
      ["contact", contactInView],
    ]);

    let numSectionsInView = 0;
    sectionsInView.forEach((visible) => {
      if (visible) {
        numSectionsInView += 1;
      }
    });
    if (numSectionsInView < 1 || numSectionsInView > 1) {
      if (numSectionsInView > 1 && heroInView && portfolioInView) {
        setHeroState(true);
        setPortfolioState(false);
      }
    } else {
      for (let [key, value] of sectionsInView.entries()) {
        switch (key) {
          case "hero":
            if (value) {
              sectionStates[SectionNames.Hero].setState(true);
            } else {
              sectionStates[SectionNames.Hero].setState(false);
            }
            break;
          case "portfolio":
            if (value) {
              sectionStates[SectionNames.Portfolio].setState(true);
            } else {
              sectionStates[SectionNames.Portfolio].setState(false);
            }
            break;
          case "tools":
            if (value) {
              sectionStates[SectionNames.Tools].setState(true);
            } else {
              sectionStates[SectionNames.Tools].setState(false);
            }
            break;
          case "contact":
            if (value) {
              sectionStates[SectionNames.Contact].setState(true);
            } else {
              sectionStates[SectionNames.Contact].setState(false);
            }
            break;
        }
      }
    }
  }, [heroInView, portfolioInView, toolsInView, contactInView, sectionStates]);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        sectionStates={sectionStates}
      />
      <Hero heroRef={heroRef} />
      <Portfolio portfolioRef={portfolioRef} />
      <Tools toolsRef={toolsRef} />
      <Contact
        contactRef={contactRef}
        openModal={openModal}
      />
      <Footer />
      <UpArrow mobileNavOpen={mobileNavOpen} heroState={heroState} />
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && <Modal handleClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
