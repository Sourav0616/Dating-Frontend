import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import image from "../../public/image/jori-logos_transparent.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="flex flex-col w-96 m-auto h-auto justify-center items-center bg-blue-950 mb-0">
      <div className="h-48 w-[360px] border-2 border-yellow-50 bg-yellow-600 flex flex-col justify-between items-center rounded-3xl mt-6">
        <div className="h-28 w-28">
          <img src={image} alt="" />
        </div>
        <h1 className="h-20 pt-3 font-bold text-xl text-blue-950">
          The Marage Complete Solution
        </h1>
      </div>
      <div className="h-48 w-[360px] border-2 border-yellow-50 bg-yellow-600 flex flex-col justify-around items-center rounded-3xl mt-2">
        <h1 className="font-bold text-xl h-10 text-yellow-50">FEATURES</h1>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">Home</h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">About</h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">Priceing</h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">Interface</h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">User Guide</h3>
        </a>
      </div>
      <div className="h-48 w-[360px] border-2 border-yellow-50 bg-yellow-600 flex flex-col justify-around items-center rounded-3xl mt-2">
        <h1 className="font-bold text-xl h-10 text-yellow-50">SERVICES</h1>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">
            24 * 7 Live Support
          </h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">Contact Us</h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">Feedback</h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">Rise Token</h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">FAQs</h3>
        </a>
      </div>
      <div className="h-48 w-[360px] border-2 border-yellow-50 bg-yellow-600 flex flex-col justify-around items-center rounded-3xl mt-2">
        <h1 className="font-bold text-xl h-10 text-yellow-50">POLICIES</h1>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">
            Tearms & Conditions
          </h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">Privacy Policy</h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">Cookie Policy</h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">
            Fraud Disclaimer
          </h3>
        </a>
        <a Link="">
          <h3 className="text-base font-bold text-blue-950">ONDC Disclaimer</h3>
        </a>
      </div>
      <div className="h-16 w-[360px] m-auto flex mt-5 mb-5 justify-around items-center">
        <div className="h-16 w-16 rounded-lg bg-black  text-yellow-400">
          <a Link="">
            <FaFacebookSquare className="rounded-xl h-16 w-16" />
          </a>
        </div>
        <div className="h-16 w-16 rounded-lg bg-black text-yellow-400">
          <a Link="">
            <FaSquareTwitter className="rounded-xl h-16 w-16  text-yellow-400" />
          </a>
        </div>
        <div className="h-16 w-16 rounded-lg bg-black   text-yellow-400">
          <a Link="">
            <FaLinkedin className="rounded-xl h-16 w-16 " />
          </a>
        </div>
        <div className="h-16 w-16 rounded-lg bg-black   text-yellow-400">
          <a Link="">
            <FaGithubSquare className="rounded-xl h-16 w-16" />
          </a>
        </div>
        <div className="h-16 w-16 rounded-lg bg-black  text-yellow-400">
          <a Link="">
            <FaSquareWhatsapp className="rounded-xl h-16 w-16" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
