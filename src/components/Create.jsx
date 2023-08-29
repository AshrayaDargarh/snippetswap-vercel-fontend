import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_API } from "../config";
import { useAuth } from "../context/AuthContext";
const Create = () => {
  const [snippet, setSnippet] = useState({});
  const navigate = useNavigate();
  const {logout}=useAuth()

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
    console.log(token)
    if (!token) {
      navigate("/login");
    }
    else
    {
      getUser(token)
    }
  }, []);

  function handleChange(e) {
    setSnippet({
      ...snippet,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(`${BACKEND_API}/view`, snippet, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log('Res Data=',res.data)
      if (res) {
        window.alert("Snippet Created Successfully.");
        navigate("/view");
      }
    } catch (err) {
      console.log(err.response);
      logout()
      navigate('/unauthorized')

    }
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-32  py-8 ">
     
      <div className="md:w-1/2">
        <h3 className="text-3xl font-bold text-FFFFFF ">Paste your code here</h3>
        <textarea
         name="data"
         id="data"
          className="bg-[#1d1b1b]  border-[#64B5F6] border-[2px] focus:border-none  focus:ring-[#64B5F6] focus:ring-offset-[#64B5F6] focus:ring-offset-2  mt-4 px-4 py-2 rounded-lg w-full h-[40rem] custom-shadow"
          placeholder="Enter your code here..."
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className=" mt-8 lg:mt-0">
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="text-lg text-FFFFFF">Enter the snippet title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="px-4 py-2 border bg-[#1d1b1b]   border-[#64B5F6]  focus:border-none  focus:ring-[#64B5F6] focus:ring-offset-[#64B5F6] focus:ring-offset-1  rounded-lg"
            placeholder="Enter a title for your snippet..."
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col space-y-2 mt-2">
          <label htmlFor="daysToExpire" className="text-lg ">Expire after days:</label>
          <input
            type="number"
            id="daysToExpire"
            name="daysToExpire"
            min="1"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            className="px-4 py-2 border bg-[#1d1b1b]  border-[#64B5F6]  focus:border-none  focus:ring-[#64B5F6] focus:ring-offset-[#64B5F6] focus:ring-offset-1  rounded-lg"
            placeholder="Enter a expiry days."
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="mt-4 px-6 py-3 bg-blue-500 text-FFFFFF rounded-lg hover:bg-blue-600 w-full"
        >
          Publish snippet
        </button>
      </div>
      
    </div>
    </form>
    // <div className="mt-10 md:pb-24 pb-10">
    //   <form onSubmit={handleSubmit} >
    //     <div className="flex justify-center flex-wrap ">
    //       <div className="m-5">
    //         <label htmlFor="data" className="block pb-3">
    //           <span className="sm:text-2xl text-lg font-bold">
    //             Paste your code here:
    //           </span>
    //         </label>
    //         <textarea
    //           name="data"
    //           className="bg-slate-900 border p-2 border-slate-600 rounded-md lg:w-[60rem] md:w-[45rem] sm:w-[35rem]"
    //           id="data"
    //           rows="28"
    //           cols="30"
              // onChange={handleChange}
              // required
    //         ></textarea>
    //       </div>

    //       <div className="ml-20">
    //         <div className="mt-5 mr-20">
    //           <label htmlFor="title" className="block text-sm">
    //             Enter the snippet title:
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter title"
    //             name="title"
    //             id="title"
    //             className="bg-slate-900 border sm:w-72 border-slate-600 px-2 mt-2 py-1 rounded-md"
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    //         <div className="mt-5 sm:mr-20">
    //           <label htmlFor="daysToExpire" className="block text-sm">
    //             Expire after days:
    //           </label>
    //           <input
    //             type="number"
                // min="1"
                // placeholder="Expires after (days)"
                // onKeyPress={(event) => {
                //   if (!/[0-9]/.test(event.key)) {
                //     event.preventDefault();
                //   }
                // }}
    //             name="daysToExpire"
    //             id="daysToExpire"
    //             className="bg-slate-900 border sm:w-72 border-slate-600 px-2 mt-2 py-1 rounded-md "
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    //         <button className="bg-slate-800 shadow-md shadow-slate-700 p-2 rounded-md mt-3">
    //           Publish Snippet
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
};

export default Create;
