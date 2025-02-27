import calculator from "../../assets/calculator.png";

export default function Calculator() {
  const handleClick = () => {
    window.open("https://www.desmos.com/scientific", "_blank");
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
        <img
          src={calculator}
          alt="calculator"
          className="calculator-container"
        />
      </a>
    </div>
  );
}
