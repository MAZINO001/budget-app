// import { VirtualScroller } from "primereact/virtualscroller";
// import { classNames } from "primereact/utils";

// export default function HistoryComp() {
//   const existingTransactions = JSON.parse(localStorage.getItem("transactions")) ?? [];
//   const items = existingTransactions.map((item, index) => (
//     <div key={index} className="flex items-center justify-between w-full px-2">
//       <span>{item.category}</span>
//       <span>{item.time}</span>
//       <span>{item.transaction}$</span>
//     </div>
//   ));

//   const itemTemplate = (item, options) => {
//     const className = classNames(
//       "flex align-items-center p-2 bg-gray-600 mb-2 rounded-md",
//       {
//         "surface-hover": options.odd,
//       }
//     );

//     return (
//       <div
//         className={className}
//         style={{ height: options.props.itemSize + "px" }}
//       >
//         {item}
//       </div>
//     );
//   };

//   return (
//     <div className="card flex justify-content-center">
//       <VirtualScroller
//         items={items}
//         itemSize={50}
//         itemTemplate={itemTemplate}
//         className="border-1 surface-border border-round mx-2"
//         style={{ width: "100%", height: "207px" }}
//       />
//     </div>
//   );
// }

import { VirtualScroller } from "primereact/virtualscroller";
import { classNames } from "primereact/utils";

export default function HistoryComp() {
  const existingTransactions =
    JSON.parse(localStorage.getItem("transactions")) ?? [];
  const sortedexistingTransactions = existingTransactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const items = sortedexistingTransactions.map((item, index) => (
    <div key={index} className="flex items-center justify-between w-full px-2">
      <span>{item.category}</span>
      <span>{item.time}</span>
      <span>{item.transaction}$</span>
    </div>
  ));

  const itemTemplate = (item, options) => {
    const className = classNames(
      "flex align-items-center p-2 bg-gray-600 mb-2 rounded-md",
      {
        "surface-hover": options.odd,
      }
    );

    return (
      <div
        className={className}
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
        className="border-1 surface-border border-round mx-2"
        style={{ width: "100%", height: "207px" }}
      />
    </div>
  );
}
