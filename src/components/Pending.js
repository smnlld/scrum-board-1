import React from "react";

export const Pending = ({ events, statusUpdate, setEvents }) => {
  const newFunction = (events) => {
    newFunction = statusUpdate;
  };
  return (
    <>
      <div className="border-4 border-[#9C2C77] sm:text-center w-auto h-[780px] p-4 mx-2">
        <span className=" text-3xl my-4 font-extrabold tracking-widest ">PENDING</span>

        {events?.map((event) => {
          if (event && event.status === "Pending")
            return (
              <div className="container  border-2 sm:text-center bg-violet-400 hover:bg-purple-200 m-1">
                <div key={event.id}>
                  <h2 className="text-2xl font-bold">{event.title}</h2>
                  <p>
                    {event.description}
                    <h3 className="text-xl"> {event.status}</h3>
                  </p>
                  <button
                    className="bg-green-600 hover:bg-green-300 tracking-widest text-white font-bold py-2 px-4 my-2 mx-4 rounded-lg"
                    key={event.id}
                    onClick={() => {
                      statusUpdate(event.id, "Todo");
                    }}
                  >
                    TO DO
                  </button>
                </div>
              </div>
            );
        })}
      </div>
    </>
  );
};

// const Event = ({ event ,statusUpdate}) => {
//   const toDoEvents = () => {
//     console.log(statusUpdate); onClick={statusUpdate}
//   };

// setInfos(infos.filter((info) => info.id !== id));
