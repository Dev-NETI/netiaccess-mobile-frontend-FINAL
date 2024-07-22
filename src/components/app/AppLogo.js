import React from "react";
import Image from "next/image";

function AppLogo() {
  return (
    <Image
      src="/assets/system/130e36d3f509dc4d3ceb59625dc42afa.png"
      alt="NETI Logo"
      className="h-24 w-24 rounded-full object-cover"
      height={150}
      width={150}
      priority={true}
    />
  );
}

export default AppLogo;
