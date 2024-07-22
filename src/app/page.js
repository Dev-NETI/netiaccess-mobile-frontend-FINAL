import React from "react";
import H2 from "@/components/H2";
import Button from "@/components/Button";
import Link from "next/link";
import AppLogo from "@/components/app/AppLogo";

function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-nykBlue">
      <div className="basis-4/12  flex justify-center items-center py-4">
        <div className="bg-white rounded-full flex justify-center items-center">
          <AppLogo />
        </div>
      </div>

      <div className="basis-full bg-slate-50 rounded-t-3xl">
        <div className="flex flex-col justify-center gap-4">
          <div className="basis-full flex justify-center mt-20">
            <H2
              value="NETI-OEX"
              className=" text-4xl font-sans text-gray-900 "
            />
          </div>
          <div className="basis-full px-10 mt-64">
            <Link href="/login">
              <Button type="button" className=" text-lg shadow-2xl  ">
                Log In
              </Button>
            </Link>
          </div>
          <div className="basis-full px-10">
            <Link href="/register">
              <Button className=" text-lg bg-stone-100 border-2 border-blue-900 text-stone-900 shadow-2xl ">
                Create an account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
