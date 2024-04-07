import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from "primereact/utils";
import Data from '../Data/fakeData.json';

export default function PopularComp() {
  const top10Items = Data.sort((a, b) => b.Amount - a.Amount).slice(0, 10);

  const items = top10Items.map((item, index) => (
    <div key={index} className="flex items-center justify-between w-full px-2">
      <span>{item.Category}</span>
      <span>{item.Amount}$</span>
    </div>
  ));

  const itemTemplate = (item, options) => {
    const className = classNames('flex items-center p-2', {
      'surface-hover': options.odd,
    });

    return (
      <div className={className} style={{ height: options.props.itemSize + 'px' }}>
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
        style={{ width: '100%', height: '207px' }}
      />
    </div>
  );
}
