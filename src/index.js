import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import './index.css';

import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'

import profile from './assets/profile-1.png'
import ParallaxContainer from "./ParallaxContainer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="w-full flex justify-center absolute z-10 ">
          <div className="w-[540px] h-[100vh] backdrop-blur-sm bg-white/30">
            <div className="w-full flex justify-center pt-[2rem]">
              <div className="lg:w-[14rem] lg:h-14rem flex sm:w-[20rem] justify-center">
                <img src={profile} alt="" className='object-cover' />
              </div>
            </div>

            <div className="mt-[1.8rem]">
              <p className='px-[4rem] text-[14px] text-justify text-white'>Hallo saya Amar Nuruddin seorang frontend Developer, skils yang saya kuasai HTML,CSS,JS,REACT. Saya belajar forntend sudah hampir 2 tahun ini</p>
            </div>

            <div className="flex gap-[2rem] justify-center mt-[4rem]">
              <div className="hover:bg-gray-400 w-[4rem] h-[4rem] flex items-center justify-center rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
                <a href='https://github.com/amarNrddn' target="_blank" className=''>
                  <div className="flex justify-center">
                    <FaGithub className='text-[1.9rem] text-white mb-[2px]' />
                  </div>
                  <p className='text-white text-[10px]'>Github</p>
                </a>
              </div>

              <div className="hover:bg-gray-400 w-[4rem] h-[4rem] flex items-center justify-center rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <a href='https://www.linkedin.com/in/amar-palevi-592282257/' target="_blank" className=''>
                  <div className="flex justify-center">
                    <BsLinkedin className='text-[1.8rem] text-white mb-[2px]' />
                  </div>
                  <p className='text-white text-[10px]'>Linkedin</p>
                </a>
              </div>

              <div className="hover:bg-gray-400 w-[4rem] h-[4rem] flex items-center justify-center rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                <a href='https://www.instagram.com/amarrnrdn/?hl=id' target="_blank" className=''>
                  <div className="flex justify-center">
                    <GrInstagram className='text-[1.8rem] text-white mb-[2px]' />
                  </div>
                  <p className='text-white text-[10px]'>Instagram</p>
                </a>
              </div>
            </div>
          </div>
      </div>
      <ParallaxContainer />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
