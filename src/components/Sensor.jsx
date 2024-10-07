import { MdClose } from "react-icons/md";
import { PiWarningCircleThin } from "react-icons/pi";
import CustomSelect from "./Select";

export default function Sensor({ isSensor, setIsSensor }) {
  return (
    <div className="sensor">
      <div className="sensor-top">
        <p>
          Sensor
          <span title="info">
            <PiWarningCircleThin />
          </span>
        </p>
        <button
          onClick={() => {
            setIsSensor(false);
          }}
          className="close"
        >
          <MdClose />
        </button>
      </div>
      <div className="sensor-body">
        <div className="arrow"></div>
        <div className="sensor-body-item">
          <p>Number</p>
          <CustomSelect
            options={[1, 2, 3, 4]}
            onChange={() => {
              return;
            }}
          />
        </div>
        <div className="sensor-body-item">
          <p>Type</p>
          <CustomSelect
            options={["None", "sensor"]}
            onChange={() => {
              return;
            }}
          />
        </div>
      </div>
    </div>
  );
}
