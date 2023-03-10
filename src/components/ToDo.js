import React from "react";

export const ToDo = ({ events, statusUpdate, setEvents }) => {
  return (
    <div className="border-4 border-[#E14D2A] sm:text-center w-auto h-[780px] p-4 mx-2">
      <span className="text-3xl my-4 font-extrabold tracking-widest">TO DO</span>
      {events?.map((event) => {
        if (event && event.status === "Todo")
          return (
            <>
              <div
                key={event.id}
                className="container border-2 sm:text-center bg-orange-400 hover:bg-orange-200 m-1"
              >
                <h2 className="text-2xl font-bold">{event.title}</h2>
                <p>
                  {event.description}
                  <h3 className="text-xl"> {event.status}</h3>
                </p>
                <button
                  className="bg-blue-600 hover:bg-blue-300 text-white tracking-widest font-bold py-2 px-4 rounded-lg my-2 mx-4"
                  key={event.id}
                  onClick={() => {
                    statusUpdate(event.id, "Pending");
                  }}
                >
                  PENDING
                </button>
                <button
                  className="bg-green-600 hover:bg-green-300 text-white tracking-widest font-bold py-2 px-4 rounded-lg mx-4 my-2"
                  key={event.id}
                  onClick={() => {
                    statusUpdate(event.id, "Completed");
                  }}
                >
                  COMPLETED
                </button>
              </div>
            </>
          );
      })}
    </div>
  );
};
