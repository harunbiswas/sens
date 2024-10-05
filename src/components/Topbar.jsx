import { CiLight } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { GrUploadOption } from "react-icons/gr";
import { LuPlusCircle } from "react-icons/lu";
import { MdNightlight } from "react-icons/md";
import { TbSettings2 } from "react-icons/tb";
import { TiLocationOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Topbar({ theme, setTheme }) {
  console.log(theme);
  return (
    <div className="topbar">
      <div className="topbar-left">
        <Link to="/" className="brand">
          <img src="/images/Logo.png" alt="" />
        </Link>
        <div className="search-bar">
          <div className="icon">
            <TiLocationOutline />
          </div>
          <div className="search-bar-input">
            <input type="text" placeholder="Enter address or coordinates" />
          </div>
          <button>
            <FiSearch />
          </button>
        </div>
        <div className="file-upload">
          <label htmlFor="fileUpload">
            <GrUploadOption /> <span>Upload a Map</span>
            <input type="file" name="fileUpload" id="fileUpload" />
          </label>
        </div>
      </div>
      <div className="topbar-right">
        <button
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
              localStorage.setItem("theme", "light");
            } else {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }
          }}
        >
          {(theme === "dark" && <CiLight />) || <MdNightlight />}
        </button>{" "}
        <button>
          <TbSettings2 />
        </button>
        <div className="profile">
          <img src="/images/profile.png" alt="profile" />
          <span>Jasbir S.</span>
        </div>
        <div className="zoom">
          <div className="icon">
            <LuPlusCircle />
          </div>
          <span>50%</span>
        </div>
      </div>
    </div>
  );
}
