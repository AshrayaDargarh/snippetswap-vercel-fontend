import axios from "axios";
import React, { useEffect, useState } from "react";
import CopyIcon from "../assets/icons/CopyIcon";
import PasteIcon from "../assets/icons/PasteIcon";
import { Link, useNavigate, useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import { TailSpin } from "react-loader-spinner";
import { BACKEND_API } from "../config";
const initialValue = {
  title: "",
  data: "",
  daysToExpire: 0,
  userName: "",
};
const ViewPublic = () => {
  const [snippet, setSnippet] = useState(initialValue);
  const [time, setTime] = useState();
  const [copy, setCopy] = useState(false);
  const [copyCode,setCopyCode]=useState(false)
  const navigate=useNavigate()
  const { id } = useParams();
  function daysDifference(res) {
    if (res) {
      const expiryDate = new Date(res.updatedAt);
      const daysToExpire = res.daysToExpire;
      expiryDate.setDate(expiryDate.getDate() + parseInt(daysToExpire));
      const inputDate = new Date(expiryDate);
      const currentDate = new Date();
      const timeDifferenceMillis = inputDate - currentDate;
      setTime(Math.floor(timeDifferenceMillis / (60 * 60 * 1000)));
    }
  }
  async function getView() {
    try {
      const res = await axios.get(`${BACKEND_API}/public-access/${id}`);
      if (res.data) {
        setSnippet(res.data);
        daysDifference(res.data);
      }
    } catch (error) {
      navigate('/error')
      console.log(error.response);
    }
  }
  useEffect(() => {
    getView();
  }, []);
  const currentUrl = "https://snippetswap.onrender.com";
  function handleCopy() {
    navigator.clipboard.writeText(`${currentUrl}/public-access/${id}`);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  }
  function handleCopyCode() {
    navigator.clipboard.writeText(`${snippet.data}`);
    setCopyCode(true);
    setTimeout(() => {
      setCopyCode(false);
    }, 1000);
  }
  return snippet.data === "" ? (
    <div className="h-screen flex justify-center">
      <TailSpin
  height="80"
  width="80"
  color="#64B5F6"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  ) : (
    <div className=" text-white overflow-hidden font-display  ">
      {time < 0 ? (
        <div className="flex justify-center mt-10 ">
          <div className="bg-[#2E2E2E] p-8 rounded-lg shadow-lg max-w-md">
            <h3 className="text-4xl font-bold text-red-600 text-center">
              OOPS!
            </h3>
            <p className="mt-4  text-gray-300 text-center">
              The snippet you are looking for is expired. If you want to access
              the snippet ask the owner to extend the Snippet duration.
            </p>
            <Link to={"/"}>
              {" "}
              <button
                type="button"
                className="mt-4 px-6 py-3 bg-blue-500 text-[#FFFFFF] rounded-lg hover:bg-blue-600 w-full"
              >
                Home
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <form>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-32  py-8 ">
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold text-FFFFFF ">
                  Here is the Code
                </h3>
                <textarea
                  name="data"
                  id="data"
                  value={snippet.data}
                  className="bg-[#1d1b1b]  border-[#64B5F6] border-[2px] focus:border-none  focus:ring-[#64B5F6] focus:ring-offset-[#64B5F6] focus:ring-offset-2  mt-4 px-4 py-2 rounded-lg w-full h-[40rem] custom-shadow"
                  placeholder="Enter your code here..."
                  readOnly
                ></textarea>
                 <div className="flex flex-col space-y-2 mt-4">
                  {copyCode ? (
                    <>
                      <button
                        disabled
                        type="button"
                        className="px-6 py-3 bg-blue-500 text-FFFFFF rounded-lg hover:bg-blue-600 w-full"
                      >
                        Copied
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handleCopyCode}
                      type="button"
                      className=" px-6 py-3 bg-blue-500 text-FFFFFF rounded-lg hover:bg-blue-600 w-full"
                    >
                      Copy Code
                    </button>
                  )}
                </div>
              </div>
              <div className="md:w-96 mt-8 lg:mt-0">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="title" className="text-lg text-FFFFFF">
                    Snippet title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={snippet.title}
                    className="px-2 py-2 border bg-[#1d1b1b]   border-[#64B5F6]  focus:border-none  focus:ring-[#64B5F6] focus:ring-offset-[#64B5F6] focus:ring-offset-1  rounded-lg"
                    placeholder="Enter a title for your snippet..."
                    readOnly
                  />
                </div>

                <div className="flex flex-col space-y-2 mt-2">
                  <label htmlFor="daysToExpire" className="text-lg ">
                    Expire after: {time} Hours
                  </label>
                </div>

                <div className="flex flex-col space-y-2 mt-2">
                  <label htmlFor="userName" className="text-lg text-FFFFFF">
                    Created By:
                  </label>
                  <input
                    type="text"
                    id="userName"
                    name="title"
                    value={snippet.userName}
                    className="px-2 py-2 border bg-[#1d1b1b]   border-[#64B5F6]  focus:border-none  focus:ring-[#64B5F6] focus:ring-offset-[#64B5F6] focus:ring-offset-1  rounded-lg"
                    placeholder="Enter a title for your snippet..."
                    readOnly
                  />
                </div>

                <div className="flex flex-col space-y-2 mt-2">
                  <label htmlFor="share" className="text-lg text-FFFFFF">
                    Share the link:
                  </label>
                  <input
                    type="text"
                    id="share"
                    name="share"
                    value={`${currentUrl}/public-access/${id}`}
                    className="px-2 py-2  border bg-[#1d1b1b]   border-[#64B5F6]  focus:border-none  focus:ring-[#64B5F6] focus:ring-offset-[#64B5F6] focus:ring-offset-1  rounded-lg"
                    placeholder="Enter a title for your snippet..."
                    readOnly
                  />
                </div>

                <div className="flex flex-col space-y-2 mt-4">
                  {copy ? (
                    <>
                      <button
                        disabled
                        type="button"
                        className="px-6 py-3 bg-blue-500 text-FFFFFF rounded-lg hover:bg-blue-600 w-full"
                      >
                        Copied
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={handleCopy}
                      type="button"
                      className=" px-6 py-3 bg-blue-500 text-FFFFFF rounded-lg hover:bg-blue-600 w-full"
                    >
                      Copy URL
                    </button>
                  )}
                </div>
                <div className="flex flex-col space-y-2 mt-4 items-center">
                  <QRCode
                    value={`${currentUrl}/public-access/${id}`}
                    className="custom-shadow"
                    size={200}
                  />
                  <p className="text-lg ">Scan the QR Code</p>
                </div>
              </div>
            </div>
          </form>
          {/* <form >
      <div className='flex justify-center flex-wrap pt-8'>
        <div className='m-5 '>
          <label htmlFor='data' className='block pb-3' ><span className='text-2xl font-semibold'>Your code is here:</span></label>
          <textarea name="data" value={snippet.data} readOnly  
          className="bg-slate-900 p-2 border border-slate-600 rounded-md lg:w-[60rem] md:w-[45rem] sm:w-[35rem]"
           id="data" rows="34" cols="30" ></textarea>
        </div>
        
        <div className='m-5 '>
        <div className='mt-5 mr-20'>
              <label htmlFor="title" className="block text-sm">
                Snippet title:
              </label>
              <input type="text" value={snippet.title} readOnly placeholder='Enter title' name="title" id="title" className='bg-slate-900 border sm:w-72 border-slate-600 p-2 mt-2 py-1 rounded-md' />
        </div>
        <div className='mt-5 mr-20'>
           <label htmlFor="daysToExpire" className="block text-sm">
                Expire after:
              </label>
              <input type="text" value={time + ' Hours left'} readOnly  placeholder='Expires after (days)' name="daysToExpire" id="daysToExpire" className='bg-slate-900 border sm:w-72 border-slate-600 p-2 mt-2 py-1 rounded-md' required/>
        </div>
        <div className='mt-5 mr-20'>
           <label htmlFor="user" className="block text-sm">
                Created By:
              </label>
              <input type="text" value={snippet.userName} readOnly  placeholder='Expires after (days)' name="daysToExpire" id="daysToExpire" className='bg-slate-900 border sm:w-72 border-slate-600 p-2 mt-2 py-1 rounded-md' required/>
        </div>
        <div className="flex mt-5">
                  <input
                    type="text"
                    value={`${currentUrl}/public-access/${id}`}
                    readOnly
                    name="share"
                    id="share"
                    className="bg-slate-900 border sm:w-72 border-slate-600 p-2 mt-2 py-1 rounded-md"
                    required
                  />
                  {copy ? (
                    <button
                      title="Copied"
                      className="pl-2 pt-2"
                      type="button"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `${currentUrl}/public-access/${id}`
                        )
                      }
                    >
                      <PasteIcon />
                    </button>
                  ) : (
                    <button className="pl-2 pt-2" type="button" onClick={handleCopy}>
                      <CopyIcon />
                    </button>
                  )}
                </div>
                <div className="flex w-64 h-52  mt-7 ml-4">
                <QRCode value={`${currentUrl}/public-access/${id}`} size={200}  />
                </div>
        </div>
       
      </div>
        </form> */}
        </div>
      )}
    </div>
  );
};

export default ViewPublic;
