import addressState from "@/store/addressState";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../ui/Button";

interface ChangeAddressModalProps {
  toggleModal: () => void;
}

const ChangeAddressModal = ({ toggleModal }: ChangeAddressModalProps) => {
  const [address, setAddress] = useRecoilState(addressState);
  const [enteredAddress, setEnteredAddress] = useState(address);

  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    setEnteredAddress(address);
  };

  const changeAddress = () => {
    setAddress(enteredAddress);
    toggleModal();
  };

  return (
    <>
      <div
        className="absolute top-0 mx-auto  h-screen w-screen bg-black bg-opacity-70"
        onClick={toggleModal}
      ></div>
      <form className="absolute top-1/3 z-10 mx-auto flex h-full max-h-40 flex-col items-center justify-center rounded-md bg-primary">
        <label htmlFor="address" className="mb-1 text-white">
          주소입력
        </label>
        <input
          className=" my-2 rounded-sm p-2"
          name="address"
          type="text"
          onChange={onAddressChange}
          value={enteredAddress}
        />
        <div>
          <Button onClick={changeAddress}>변경</Button>
          <Button onClick={toggleModal}>취소</Button>
        </div>
      </form>
    </>
  );
};

export default ChangeAddressModal;
