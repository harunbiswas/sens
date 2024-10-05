export default function Inventory() {
  const items = [
    {
      name: "FlexRadar",
    },
    {
      name: "Repeater",
    },
    {
      name: "Camera",
    },
    {
      name: "SPP Radio",
    },
    {
      name: "Flex4P Gateway",
    },
    {
      name: "Mag3 Sensor",
    },
    {
      name: "Mag2 Sensor",
    },
  ];
  return (
    <div className="inventory">
      <h4>Inventory</h4>
      <div className="inventory-table">
        <div className="inventory-table-head">
          <span>Catalog</span>
          <p>Quantity</p>
          <p>Serial</p>
        </div>
        {items?.map((item, i) => (
          <div key={i} className="inventory-table-item">
            <span>{item?.name}</span>
            <p>-</p>
            <p>-</p>
          </div>
        ))}
      </div>
    </div>
  );
}
