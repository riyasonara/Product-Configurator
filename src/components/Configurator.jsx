import { chairColors, useCustomization } from "../context/Customization";

const Configurator = () => {
  const { material, setMaterial, chairColor, setChairColor } =
    useCustomization();
  console.log(material);
  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material == "leather" ? "item__active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material == "fabric" ? "item__active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item__label">Fabric</div>
          </div>
          <div
            className={`item ${material == "wooden" ? "item__active" : ""}`}
            onClick={() => setMaterial("wooden")}
          >
            <div className="item__label">Wooden</div>
          </div>
        </div>
      </div>

      <div className="configurator__section">
        <div className="configurator__section__title">Chair Colors</div>
        <div className="configurator__section__values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === chairColor.color ? "item__active" : ""
              }`}
              onClick={() => setChairColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="item__label">{item.name}</div>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default Configurator;
