import {
  Durations,
  AddButton1,
  Input3,
  Input1,
  AddButton,
  Textarea,
  Date,
  Time,
  Category,
  Input2,
  Textarea2,
  AddButton2,
} from "../global/PreBuildComp";

export default function AddNew() {
  return (
    <div className="flex gap-2 h-[100%] mx-2 text-black ">
      <div className="bg-gray-700 w-[50%] px-2 flex flex-col gap-y-2 rounded-md relative">
        <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider sm:mb-0 mb-2 ">
          add New transaction
        </h2>
        <Input1 />
        <Category />
        <Date />
        <Time />
        <Textarea />
        <AddButton />
      </div>
      <div className="w-[50%] ">
        <div className="bg-gray-700 h-[60%] rounded-md p-2  mb-2 relative">
          <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider">
            add savings
          </h2>
          <Input2 />
          <Textarea2 />
          <Durations />
          <AddButton1 />
        </div>
        <div className="bg-gray-700 h-[38.5%] rounded-md p-2 relative">
          <h2 className="capitalize text-center text-lg text-white font-bold tracking-wider ">
            add monthly budget
          </h2>
          <Input3 />
          <AddButton2 />
        </div>
      </div>
    </div>
  );
}
