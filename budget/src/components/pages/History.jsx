// import HistoryPreBiuld from "../global/PreBuildComp";
// export default function History() {
//   return (
//     <div className="mx-2 rounded-md overflow-hidden mb-2">
//       <HistoryPreBiuld />
//     </div>
//   );
// }
import HistoryPreBiuld from "../global/PreBuildComp";
export default function History() {
  return (
    <div className="mx-2 mb-2">
      <div className="h-[90.5vh] overflow-auto rounded-md">
        <HistoryPreBiuld />
      </div>
    </div>
  );
}
