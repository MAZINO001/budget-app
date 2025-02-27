import Currency from "../../assets/Converter.png";
export default function CurrencyConverter() {
  const handleClick = () => {
    window.open("https://www.xe.com/currencyconverter/convert", "_blank");
  };

  return (
    <div className="flex items-center justify-center">
      <a
        className="flex items-center justify-center"
        href="https://www.desmos.com/scientific"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <img src={Currency} alt="calculator" className="calculator-container" />
      </a>
    </div>
  );
}
