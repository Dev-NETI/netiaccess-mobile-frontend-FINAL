import React from "react";
import InformationLinkItem from "./InformationLinkItem";

function ProfileInformation() {
  return (
    <div className="basis-full bg-white py-8 px-5 ">
      <div className="flex flex-col gap-2 mx-8">
        <InformationLinkItem
          href={`/profile/personal-information`}
          label="Personal Information"
        />
        <InformationLinkItem href={`/profile/address`} label="Address" />
        <InformationLinkItem
          href="/profile/employment"
          label="Employment Information"
        />
        <InformationLinkItem
          href={`/profile/contact`}
          label="Contact Information"
        />
        <InformationLinkItem href={`/profile/password`} label="Password" />
      </div>
    </div>
  );
}

export default ProfileInformation;
