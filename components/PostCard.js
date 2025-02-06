import React from "react";
import Link from "next/link";
const PostCard = ({ title, body }) => {
  return (
    <div className="flex-1 px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      <div className="mt-2">
        <p className="text-2xl text-gray-700 font-bold hover:text-gray-600 capitalize">{title}</p>
        <p className="mt-2 text-gray-600">{body}</p>
      </div>
    </div>
  );
};

export default PostCard;
