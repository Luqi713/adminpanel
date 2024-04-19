import React from "react";
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill,BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from "react-icons/bs";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon" /> SHOP
        </div>
        <span className="icon close_icon">X</span>
      </div>
      <ul className="sidebar-list">
        
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashbord
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            < BsFillGrid3X3GapFill className="icon" /> Catagory
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customer
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Orders
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Reports
          </a>
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;
