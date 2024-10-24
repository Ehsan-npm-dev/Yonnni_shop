import React from "react";

import ImageItemAtom from "../atom/ImageItem.Atom";
import { images } from "../../Config6";
function VibeMol() {
  return (
    <div className="link-down2">
      {images.map((i) => (
        <ImageItemAtom {...i} />
      ))}
    </div>
  );
}

export default VibeMol;
