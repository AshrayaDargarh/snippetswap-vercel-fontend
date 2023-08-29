import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_API } from "../config";

const DefaultVerify = () => {
  const { token } = useParams();
  const [verify, setVerify] = useState(null);
  const navigate = useNavigate();

  async function handleVerify() {
    try {
      const res = await axios.post(`${BACKEND_API}/auth/verify/${token}`, {
        isVerified: true,
      });
      if (res.data) {
        setVerify(true);
        setTimeout(()=>{
          navigate("/login");
        },3000)
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { status, data } = error.response;
        if (status === 400 && data.message === "Invalid or expired token") {
          setVerify(false);
          setTimeout(()=>{
            navigate("/login");
          },500)
        }
      }
    }
  }
  useEffect(() => {
    handleVerify();
  }, [token]);

  return (
    <div className="mt-24">
     
     {verify===true&&
      <p className="text-center  text-green-500">Email is verified.</p>
     }
      {verify === false && (
        <p className="text-center text-red-500">Link is expired.</p>
      )}
    </div>
  );
};

export default DefaultVerify;
