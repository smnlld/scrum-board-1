import React, { useState } from "react";

export const AddEvent = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please add a Event");
      return;
    }
    onAdd({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("Pending");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="box-content w-[450px] items-center border-2 border- mx-auto bg-[#51557E] my-6 "
    >
      <div className="my-2 mx-4 justify-center ">
        <div className="px-4">
          <label className="mx-4 font-sans font-bold text-lg text-white">
            TITLE:
          </label>
          <input
            className="rounded w-50 text-center ml-20 "
            type="text"
            placeholder=" Event Title "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="px-4">
          <label className="mx-4 font-sans text-lg font-bold text-white">
            Description:
          </label>
          <input
            className="rounded w-50 text-center ml-7 "
            type="text"
            placeholder=" Descrition "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="px-4">
          <label className="mx-4 font-sans text-lg font-bold text-white">
            Status:
          </label>
          <input
            className="rounded w-50 text-center mx-16 font-bold tracking-widest text-black bg-gray-300  "
            type="text"
            placeholder="PENDING"
            readOnly={true}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Save Event"
          className="bg-green-600 hover:bg-green-300 tracking-widest w-full text-white font-bold py-2 px-4 my-2  rounded-lg"
        />
      </div>
    </form>
  );
};
