import React, { useState } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import AddressFrm from "./form/AddressFrm";

import FinalForm from "./form/FinalForm";
import UserForm from "./form/UserForm";

type FormData = {
  userName: string;
  country: string;
  
  city: string;
  state: string;
  aim: string;
  purpose: string;
  email: string;
  password: string;
};
const INITIAL: FormData = {
  userName: "",
  email: "",
  password: "",
  country: "",
  state: "",
  city: "",
  aim: "",
  purpose: "",
  
};

// type FormData=Addressprops &FinalProps &UserProps

const App = () => {
  const [data, setData] = useState(INITIAL);
  const { next, step, back, currentIndex, steps, isFirstStep, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressFrm {...data} updateFields={updateFields} />,
      <FinalForm {...data} updateFields={updateFields} />,
    ]);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
    if (!isLastStep) return next()
      else alert("form submitted") 
  }

  return (
    <div className="border border-black w-[500px] h-[300px] bg-gray-200  flex justify-center items-center ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row-reverse">
          {currentIndex + 1}/{steps.length}
        </div>
        <div className="flex flex-col gap-[10px] justify-center items-center">
          {step}
        </div>

        <div className="flex  justify-end  ">
          {!isFirstStep && (
            <button
              className="px-[14px] py-[1opx] bg-slate-300 border border-black"
              onClick={back}
            >
              {" "}
              Back
            </button>
          )}
          <button
            className="px-[14px] py-[1opx] bg-slate-300 border border-black"
            
          >
            {" "}
            {currentIndex == steps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
