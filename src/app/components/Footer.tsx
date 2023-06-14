import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <div className="border-t-2 my-28 ml-5 flex md:flex-row flex-col">
      <section className="flex flex-col flex-1 mr-20">
        
        <div className="basis-1/4 flex flex-row mt-10">
          <p className="text-2xl font-semibold bg-black text-white mb-3 px-4 py-1">
            Velocity
          </p>
          <p className="text-2xl ml-2 mt-1 font-medium">Wear</p>
        </div>

        <p className="text-lg text-gray-700 w-80 mt-5">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>

        <section className="flex gap-x-5 mt-6">
          <div className="bg-gray-200 p-4 rounded-lg">
            <FaFacebookF />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <IoLogoTwitter />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <FaLinkedinIn />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <AiFillGithub />
          </div>
        </section>
      </section>


      <section className="flex-1 mt-10">
       <h1 className="text-2xl font-bold">Company</h1>
       <p className="text-lg mt-4 text-gray-700">Abouts</p>
       <p className="text-lg mt-2 text-gray-700">Terms of Use</p>
       <p className="text-lg mt-2 text-gray-700">Privacy Policy</p>
       <p className="text-lg mt-2 text-gray-700">How it Works</p>
       <p className="text-lg mt-2 text-gray-700">Contact Us</p>
      </section>

      <section className="flex-1 mt-10">
       <h1 className="text-2xl font-bold">Support</h1>
       <p className="text-lg mt-4 text-gray-700">Support Carrer</p>
       <p className="text-lg mt-2 text-gray-700">24h Service</p>
       <p className="text-lg mt-2 text-gray-700">Quick Chat</p>
      </section>
      
      <section className="flex-1 mt-10">
       <h1 className="text-2xl font-bold">Contact</h1>
       <p className="text-lg mt-4 text-gray-700">Whatsapp</p>
       <p className="text-lg mt-2 text-gray-700">Support 24h</p>
      </section>

    </div>

    <div className="border-t-2 mt-10 mb-5 flex">

      <div className="flex-1 md:block hidden">
      <p className="mt-5 md:text-lg text-md">Copyright © 2022 Velocity wear</p>
      </div>

      <div className="flex-1 md:block hidden">
      <p className="mt-5 md:text-lg text-md">Design by. <b className="md:text-lg text-md font-semibold">Abdullah <br/>Design Studio</b></p>
      </div>
      <div className="flex-1 md:block hidden">
      <p className="mt-5 md:text-lg text-md">Code by. <b className="md:text-lg text-md font-semibold">Abdullah-arain<br/>on github</b></p>
      </div>
      
    </div>
      
      <div className="md:hidden block">
      <p className="mt-5 md:text-lg text-md text-center">Code by. <b className="md:text-lg text-md font-semibold">Abdullah-arain<br/>on github</b></p>
      </div>
    </>
  );
};

export default Footer;
