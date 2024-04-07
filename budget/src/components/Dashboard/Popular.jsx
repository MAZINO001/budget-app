import PopularComp from "../../Pre-buildComponent/PopularComp";
export default function Popular() {
  return (
    <div className="bg-gray-700 rounded-md">
      <h3 className="pb-1 text-lg font-semibold tracking-wider ml-2 ">
        Popular
      </h3>
      <hr className="pb-2" />
      <PopularComp />
    </div>
  );
}
