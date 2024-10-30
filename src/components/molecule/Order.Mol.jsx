import React from "react";
import { Link } from "react-router-dom";
import foot from "../../assets/order/RW1202.jpg";
import mma from "../../assets/order/RW1201-2.jpg";
import hats from "../../assets/order/RW1204.jpg";
import shoes from "../../assets/order/RW1203.jpg";
import "./order.css";
function OrderMol() {
  return (
    <div className="order">
      <ul className="order-list">
        <Link to="">
          <li>
            <img src={foot} className="size-32 rounded-md" />
          </li>
        </Link>

        <Link to=''>
          {" "}
          <li>
            <img src={mma} className="size-32 rounded-md" />
          </li>
        </Link >

        <Link to="">
          <li>
            <img src={hats} alt="" className="size-32 rounded-md" />
          </li>
        </Link>
        <Link to=''>
          <li>
            <img src={shoes} alt="" className="size-32 rounded-md" />
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default OrderMol;
