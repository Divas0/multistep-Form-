import React from "react";
export type Addressprops = {
  country: string;
  city: string;
  state: string;
};

type FinalAddressProps= Addressprops& {
    updateFields:(fields:Partial<Addressprops>)=> void
}

const AddressFrm = ({ country, city, state, updateFields }: FinalAddressProps) => {
  return (
    <>
      <input
        type="text"
        className="border  border-black py-[14px] w-[300px] placeholder:text-center "
        placeholder="country"
        value={country}
        required
        onChange={(e)=> updateFields({country:e.target.value})}
      />
      <input
        type="text"
        className="border  border-black py-[14px] w-[300px] placeholder:text-center "
        placeholder="state"
        value={state}
        required
        onChange={(e)=> updateFields({state:e.target.value})}
      />
      <input
        type="text"
        className="border  border-black py-[14px] w-[300px] placeholder:text-center "
        placeholder="city"
        value={city}
        required
        onChange={(e)=> updateFields({city:e.target.value})}
      />
    </>
  );
};

export default AddressFrm;
