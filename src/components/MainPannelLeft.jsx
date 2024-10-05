import { IoWifiSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function MainPannelLeft() {
  const items = [
    {
      active: true,
      img: "/images/Connets.png",
      url: "/",
    },
    {
      active: true,
      img: "/images/Connets (1).png",
      url: "/",
    },
    {
      active: true,
      img: "/images/Connets (2).png",
      url: "/",
    },
    {
      active: true,
      img: "/images/Connets (3).png",
      url: "/",
    },
    {
      active: true,
      img: "/images/Connets (4).png",
      url: "/",
    },
    {
      active: true,
      img: "/images/Connets (5).png",
      url: "/",
    },
    {
      img: "/images/Connets (6).png",
      url: "/",
    },
    {
      img: "/images/Connets (7).png",
      url: "/",
    },
    {
      img: "/images/Connets (8).png",
      url: "/",
    },
    {
      img: "/images/Connets (9).png",
      url: "/",
    },
  ];
  return (
    <ul className="main-pannel-left">
      {items?.map((item, i) => (
        <li key={i}>
          <Link to={item?.url}>
            <img src={item?.img} alt="" />
            {item?.active && (
              <span>
                <IoWifiSharp />
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
