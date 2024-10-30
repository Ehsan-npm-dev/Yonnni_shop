import React from "react";
import "./last.css";
import LastItemAtom from "../atom/LastItem.Atom";
import { lasts } from "../template/reference";
function LastMol() {
  return (
    <div className="last">
      <h3 className="last-title"> دستکش بوکس</h3>
    <hr className="mt-2" />
      <div className="last-btn">
        {lasts.map((i) => (
          <LastItemAtom {...i} />
        ))}
      </div>
    </div>
  );
}

export default LastMol;
