import React from "react";
import { CgProfile } from "react-icons/cg";
import logoImage from "../../assets/images/L2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../services/operations/authAPI";

const Navbar = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handlelogout = () => {
    console.log("fdfjasdlfjlksd");
    dispatch(logout(Navigate));
  };
  return (
    <div className="flex align-center justify-between py-[15px] px-[60px] mb-1 bg-[#662671] text-center">
      <div>
        <img src={logoImage} alt="123" width={200} className="mt-2" />
      </div>
      <div onClick={handlelogout}>
        <CgProfile
          size={40}
          color="white"
          className="nav-profile cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
