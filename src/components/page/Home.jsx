import React from "react";

import "./home.css";

import ProductMol from "../molecule/Product.Mol";
import PicAtom from "../atom/Pic.Atom";
import BoxMol from "../molecule/Box.Mol";
import MoreMol from "../molecule/More.Mol";
import BigMol from "../molecule/Big.Mol";
import LastMol from "../molecule/Last.Mol";
import Imageslider from "../../Imageslider";
import VibeMol from "../../components/molecule/Vibe.Mol";

function Home() {
  return (
    <div className="slide">
      <div className="link">
        <div>
          <Imageslider></Imageslider>
        </div>
        <div className="link-2">
          <div className="link-down">
            <VibeMol />
          </div>
          <div>
            <BoxMol />
          </div>

          <div className="">
            <ProductMol />
          </div>
          <div>
            <MoreMol />
          </div>

          <div>
            <BigMol />
          </div>

          <div>
            <LastMol />
          </div>

          <div>
            <PicAtom/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
