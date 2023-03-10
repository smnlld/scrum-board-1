import React from "react";

export const Completed = ({ events, statusUpdate, setEvents, onDelete }) => {
  return (
    <div className="border-4 border-[#FFE15D] sm:text-center w-auto h-[780px] p-4 mx-2">
      <span className="text-3xl my-4 font-extrabold tracking-widest">COMPLETED</span>
      {events?.map((event) => {
        if (event && event.status === "Completed") {
          return (
            <>
              <div
                key={event.id}
                className="container  border-2 sm:text-center bg-[#FFE15D] hover:bg-yellow-200 w-full m-1"
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
                    statusUpdate(event.id, "Todo");
                  }}
                >
                  Todo
                </button>
                <button
                  className="bg-red-600 hover:bg-red-300 text-white tracking-widest font-bold py-2 px-4 rounded-lg my-2 mx-4"
                  key={event.id}
                  onClick={() => {
                    onDelete(event.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};