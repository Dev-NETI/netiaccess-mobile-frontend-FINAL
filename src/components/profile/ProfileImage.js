import React from "react";
import Image from "next/image";
import blankDp from "../../../public/assets/system/blankDp.jpg";
import { TraineeContext } from "@/stores/TraineeContext";
import { useContext } from "react";

function ProfileImage() {
  const { user } = useContext(TraineeContext);
  const traineeName =
    user.f_name + " " + user.m_name + " " + user.l_name + " " + user.suffix;

  return (
    <>
      <div className=" bg-white flex justify-center rounded-t-3xl ">
        <Image
          src={blankDp}
          alt="Picture of the author"
          className="rounded-full shadow-md mt-5"
          width={100}
          height={100}
        />
      </div>
      <div className=" bg-white flex text-center p-2 justify-center">
        <p className="font-bold font-sans text-xl mx-auto text-stone-800">
          {traineeName}
        </p>
      </div>
    </>
  );
}

export default ProfileImage;
