import React from "react";
import { FaCode, FaLink, FaQrcode } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" ">
    <Hero/>
    <Features/>
    <HowItWorks/>
    <Benefits/>
    <About/>
    <Footer/>
    </div>
  );
};
function Hero() {
  return (
    <div className="">
    <section className="md:px-32 px-4 flex flex-wrap lg:flex-row items-center justify-center mt-10 mx-auto ">
      <div className="w-[50rem]">
       
        <h2 className="md:text-4xl text-2xl font-bold tracking-wide text-[#64B5F6]">
         <span className="md:text-6xl text-4xl pb-1 block"> Share your snippets </span>
         <span>with  anyone, anywhere.</span>
        </h2>
        <p className="mt-4 text-lg ">
          SnippetSwap is a platform that lets you create, update, and share code snippets with anyone. You can set an expiry date for your snippets, generate a public access link, and scan a QR code to access them without logging in.
        </p>
        <Link to={'/login'}>
        <button className="mt-6 px-6 py-3 bg-[#FFC107] text-white rounded-lg hover:bg-[#E6A000] hover:duration-300 transition-all">
          Try it for free
        </button>
        </Link>
      </div>
      <div className="mt-8">
        <img src="./hero.png" alt="Hero image" className="cursor-pointer hover:opacity-80 hover:duration-300 transition-all"  />
      </div>
    </section>
    </div>
  );
}
function Features() {
  return (
    <div className="bg-[#2E2E2E] pb-10">
    <section className="md:px-32 px-4 py-8  mx-auto mt-4">
      <h3 className="text-3xl font-bold text-center text-[#64B5F6]">Features</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <FaCode className="text-6xl text-[#FFC107]" />
          <h4 className="mt-4 text-xl font-bold text-gray-200">Create Snippets</h4>
          <p className="mt-2 text-gray-300 text-center">
            You can create code snippets in any programming language and syntax. You can also set an expiry date for your snippets, from one hour to one year.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaLink className="text-6xl text-[#FFC107]" />
          <h4 className="mt-4 text-xl font-bold text-gray-200">Share Links</h4>
          <p className="mt-2 text-gray-300 text-center">
            You can generate a public access link for your snippets and share it with anyone. Anyone with the link can view your snippet without logging in.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaQrcode className="text-6xl text-[#FFC107]" />
          <h4 className="mt-4 text-xl font-bold text-gray-200">Scan QR Codes</h4>
          <p className="mt-2 text-gray-300 text-center">
            You can scan a QR code to access your snippets on any device. You can also download the QR code as an image and print it or share it online.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
function HowItWorks() {
  return (
    <div className="pb-10">
    <section className="md:px-32 px-4  py-8 ">
      <h3 className="text-3xl font-bold text-center text-[#64B5F6]">How it works</h3>
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="flex items-center">
          <span className="text-4xl font-bold text-[#FFC107] mr-2">1</span>
          <p className="text-lg text-gray-300">Create an account and log in to SnippetSwap.</p>
        </div>
        <div className="flex items-center">
          <span className="text-4xl font-bold text-[#FFC107] mr-2">2</span>
          <p className="text-lg text-gray-300">Create a snippet in any programming language and syntax.</p>
        </div>
        <div className="flex items-center">
          <span className="text-4xl font-bold text-[#FFC107] mr-2">3</span>
          <p className="text-lg text-gray-300">Set an expiry date for your snippet, from one hour to one year.</p>
        </div>
        <div className="flex items-center">
          <span className="text-4xl font-bold text-[#FFC107] mr-2">4</span>
          <p className="text-lg text-gray-300">Share your snippet with anyone using a public access link or a QR code.</p>
        </div>
      </div>
    </section>
    </div>
  );
}
function Benefits() {
  return (
    <div className="bg-[#2E2E2E] pb-10">
    <section className="md:px-32 px-4  py-8">
      <h3 className="text-3xl font-bold text-center text-[#64B5F6]">Benefits</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex items-start">
          <FaCheck className="text-4xl text-[#FFC107] mr-2" />
          <p className="text-lg text-gray-300">Save time and hassle by creating and sharing code snippets in seconds.</p>
        </div>
        <div className="flex items-start">
          <FaCheck className="text-4xl text-[#FFC107] mr-2" />
          <p className="text-lg text-gray-300">Choose from any programming language and syntax for your snippets.</p>
        </div>
        <div className="flex items-start">
          <FaCheck className="text-4xl text-[#FFC107] mr-2" />
          <p className="text-lg text-gray-300">Set an expiry date for your snippets, from one day to one year.</p>
        </div>
        <div className="flex items-start">
          <FaCheck className="text-4xl text-[#FFC107] mr-2" />
          <p className="text-lg text-gray-300">Share your snippets with anyone using a public access link or a QR code.</p>
        </div>
      </div>
     
    </section>
    </div>
  );
}
function About() {
  return (
    <div className=" pb-10">
    
    <section className="md:px-32 px-4 py-8 ">
      <h3 className="text-3xl font-bold text-center text-[#64B5F6]">About</h3>
      <div className="mt-8 flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="">
          <img src="./pic.jpg" alt="About image" className="md:h-96 rounded-lg" />
        </div>
        <div className="lg:w-1/2">
          <p className="md:text-lg text-gray-300">
            Hi, I'm Ashraya Dargarh, the founder of SnippetSwap. I'm a web developer who loves to code and share my knowledge with others. I created SnippetSwap as a side project to solve a problem that I faced every day: how to quickly and easily share code snippets with anyone, anywhere.
          </p>
          <p className="md:text-lg text-gray-300 mt-4">
            SnippetSwap is a platform that lets you create, update, and share code snippets with anyone. You can set an expiry date for your snippets, generate a public access link, and scan a QR code to access them without logging in. SnippetSwap supports any programming language and syntax, so you can share your snippets with anyone, no matter what they code in.
          </p>
          <p className="md:text-lg text-gray-300 mt-4">
            My mission is to make SnippetSwap the best platform for sharing code snippets online. My vision is to create a community of developers who can learn from each other and collaborate on projects. I hope you enjoy using SnippetSwap as much as I enjoy building it.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
function Footer() {
  return (
    <div className="bg-[#2E2E2E] pb-4 pt-4">

    <footer className="flex flex-col items-center px-4 text-white">
      <div className="flex items-center mb-4">
        <img src="logo.svg" alt="SnippetSwap logo" className="h-8 mr-2" />
        <h1 className="text-xl font-bold">SnippetSwap</h1>
      </div>
      <p className="text-center">
      Have any questions or feedback? I'd love to hear from you. Send me a mail and I'll get back to you as soon as possible.
      </p>
      <p className="mb-4 text-center">Contact me at <a href="mailto:snippetswap@gmail.com" className="text-[#FFC107]">snippetswap@gmail.com</a>
      </p>
     
      <p className="text-gray-300 text-center mt-2">
        Developed by <a href="https://www.ashrayadargarh.me" className="text-[#FFC107] hover:underline" target="_blank"> Ashraya Dargarh</a>, Created with MERN Stack.
        </p>
     
    </footer>
    </div>
  );
}

function About2() {
  return (
    <div className="container mx-auto px-4 py-14">
      <h1 className="text-4xl font-bold text-red-400 text-center">About Me</h1>
      <div className='border border-gray-500 mt-8'></div>

      <p className=" text-white text-center mt-4">
      As a passionate developer, I built SnippetSwap as a platform for creating and sharing snippets of any piece of information with anyone in a simple and enjoyable manner.
      </p>
      <div className='border border-gray-500 mt-8'></div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold text-red-400 text-center">My Mission</h2>
      <div className='border border-gray-500 mt-8'></div>
        <p className="text-white text-center mt-4">
        My mission is to enable people to create and share snippets of any piece of information with anyone in a simple and secure way. You can create and share any kind of snippet you want, such as code, quote, recipe, joke, or anything else. I want to help you share it with the world.
        </p>
      <div className='border border-gray-500 mt-8'></div>

      </div>
      
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-red-400 text-center">My Vision</h2>
      <div className='border border-gray-500 mt-8'></div>

        <p className="text-white text-center mt-4">
          {" "}
          I aspire to establish a community of snippet creators and sharers who can learn from each other, inspire each other, and have fun with each other. I want to make SnippetSwap a place where you can find snippets of anything you are interested in, and where you can present your own snippets to the world.{" "}
        </p>{" "}
      <div className='border border-gray-500 mt-8'></div>

      </div>{" "}
      
        <p className="text-gray-300 text-center mt-10">
        Developed by <a href="https://www.ashrayadargarh.me" className="text-blue-300 hover:underline" target="_blank"> Ashraya Dargarh</a>, Created with MERN Stack.
        </p>
    </div>
  );
}

export default Home;
