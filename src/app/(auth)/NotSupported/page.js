import React from "react";

function NotSupported() {
  return (
    <div className="flex justify-center items-center p-28 text-center">
      <h1 className="font-bold text-3xl text-red-700">
        Device not supported, please use mobile device!
      </h1>
    </div>
  );
}

export default NotSupported;
