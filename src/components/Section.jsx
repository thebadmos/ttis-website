import React, { useEffect } from "react";
import tw from "twin.macro";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import Horizontal from "../assets/horizontal.svg";
import Illustration from "../assets/Illustration.svg";

import Fade from "react-reveal/Fade";
import styled, { keyframes } from "styled-components";
import { flip } from "react-animations";
import Zoom from "react-reveal/Zoom";

const flipper = keyframes`${flip}`;
const FlipDiv = styled.div`
  animation: 10s infinite ${flipper};
`;

export const ContentContainer = styled.div`
  ${tw`text-base p-[calc(8px + 1.5625vw)] pb-10 h-[530px]`}
`;
export const DivContainer = styled.div`
  ${tw`grid gap-5 lg:gap-0 md:grid-cols-2 lg:grid-cols-2`}
`;
export const Col = styled.div`
  ${tw`w-full flex flex-col lg:justify-self-center`}
`;
const ColFull = styled.div`
  ${tw`lg:justify-self-center`}
`;
const TextAlign = styled.div`
  ${tw`flex flex-col justify-center`}
`;
export const Header = styled.h1`
  ${tw`text-2xl font-bold text-black`}
`;
export const Paragraph = styled.p`
  ${tw`text-lg mt-4 text-black`}
`;
export const SignBtn = styled.div`
  ${tw`text-sm rounded-lg w-28 p-2 
text-center justify-center ml-5`}
`;

export default function Content() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContentContainer className="bg-white lg:mt-[-215px] " id="content2">
        <DivContainer id="contentContainer">
          <Col className="relative">
         
            <div className="lg: md:ml-4 ">
              <div
                className="lg:pr-32 text-8xl ml-20 mt-12 text-black "
                id="header-section"
                data-aos="fade-right"
              >
                PEOPLE <br />
                PROCESS <br />
                TECHNOLOGY
                <img
                  src={Horizontal}
                  alt="screen"
                  className="absolute inset-0 w-full h-full "
                  id="horizontal"
                />
             
              </div>
            </div>
          </Col>
          <ColFull>
            <Zoom>
              <div className="lg:w-[450px] mr-[-84px] mt-[-64px]" id="illus">
                <img
                  src={Illustration}
                  alt="img"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                />
              </div>
            </Zoom>
          </ColFull>
        </DivContainer>
      </ContentContainer>
    </>
  );
}
