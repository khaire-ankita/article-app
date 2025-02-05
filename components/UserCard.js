import React from "react";
import Link from "next/link";
const UserCard = ({ id, name, email, address, company }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 min-w-64 p-4">
      <div className="bg-gray-100 p-3 rounded-lg">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://dummyimage.com/720x400"
          alt="content"
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          <Link href={`/user/${id}`}>
            {/* {id} */}
            <b> User Id:</b>
            {id}
          </Link>
        </h2>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          <b> Full Name:</b>
          {name}
        </h2>
        <p className="leading-relaxed text-gray-900">
          <b>Email:</b>
          {email}
        </p>
        <p className="leading-relaxed text-gray-900">
          <b>Address:</b>
          {address.street},{address.suite},{address.city},{address.zipcode}
        </p>
        <p className="leading-relaxed text-gray-900">
          <b>Company Name:</b>
          {company.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
