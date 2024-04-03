import FinancialLogo from "../../assets/finance.webp";
export default function FinancialLiteracy() {
  const handleClick = () => {
    window.open(
      "https://www.themuse.com/advice/50-personal-finance-tips-that-will-change-the-way-you-think-about-money",
      "_blank"
    );
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
          src={FinancialLogo}
          alt="calculator"
          className="FinancialLiteracy-container"
        />
      </a>
    </div>
  );
}
