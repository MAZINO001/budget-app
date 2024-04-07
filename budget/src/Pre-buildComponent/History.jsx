import Data from "../Data/fakeData.json";
import { VirtualScroller } from "primereact/virtualscroller";
import { classNames } from "primereact/utils";

export function History() {
  const items = Data.map((item) => (
    <div
      key={item.index}
      className="flex items-center justify-between w-[100%] px-2"
    >
      <span>{item.Category}</span>
      <span>{item.Time}</span>
      <span>{item.Amount}$</span>
    </div>
  ));

  const itemTemplate = (item, options) => {
    const className = classNames("flex align-items-center p-2", {
      "surface-hover": options.odd,
    });

    return (
      <div
        className="className bg-gray-600 rounded-md mb-2 flex items-center w-[100%] "
        style={{ height: options.props.itemSize + "px" }}
      >
        {item}
      </div>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <VirtualScroller
        items={items}
        itemSize={50}
        itemTemplate={itemTemplate}
        className="border-1 surface-border border-round mx-2 "
        style={{ width: "100%", height: "207px" }}
      />
    </div>
  );
}
