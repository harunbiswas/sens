import { FaRegFileLines } from "react-icons/fa6";
import { RiArrowGoBackLine, RiArrowGoForwardLine } from "react-icons/ri";

export default function MainPannelTop() {
  return (
    <div className="main-pannel-top">
      <div className="left">
        <label htmlFor="UPfile">
          <FaRegFileLines />
          <span>File</span>
        </label>
        <input type="file" id="UPfile" />
      </div>
      <div className="right">
        <button className="publish">Publish</button>
        <div className="separator"></div>
        <button>Verify Design</button>
        <div className="separator"></div>
        <div className="undoredo">
          <button>
            <RiArrowGoBackLine />
          </button>{" "}
          <button>
            <RiArrowGoForwardLine />
          </button>
        </div>
      </div>
    </div>
  );
}
