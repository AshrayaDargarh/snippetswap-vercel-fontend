import axios from "axios";
import React, { useState } from "react";
import { BACKEND_API } from "../config";

const initialValue = {
  daysToExpire: 1,
};
const FormModal = ({ isOpen, onClose, id, setTime }) => {
  const [expiry, setExpiry] = useState(initialValue);

  function daysDifference(res) {
    const expiryDate = new Date(res.updatedAt);
    const daysToExpire = res.daysToExpire;
    expiryDate.setDate(expiryDate.getDate() + parseInt(daysToExpire));
    const inputDate = new Date(expiryDate);
    const currentDate = new Date();
    const timeDifferenceMillis = inputDate - currentDate;
    setTime(Math.floor(timeDifferenceMillis / (60 * 60 * 1000)));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("On Submit", expiry);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.patch(
        `${BACKEND_API}/view/expiry/${id}`,
        expiry,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // console.log(res.data)
      daysDifference(res.data);
      onClose();
    } catch (error) {
      navigate('/unauthorized')
      console.log(error.response);
    }
  }

  function handleChange(e) {
    setExpiry({
      daysToExpire: e.target.value,
    });
    console.log(expiry);
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center mt-20">
        <div className="bg-[#2E2E2E] p-8 rounded-lg shadow-lg max-w-md">
          <h3 className="text-2xl font-bold text-[#FFFFFF] text-center">
            Update Expiry
          </h3>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="daysToExpire" className=" text-[#FFFFFF]">
                New Expiry
              </label>
              <input
                type="number"
                placeholder="Enter the expiry"
                value={expiry.daysToExpire}
                min="1"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                name="daysToExpire"
                id="daysToExpire"
                className="px-2 py-2 border bg-[#1d1b1b] border-gray-300 rounded-lg"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex md:flex-row flex-col mt-4 md:gap-2 gap-3">
              <button
                type="submit"
                className=" px-6 py-2 bg-blue-500 text-[#FFFFFF] rounded-lg hover:bg-blue-600  w-full"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-blue-500 text-[#FFFFFF] rounded-lg hover:bg-blue-600  w-full"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="bg-slate-800 rounded p-8 w-1/3">
        <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold mb-4">Update Expiry</h2>
       
          <div className="mb-4">
            <label htmlFor="daysToExpire" className="block text-sm font-medium ">
              New Expiry
            </label>
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
              className="bg-slate-800 mt-2 p-2 border rounded w-full"
              value={expiry.daysToExpire}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button
              className="bg-slate-800 shadow-md shadow-slate-700 mx-4 font-semibold py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-slate-800 shadow-md shadow-slate-700  font-semibold py-2 px-4 rounded"
              onClick={onClose}
            >
              Back
            </button>
          </div>
          </form>
      </div> */}
    </div>
  );
};

export default FormModal;
