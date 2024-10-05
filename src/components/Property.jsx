import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";

export default function Property() {
  const [ln, setLn] = useState(4);
  const [wd, setWd] = useState(8);
  return (
    <div className="property">
      <div className="property-body">
        <h4>Set Length</h4>
        <div className="property-body-item">
          <label htmlFor="">Length</label>
          <input
            type="text"
            value={ln}
            onChange={(e) => setLn(e.target.value)}
          />
        </div>
        <div className="property-body-item">
          <label htmlFor="">Length</label>
          <input
            type="text"
            value={wd}
            onChange={(e) => setWd(e.target.value)}
          />
        </div>
      </div>
      <div className="property-bottom">
        <div className="warning">
          <div className="icon">
            <RiErrorWarningLine />
          </div>
          <p>
            If you Restore from a Backup file made on a different Gateway, be
            sure to edit Gateway files before Reboot. Otherwise, you may change
            the IP address of this Gateway
          </p>
        </div>
      </div>
    </div>
  );
}
