import React, { useEffect } from "react";
import tw from "twin.macro";

import AOS from "aos";
import "aos/dist/aos.css";

import styled, { keyframes } from "styled-components";
import Zoom from "react-reveal/Zoom";
import Linkedln from "../assets/linkedln.svg"
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg"

export const ContentContainer = styled.div`
  ${tw`text-base p-[calc(8px + 1.5625vw)] pb-10  ml-24`}
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

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContentContainer className="bg-white lg:-mt-20 mt-[75px]" >
        <DivContainer id="contentContainer">
          <Col className="relative">
            <div className="lg:my-4 md:ml-4">
              <footer class="bg-white ">
                <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                  <div class="sm:flex sm:items-center sm:justify-between"></div>

                  <div class="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16" id="footer">
                    <div>
                      <p class="font-medium text-gray-900">COMPANY</p>

                      <ul class="mt-6 space-y-4 text-sm regular-font">
                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            About us
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            Our services
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            Careers at ttis
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p class="font-medium text-gray-900">SUPPORT</p>

                      <ul class="mt-6 space-y-4 text-sm regular-font">
                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            Support@ttis.tech
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            Blogs
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            FAQs
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p class="font-medium text-gray-900">LOCATE US</p>

                      <ul class="mt-6 space-y-4 text-sm regular-font">
                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            3rd Avenue, Sunnyvale Estate, FCT, Abuja
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            info@ttis.tech
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            +234 810 570 9634
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="ml-12" id="footer-icon">
                      <p class="font-medium text-gray-900"></p>

                      <ul class="mt-6 space-y-4 text-sm">
                        {/* <li>
                          <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            <span class="sr-only">Linkedln</span>


                            <img src={Linkedln} alt="linkedln" className="social"/>
                          </a>
                        </li> */}

                        <li>
                          <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            <span class="sr-only">Instagram</span>

                            <img src={Instagram} alt="instagram" className="social"/>
                          </a>
                        </li>

                        <li>
                          <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            <span class="sr-only">Twitter</span>

                            <img src={Twitter} alt="twiiter" className="social"/>
                          </a>
                        </li>

                        <li>
                          <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:opacity-75"
                          >
                            <span class="sr-only">Linkedln</span>

                            <img src={Linkedln} alt="linkedln" className="social"/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </Col>
        </DivContainer>
      </ContentContainer>
    </>
  );
}
