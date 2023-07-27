import React, { useState } from "react";
import logo from "./../../images/Itsy_logo.png"

const RecipeScreen = (props) => {


  const [selected, setSelected] = useState('Select Language');

  const options = ['Tagalog', 'Bisaya', 'English', 'Gay Lengua'];

   
  return (
    <>
      <div className=" relative h-[95%]  border-[1px] border-green rounded-md w-full overflow-y-scroll">
        <div className="absolute z-0 flex flex-col w-full min-h-full overflow-hidden ">
          <div className="w-full p-5 h-500px">
            <div className="flex flex-row justify-between items-center h-[100px] w-full  ">
              <div className="flex gap-4 ">
                <img src={logo} className=" animate__animated animate__fadeInDown h-[70px] w-[70px] relative" />
                <div className="flex flex-col items-start justify-center">
                  <p className="text-sm text-green">ITSY</p>
                  <p className="text-xl font-bold text-black ">👨‍🍳{  props.selectedMenu.name}</p>
                </div>
              </div>

              <p>
                language:
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="py-2 pl-1 text-base font-medium text-gray-700 bg-white rounded-sm hover:bg-gray-50"
                >
                  {options.map((option, index) => (
                    <option className=" bg-none" key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </p>
            </div>


        
            {/* Ingredients */}           
            <div className=" flex flex-col items-start w-full min-h-[20px] pl-[82px] pt-5 gap-3">
              <p className="text-base font-bold ">Ingredients:</p>
              <ul className=" pl-[70px] font-semibold text-start " >
              {
                    props.selectedMenu.ingredients.map((e,id)=>(
                        <li>📙 {e}</li>
                    ))
                }
                
              </ul>
            </div>

            {/* Cooking steps */}
            <div className=" flex flex-col items-start w-full min-h-[20px] pl-[82px] pt-10 gap-3">
              <p className="text-base font-bold ">Cooking Steps:</p>
              <ul className=" pl-[70px]  text-start font-normal " >
                {
                    props.selectedMenu.steps.map((e,id)=>(
                        <li>{id+1}. {e}</li>
                    ))
                }
                
              </ul>
            </div>


          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-evenly mt-2 relative h-[15%] bg-white">
        <div className="flex items-center justify-between gap-4 ">
          <div className=" flex items-end gap-4 w-[60%] ">
            <button
              onClick={props.back}
              className=" w-[140px] pr-5 flex items-center justify-center gap-2 min-w-[80px] h-[40px] rounded-lg text-white bg-green"
            >
              <span class="material-symbols-outlined">arrow_back</span>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeScreen;
