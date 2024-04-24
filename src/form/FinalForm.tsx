import React from "react";
export type FinalProps = {
  aim: string;
  purpose: string;
};

type FinalFormProps= FinalProps& {
    updateFields: (fields: Partial<FinalProps>) => void
}



const FinalForm = ({ aim, purpose , updateFields}: FinalFormProps) => {
  return (
    <>
      <input
        type="text"
        className="border  border-black py-[14px] placeholder:text-center w-[300px]"
        placeholder="your aim"
        value={aim}
        required
        onChange={(e)=> updateFields({aim:e.target.value})}
        
      />
      <input
        type="text"
        className="border  border-black py-[14px] placeholder:text-center w-[300px]"
        placeholder="how can we help you?"
        value={purpose}
        required
        onChange={(e)=> updateFields({purpose:e.target.value})}
      />
    </>
  );
};

export default FinalForm;
