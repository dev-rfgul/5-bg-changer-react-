import React from "react";

const App = () => {
  const btnArray = ["YELLOW", "RED", "BLUE", "GREEN", "ORANGE", "PURPLE"];
  const colorArray = ["yellow", "red", "blue", "green", "orange", "purple"];

  const changeBackgroundColor = (color) => {
    return (document.body.style.backgroundColor = color);
  };

  return (
    <div>
      <div className="w-screen h-screen">
        <div className="flex flex-col justify-center items-center h-full  ">
          <h1 className="text-white text-4xl">Background Color Changer APP</h1>
          <div className="">
            {btnArray.map((btn, index) => {
              let bgColor = colorArray[index];
              return (
                <button
                className={`bg-${bgColor}-500 hover:bg-${bgColor}-700 text-white font-bold py-2 px-4 rounded-full m-2`}
                  onClick={() => changeBackgroundColor(bgColor)}
                  key={index}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
