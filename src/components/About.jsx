import React, { useEffect } from "react";
import tw from "twin.macro";

import AOS from "aos";
import "aos/dist/aos.css";

import AboutImg from "../assets/about.svg";

import Fade from "react-reveal/Fade";
import styled, { keyframes } from "styled-components";
import Zoom from "react-reveal/Zoom";

export const ContentContainer = styled.div`
  ${tw`text-base p-[calc(8px + 1.5625vw)] pb-10`}
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

export const Header = styled.h1`
  ${tw`text-2xl font-bold text-black ml-24`}
`;
export const Paragraph = styled.p`
  ${tw`text-lg mt-4 text-black`}
`;

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContentContainer className="bg-white lg:-mt-20 mt-[75px]" id="content2">
        <DivContainer id="contentContainer">
          <Col className="relative">
            <div className="lg:my-4 md:ml-4">
              <Header>About us</Header>
              <Fade right>
                <Paragraph
                  className="lg:pr-32 py-8 ml-24"
                  id="header"
                  data-aos="zoom-out-up"
                >
                  <div className="">
                    {" "}
                    We are a Non Conventional ring-like DNA technology service
                    provider with a mission to promote a tech inclusive
                    community.
                  </div>
                  <div className="mt-4 w-[550px]">
                    Our drive hinges on the possibility of a digital economy
                    where ‘inclusion’ is prioritized and allows us to proffer,
                    design and build innovative technological systems that are
                    people - purpose centric.
                  </div>{" "}
                  <div className="mt-4 w-[600px]">
                    We believe in the cohesive and agile nature of a system,
                    allowing continuity and quality delivery. That is why at
                    TodayToday innovations and solutions, we see, plan, design,
                    develop and deliver the best of tomorrows’ innovation.
                  </div>
                </Paragraph>
              </Fade>
            </div>
          </Col>
          <ColFull>
            <Zoom>
              <div className="lg:w-[430px] mt-4">
                <img
                  src={AboutImg}
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
