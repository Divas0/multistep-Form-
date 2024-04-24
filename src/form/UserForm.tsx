import React from "react";
export type UserProps = {
  userName: string;
  email: string;
  password: string;
};

type FinalUserProps = UserProps & {
  updateFields: (fields: Partial<UserProps>) => void;
};

const UserForm = ({
  userName,
  email,
  password,
  updateFields,
}: FinalUserProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="name"
        className="border placeholder:text-center  border-black py-[14px] w-[300px]"
        value={userName}
        required
        onChange={(e) => updateFields({ userName: e.target.value })}
      />

      <input
        type="email"
        placeholder="email"
        className="border placeholder:text-center  border-black py-[14px] w-[300px]"
        value={email}
        required
        onChange={(e) => updateFields({ email: e.target.value })}
      />

      <input
        type="password"
        placeholder="password"
        className="border placeholder:text-center  border-black py-[14px] w-[300px]"
        value={password}
        required
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </>
  );
};

export default UserForm;
