import React from "react";
import { routes } from "../template/reference";
import CardItemAtom from "../atom/CardItem.Atom";
import "./product.css";
function ProductMol() {
  return (
    <div className="detail ">
      <h3 className="mt-6 mr-2 text-[13px] font-bold">جدیدترین محصولات</h3>
      <hr className="mt-2 " />
      <div className="detail-nav">
        {routes.map((i) => (
          <CardItemAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default ProductMol;
