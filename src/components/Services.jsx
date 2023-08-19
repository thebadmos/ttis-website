import React, { useEffect } from "react";
import tw from "twin.macro";

import AOS from "aos";
import "aos/dist/aos.css";

import Business from "../assets/Business.svg";
import Analyst from "../assets/Analyst.svg";
import SeniorAnalyst from "../assets/Analyst2.jpg"
import Behavior from "../assets/Behavior.svg";
import Technology from "../assets/Technological.svg";
import Indicator from "../assets/indicator.svg";
import Fade from "react-reveal/Fade";
import styled, { keyframes } from "styled-components";
import Zoom from "react-reveal/Zoom";

export const ContentContainer = styled.div`
  ${tw`text-base p-[calc(8px + 1.5625vw)] pb-10  ml-20`}
`;
export const DivContainer = styled.div`
  ${tw`grid gap-5 lg:gap-0 md:grid-cols-1 lg:grid-cols-1`}
`;
export const Col = styled.div`
  ${tw`w-full flex flex-col lg:justify-self-center`}
`;

export const Header = styled.h1`
  ${tw`text-2xl font-bold text-black`}
`;
export const Paragraph = styled.p`
  ${tw`text-lg mt-4 text-black`}
`;

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContentContainer className="bg-[#FBFBFB] rounded-lg lg:mt-6" id="services">
        <DivContainer id="contentContainer">
          <Col className="relative">
            <div className="lg:my-4 md:ml-4">
              <Header id="header-services">Our Services</Header>
              <hr className="border-t-4 w-10 border-[#0FA556]"/>
              <Zoom>
                <Paragraph
                
                  className="lg:pr-32 py-4 regular-font"
                  id=""
                  data-aos="zoom-out-up"
                >
                  <div id="header-services">
                    {" "}
                    Our services are a compilation of a business/product
                    technological development journey. We take a walk through
                    what the purpose and goal of the project is, first from the
                    visionaries’ perspective and secondly technological
                    utilities in delivering this goal. Our services are embedded
                    into each other and can also be integrated singularly,
                    depending on an exact need.
                  </div>
                </Paragraph>
              </Zoom>
              <div class=" grid gap-5 lg:gap-0 md:grid-cols-4 lg:grid-cols-4" id="carousel">
                <div class="p-1">
                  <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <a
                      href="#dd"
                      class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                      title=""
                    >
                      <img src={Business} alt="business" />
                    </a>
                    <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-[#0FA556] p-4 rounded shadow dark:shadow-gray-700">
                      <a
                        href="#ss"
                        class="hover:text-primary-600 text-lg transition duration-500 font-medium"
                      >
                        Business Modelling
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-1">
                  <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <a
                      href="#dd"
                      class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                      title=""
                    >
                      <img src={Behavior} alt="behavior"/>
                    </a>
                    <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-[#0FA556] p-4 rounded shadow dark:shadow-gray-700">
                      <a
                        href="#dd"
                        class="hover:text-primary-600 text-lg transition duration-500 font-medium"
                      >
                        Behavior Design
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-1">
                  <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <a
                      href="#dd"
                      class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                      title=""
                    >
                      <img src={Technology} alt="Technology"/>
                    </a>
                    <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-[#0FA556] p-4 rounded shadow dark:shadow-gray-700">
                      <a
                        href="#dd"
                        class="hover:text-primary-600 text-lg transition duration-500 font-medium"
                      >
                        Technological Inclusion
                      </a>
                    </div>
                  </div>
                </div>
                <div class="p-1">
                  <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                    <a
                      href="#dd"
                      class="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom"
                      title=""
                    >
                      <img src={SeniorAnalyst} className="analyst" alt="analyst" />
                    </a>
                    <div class="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-white dark:bg-[#0FA556] p-4 rounded shadow dark:shadow-gray-700">
                      <a
                        href="#dd"
                        class="hover:text-primary-600 text-lg transition duration-500 font-medium w"
                      >
                        Business Analytics
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center py-4" id="indicator">
              <img src={Indicator} alt="indicator" />
            </div>
          </Col>
          
        </DivContainer>
      </ContentContainer>
    </>
  );
}
