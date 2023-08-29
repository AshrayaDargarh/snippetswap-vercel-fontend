import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CopyIcon from "../assets/icons/CopyIcon";
import PasteIcon from "../assets/icons/PasteIcon";
import QRCode from "qrcode.react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin, Triangle } from "react-loader-spinner";
import { BACKEND_API } from "../config";
import FormModal from "./ExpiryUpdate";
const initialValue = {
  title: "",
  data: "Demo",
  daysToExpire: 0,
};

const ViewUpdate = () => {
  const { id } = useParams();
  const [snippet, setSnippet] = useState(initialValue);
  const [currentUrl,setCurrentUrl]=useState('')
  const [copy, setCopy] = useState(false);
  const [time, setTime] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function daysDifference(res)
  {
    if(res)
    {
      const expiryDate=new Date(res.updatedAt)
      const daysToExpire=res.daysToExpire
      expiryDate.setDate(expiryDate.getDate()+parseInt(daysToExpire))
      const inputDate = new Date(expiryDate);
      const currentDate = new Date();
      const timeDifferenceMillis = inputDate - currentDate;
      setTime(Math.floor(timeDifferenceMillis / (60 * 60 * 1000)));
    }      
  }
  async function getSnippet(token) {
    try {
      const res = await axios.get(`${BACKEND_API}/view/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data)
      setSnippet(res.data);
      daysDifference(res.data)

    } catch (error) { 
      navigate('/unauthorized')
      // console.log(error.response);
    }
  }

  async function getUser(token)
  {
    try
    {
      const res = await axios.get(`${BACKEND_API}/user`,{headers:{Authorization:`Bearer ${token}`}})

      if(res.data.userName)
      {
        const userName=res.data.userName
        setSnippet({userName:userName})
      }
    }
    catch(err)
    {
      if(err.response)
      {
        const {status,data}=err.response
        console.log(`Status ${status} + Data ${data}`)
      }
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    setCurrentUrl('https://snippetswap.onrender.com')
    getSnippet(token);
    getUser(token);
  }, []);
  function handleChange(e) {
    setSnippet({
      ...snippet,
      [e.target.name]: e.target.value,
    });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      // console.log(snippet)
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `${BACKEND_API}/view/${id}`,
        snippet,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Patch res',res.data)
      if(res.data)
      {
        toast.success('Snippet updated successfully.');
      }
    } catch (error) {
      console.log(error.response);
    }
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      if (window.confirm("Do you really want to delete this?")) {
        const token = localStorage.getItem("token");
        const res = await axios.delete(`${BACKEND_API}/view/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res);
        navigate("/view");
      }
    } catch (error) {
      console.log('Unauthorized',error.response)
        navigate('/unauthorized')
    }
  }
  function handleCopy() {
    navigator.clipboard.writeText(`${currentUrl}/public-access/${id}`);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000); 
  } 
  return !snippet.userName?<div className="h-screen flex justify-center"><TailSpin
  height="80"
  width="80"
  color="#64B5F6"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/></div>:(
    <div className="bg-inherit pb-10  overflow-hidden">
      {
        time<0?(
          <div className="flex items-center justify-center mt-20">
          <div className="bg-[#2E2E2E] p-8 rounded-lg shadow-lg max-w-md">
            <h3 className="text-2xl font-bold text-[#FFFFFF] text-center">Snippet is Expired!</h3>
            
              <button type="button" 
               onClick={openModal}
              className="mt-4 px-6 py-3 bg-blue-500 text-[#FFFFFF] rounded-lg hover:bg-blue-600  w-full">Update Expiry</button>
           
          </div>
           
        </div>
         
        ):
        (
          <>
          <form onSubmit={handleUpdate}>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-32  py-8 ">
           
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-FFFFFF ">Update your code here</h3>
              <textarea
               name="data"
               id="data"
               value={snippet.data}
                className="bg-[#1d1b1b]  border-[#64B5F6] border-[2px] focus:border-none  focus:ring-[#64B5F6] focus:ring-offset-[#64B5F6] focus:ring-offset-2  mt-4 px-4 py-2 rounded-lg w-full h-[40rem] custom-shadow"
                placeholder="Enter your code here..."
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="md:w-96 mt-8 lg:mt-0">
              <div className="flex flex-col space-y-2">
                <label htmlFor="title" className="text-lg text-FFFFFF">Enter the snippet title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
               value={snippet.title}
                  className="px-2 py-2 border bg-[#1d1b1b]   border-[#64B5F6]  focus:border-none  focus:ring-[#64B5F6] focus:ring-offset-[#64B5F6] focus:ring-offset-1  rounded-lg"
                  placeholder="Enter a title for your snippet..."
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 mt-2">
                <label htmlFor="daysToExpire" className="text-lg ">Expire after: {time} Hours</label>
              </div>

              <button
              onClick={openModal}
              type="button"
                className="mt-4 px-6 py-3 bg-blue-500 text-FFFFFF rounded-lg hover:bg-blue-600 w-full"
              >
                Update Expiry
              </button>

              <div className="flex flex-col space-y-2 mt-2">
                <label htmlFor="share" className="text-lg text-FFFFFF">Share the link:</label>
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
                  <QRCode value={`${currentUrl}/public-access/${id}`} className="custom-shadow" size={200}  />
                  <p  className="text-lg ">Scan the QR Code</p>

                    </div>

                    <div className="flex flex-col space-y-2 mt-4">
                  <button
                    className="px-6 py-3 bg-blue-500 text-FFFFFF rounded-lg hover:bg-blue-600 w-full"
                  >
                    Update Snippet
                  </button>
                  
                    <button
                    onClick={handleDelete}
                  type="button"
                    className=" px-6 py-3 bg-blue-500 text-FFFFFF rounded-lg hover:bg-blue-600 w-full"
                  >
                      Delete Snippet
                  </button>
                   
                  </div>
            </div>
          </div>
          </form>
          </>
  
  
        )
      }
        
        <FormModal isOpen={isModalOpen} onClose={closeModal} id={id} setTime={setTime} />
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>
  );
};

export default ViewUpdate;
