import React from "react";
import ice from "../../assets/img/final-01-mobile.png";
import "./box.css";
import LiveItemAtom from "../atom/liveItem.Atom";
import { sells } from "../../Config3";

function BoxMol() {
  return (
    <div className="box ">
      <div className="box-detail">

        <div className="buy-pic">
          <img src={ice} alt="" className="w-[150px] p-2  " />
        </div>

        <div className="box-product">
          {sells.map((i) => (
            <LiveItemAtom {...i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BoxMol;
