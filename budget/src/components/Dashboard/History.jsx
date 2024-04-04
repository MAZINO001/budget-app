import { Link } from "react-router-dom";
import { HistoryPreBiuld2 } from "../global/PreBuildComp";

export default function History() {
  return (
    <div className="bg-gray-700 rounded-md ">
      <div className="flex justify-between items-center">
        <h3 className="pb-1 text-lg font-semibold tracking-wider ml-2">
          History
        </h3>
        <Link to="/history">
          <span className="text-md hover:bg-red-400 p-1 rounded-md mr-1">
            See All
          </span>
        </Link>
      </div>

      <hr className="pb-2" />
      <HistoryPreBiuld2 />
    </div>
  );
}
