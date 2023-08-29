import React from 'react'

const Footer = () => {
  return 
}

export default Footer

// BackUp

{/* <form onSubmit={handleUpdate}>
          <div className="flex justify-center  flex-wrap">
            <div className="m-5">
              <label htmlFor="data" className="block pb-3">
                <span className="sm:text-2xl text-lg font-bold">
                  Paste your code here:
                </span>
              </label>
              <textarea
                name="data"
                value={snippet.data}
                className="bg-slate-900 p-2 border border-slate-600 rounded-md lg:w-[60rem] md:w-[45rem] sm:w-[35rem]"
                id="data"
                rows="30"
                cols="30"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mt-5">
              <div className="mt-5 md:mr-20">
                <label htmlFor="title" className="block text-sm">
                  Enter the snippet title:
                </label>
                <input
                  type="text"
                  value={snippet.title}
                  placeholder="Enter title"
                  name="title"
                  id="title"
                  className="bg-slate-900 border sm:w-72 border-slate-600 px-2 mt-2 py-1 rounded-md"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5 mr-20">
                <label htmlFor="daysToExpire" className="block text-sm">
                  Expire after: {time} Hours
                </label>
                
                <button
                  className="bg-slate-800 shadow-md shadow-slate-700 p-2 w-40 rounded-md mt-3"
                   onClick={openModal}
                  type="button"
                  >
       Change Expiry
      </button>
                {/* <input
                  type="number"
                  value={snippet.daysToExpire}
                  min="1"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  placeholder="Enter in days"
                  name="daysToExpire"
                  id="daysToExpire"
                  className="bg-slate-900 border sm:w-72 border-slate-600 px-2 mt-2 py-1 rounded-md "
                  onChange={handleChange}
                /> */}
        //       </div>
        //       <div className="mt-5 ">
        //         <label htmlFor="share" className="block text-sm">
        //           Share the link:
        //         </label>
        //         <div className="flex ">
        //           <input
        //             type="text"
        //             value={`${currentUrl}/public-access/${id}`}
        //             readOnly
        //             name="share"
        //             id="share"
        //             className="bg-slate-900 border sm:w-72 border-slate-600 p-2 mt-2 py-1 rounded-md"
        //             required
        //           />
        //           {copy ? (
        //             <button
        //               title="Copied"
        //               className="pl-2 pt-2"
        //               type="button"
        //               onClick={() =>
        //                 navigator.clipboard.writeText(
        //                   `${currentUrl}/public-access/${id}`
        //                 )
        //               }
        //             >
        //               <PasteIcon />
        //             </button>
        //           ) : (
        //             <button className="pl-2 pt-2" type="button" onClick={handleCopy}>
        //               <CopyIcon />
        //             </button>
        //           )}
        //         </div>
        //       </div>
        //       <div className="flex w-64 h-52  mt-7 ml-4">
        //         <QRCode value={`${currentUrl}/public-access/${id}`} size={200}  />
        //         </div>
        //       <div className="flex sm:flex-row flex-col">
        //       <button className=" bg-slate-800 shadow-md shadow-slate-700 p-2 w-40 rounded-md mt-3 sm:mx-2">
        //         Update Snippet
        //       </button>
        //       <button
        //         className=" bg-slate-800 shadow-md shadow-slate-700 p-2 w-40 rounded-md mt-3"
        //         type="button"
        //         onClick={handleDelete}
        //       >
        //         Delete Snippet
        //       </button>

        //       </div>
        //     </div>
        //   </div>
        // </form> */}