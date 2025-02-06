import React from "react";
import Link from "next/link";
const UserCard = ({ id, name, email, address, company }) => {
  return (
    <Link href={`/user/${id}`} className="flex-1 max-w-[21rem] min-w-[18rem] sm:p-0 px-4">
      <div >
        <div className="bg-gray-100 p-3 rounded-lg">
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            <b> User Id: </b>
            {id}
          </h2>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            <b> Full Name: </b>
            {name}
          </h2>
          <p className="leading-relaxed text-gray-900">
            <b>Email: </b>
            {email}
          </p>
          <p className="leading-relaxed text-gray-900">
            <b>Address: </b>
            {address.street},{address.suite},{address.city},{address.zipcode}
          </p>
          <p className="leading-relaxed text-gray-900">
            <b>Company Name: </b>
            {company.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
