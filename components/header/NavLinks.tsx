import React from "react";
import { MdChatBubble } from "react-icons/md";
import { FaUserLock } from "react-icons/fa6";

const NavLinks = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-2 text-white">
        <MdChatBubble className="text-xl" />
        <h4>Chat</h4>
      </div>
      <div className="flex items-center gap-2 text-white">
        <FaUserLock className="text-xl" />
        <h4>Login</h4>
      </div>
    </div>
  );
};

export default NavLinks;
