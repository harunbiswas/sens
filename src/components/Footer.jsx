import { FaAngleUp, FaLocationDot } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          <HiOutlineLightBulb />{" "}
          <span>
            !!WARN!! - Sensor 12FD has low rssi. Add a Repeater about 20 meters
            from SPP Radio “1234”
          </span>
          <a href="/">
            Learn more <FaAngleUp />
          </a>
        </p>
      </div>
      <div className="footer-right">
        <div className="icon">
          <FaLocationDot />
        </div>
        <p>37,852119</p>
        <p>122.286653</p>
      </div>
    </footer>
  );
}
