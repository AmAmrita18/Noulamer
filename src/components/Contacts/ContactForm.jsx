import React, { useState, useEffect } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const subjects = [
  "General Inquiry1",
  "General Inquiry2",
  "General Inquiry3",
  "General Inquiry4",
];

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("General Inquiry1");
  const [disable, setDisable] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bodyContent = `First Name: ${firstName} \nLast Name: ${lastName} \nEmail: ${email} \nPhone: ${phoneNumber} \nSubject: ${selectedSubject} \nMessage: ${message}`;

    try {
      setDisable(true);
      const response = await fetch(
        "https://noulamer-server.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ bodyContent }),
        }
      );

      if (response.ok) {

        alert("Submitted Successfully");
        setLastName("");
        setFirstName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
        setSelectedSubject("General Inquiry1");
        console.log("Email sent successfully!");
        setDisable(false);
      } else {
        alert("Error sending mail, please try again!");
        console.error("Error sending email");
        setDisable(false);
      }
    } catch (error) {
      alert("Error sending mail, please try again!");
      console.error("Error sending email:", error);
      setDisable(false);
    }
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    scrollToTop();
  }, []);

  return (
    <div className="w-full">
      <div className="w-[80%] max-w-[1200px]  md:px-4 px-0 lg:py-40 md:py-28 py-10  mx-auto">
        <div className="flex rounded-2xl   shadow-2xl drop-shadow-2xl lg:flex-row md:flex-col flex-col">
          <div className="flex flex-col lg:w-[44%] w-full md:py-12 py-6  px-16 rounded-2xl bg-[#0A385A]">
            <div className="flex flex-col">
              <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] font-[600] leading-tight text-[#FFFFFF] ">
                Contact
              </h1>
              <p className="md:text-xl text-lg font-[400] py-2 text-[#C9C9C9]">
                Say something to start live chat!
              </p>
            </div>

            <div className="flex md:py-12 py-6 flex-col md:gap-y-8 gap-y-5">
              <div className="flex flex-row items-center gap-5">
                <div>
                  <BiSolidPhoneCall className="text-[#FFFFFF] cursor-pointer text-xl" />
                </div>
                <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#FFFFFF] leading-tight">
                  +230 5123 4567
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <IoMailSharp className="text-[#FFFFFF] cursor-pointer text-xl" />
                </div>
                <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#FFFFFF] leading-tight">
                  info@noulamer.shop
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <FaLocationDot className="text-[#FFFFFF] cursor-pointer text-xl" />
                </div>
                <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#FFFFFF] leading-tight">
                  Stall Number 3, Quatre Bornes Market
                </p>
              </div>
            </div>
            <div className="md:w-[35%] w-full flex flex-row gap-5 md:pt-10 pt-0 md:pb-20 pb-4   items-center">
              <div className="w-7 bg-black cursor-pointer h-7 rounded-full flex items-center justify-center">
                <TiSocialFacebook className="text-[#FFFFFF] text-lg" />
              </div>
              <div className="w-7 h-7 bg-[#FFFFFF] cursor-pointer rounded-full flex items-center justify-center ">
                <IoLogoInstagram className="text-black text-xs" />
              </div>
            </div>
          </div>
          <div className="md:w-[56%] w-full flex flex-col  md:gap-y-10 gap-y-4 lg:py-32 md:py-24 py-12 px-12">
            <div className="flex md:flex-row flex-col lg:gap-x-8 gap-x-16 md:gap-y-0 gap-y-4">
              <div className="text-[#0A385A] lg:w-[50%] md:w-[230px] w-full border-b border-[#8D8D8D] md:text-[20px] text-[16px] font-[400]">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="bg-transparent lg:w-[100%] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-70 outline outline-0 focus:outline-0"
                />
              </div>
              <div className="text-[#0A385A] lg:w-[50%] md:w-[230px] w-full border-b border-[#8D8D8D] md:text-[20px] text-[16px] font-[400]">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="bg-transparent lg:w-[100%] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-70 outline outline-0 focus:outline-0"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col lg:gap-x-8 gap-x-16 md:gap-y-0 gap-y-4">
              <div className="text-[#0A385A] lg:w-[50%] md:w-[230px] w-full border-b border-[#8D8D8D] md:text-[20px] text-[16px] font-[400]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="bg-transparent lg:w-[100%] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-70 outline outline-0 focus:outline-0"
                />
              </div>
              <div className="text-[#0A385A] lg:w-[50%] md:w-[230px] w-full border-b border-[#8D8D8D] md:text-[20px] text-[16px] font-[400]">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                  className="bg-transparent lg:w-[100%] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-70 outline outline-0 focus:outline-0"
                />
              </div>
            </div>
            <div>
              <div className="text-[#0A385A]  pb-4  md:text-[20px] text-[16px] font-[400]">
                Select Subject
              </div>
              <div className="flex md:flex-row flex-col justify-between lg:gap-4 md:gap-10 gap-1">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="text-[#0A385A] flex md:items-baseline item-center md:text-[16px] text-[14px] font-[400] "
                  >
                    <input
                      type="radio"
                      id={`subject${index + 1}`}
                      value={subject}
                      checked={selectedSubject === subject}
                      onChange={() => setSelectedSubject(subject)}
                      className="mr-3"
                    />
                    <label htmlFor={`subject${index + 1}`}>{subject}</label>
                  </div>
                ))}
              </div>
             
            </div>
            <div className="lg:pr-20 pr-0">
              <div className="text-[#0A385A] border-b md:pb-4 pb-0 border-[#8D8D8D]  md:text-[20px] text-[16px] md:font-[500] font-[400]">
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="bg-transparent transition-all w-full  duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-70 outline outline-0 focus:outline-0"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
              disabled = {disable}
                onClick={handleSubmit}
                className="text-[#FFFFFF] disabled:bg-opacity-70 bg-[#0A385A] transition-all duration-700 ease-in-out  hover:scale-95  w-[150px]  flex items-center  gap-3 md:mt-8 mt-3 px-8  py-5 rounded-full font-[600] text-[17px]"
              >
                Submit <GoArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
