import React, { useState } from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";
// shadow-md w-4/5 mt-24 fixed top-0 left-0 z-20 bg-[#FAF9F9] py-4 lg:py-4 ml-32 p-[calc(9px + 1.5625vw)] rounded-lg
const NavbarContainer = styled.div`
  // ${tw` mt-20  top-0 left-0 z-20  py-4 lg:py-4 ml-20 p-[calc(9px + 1.5625vw)] `}
  ${tw`shadow-md w-full fixed top-0 left-0 z-20 bg-[#FAF9F9] lg:py-0 p-[calc(9px + 1.5625vw)] `}
`;

const NavbarAlign = styled.div`
  ${tw`lg:flex items-center `}
`;
const SignBtn = styled.div`
  ${tw`text-sm rounded-lg lg:ml-4 w-28 p-1 border-2 
text-center justify-center`}
`;

const Nav = () => {
  const Menu = [
    ["About us", "about"],
    ["Services", "services"],
    ["Contact us", "contact"],
  ];

  let [open, setOpen] = useState(false);
  const smoothScroll = (id) => {
    const element = document.getElementById(id); 
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setOpen(false);
  };

  return (
    <>

      <NavbarContainer>
        <NavbarAlign className="navBg ">
          <div className="font-medium w-full text-lg text-sm flex justify-between lg:w-full items-center fontFamily-mulish">
            <div className="">
              <Logo />
            </div>

            <div
              onClick={() => setOpen(!open)}
              className="right-8 top-6 z-40 cursor-pointer lg:hidden"
              id="toggle-mobile"
            >
              <svg
                className={`fill-current h-6 w-6 ${open ? "close" : "menu"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              {/* <ion-icon name={open ? "close" : "menu"} id="ion-icon"></ion-icon> */}
            </div>

            <div
              id="toogleDeails"
              className={`flex flex-col lg:flex-row space-y-5 lg:space-y-0 fixed lg:static bg-white lg:bg-transparent top-0 bottom-0 w-full transition-all duration-500 ease-in ${
                open ? "-right-0" : "-right-full"
              }`}
            >
              <ul
                className={`text-lg  flex py-12 mt-20 lg:mt-0 flex-col lg:flex-row space-y-5 lg:space-y-0 justify-center lg:ml-[500px] lg:space-x-16 items-center lg:w-full`}
                 id="menu"
              >
                {Menu.map(([title, id]) => (
                  <li key={title} className="poppins-font">
                    <Link
                      
                      className="text-slate-500 link hover:text-gray-400 duration-500 hover:border-b-2 border-[#0FA556]"
                      to={`#${id}`} // Use the section ID as the href
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScroll(id);
                      }}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* <div className="text-base flex justify-center space-x-5">
                
                <div className="" id="loginBtn">
                  <SignBtn className="">
                    <Link className="link" to="/login">
                      <h1 className="text-primary">Log in</h1>
                    </Link>
                  </SignBtn>
                </div>
                <div className="" id="startedBtn">
                  <SignBtn className="bg-BACKGROUND_BLUE">
                    <Link className="link" to="/register">
                      <h1 className="text-white lg:animate-pulse lg:hidden">
                        Register
                      </h1>
                      <h1 className="hidden lg:block text-white lg:animate-pulse">
                        Get Started
                      </h1>
                    </Link>
                  </SignBtn>
                </div>
              </div> */}
            </div>
          </div>
        </NavbarAlign>
      </NavbarContainer>
    </>
  );
};

export default Nav;
