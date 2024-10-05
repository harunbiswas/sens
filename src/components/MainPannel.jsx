import MainPannelLeft from "./MainPannelLeft";
import MainPannelRight from "./MainPannelRight";
import MainPannelTop from "./MainPannelTop";
import MarkerMap from "./Map";

export default function MainPannel() {
  return (
    <div className="main-pannel">
      <MainPannelTop />
      <div className="main-pannel-body">
        <MainPannelLeft />
        <MarkerMap />
        <MainPannelRight />
      </div>
    </div>
  );
}
