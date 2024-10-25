import pic from "./assets/img/box/new5.png";
import { Link } from "react-router-dom";
export const images = [
  {
    img: (
      <Link to="/list">
        <img src={pic} className="size-16" />
      </Link>
    ),
    url: "/list",
  },
  {
    img:<Link to="/book">
    
    <img src={pic} className="size-16" />
    
    </Link> ,
    url: "/book",
  },

  {
    img: <img src={pic} className="size-16" />,
    url: "/",
  },

  {
    img: <img src={pic} className="size-16" />,
    url: "/",
  },
  {
    img: <img src={pic} className="size-16" />,
    url: "/",
  },
  {
    img: <img src={pic} className="size-16" />,
    url: "/",
  },

  {
    img: <img src={pic} className="size-16" />,
    url: "/",
  },

  {
    img: <img src={pic} className="size-16" />,
    url: "/",
  },

  {
    img: <img src={pic} className="size-16" />,
    url: "/",
  },
];
