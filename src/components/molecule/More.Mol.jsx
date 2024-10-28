import React from "react";
import "./more.css";
import { products } from "../template/reference";
import MoltiObjectAtom from "../atom/MoltiObject.Atom";
function MoreMol() {
  return (
    <div className="More ">
      <h3 className="More-one">کلاه رزمی</h3>
      <hr className="mt-1" />
      <div className="More-two">
        {products.map((i) => (
          <MoltiObjectAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default MoreMol;
