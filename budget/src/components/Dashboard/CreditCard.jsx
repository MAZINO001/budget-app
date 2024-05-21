export function CreditCard1() {
  const existingAmount = JSON.parse(localStorage.getItem("amount")) ?? [];
  const totalIncome = existingAmount.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <div
      className={`w-[100%] h-[120px] relative text-white transition-transform transform hover:scale-110`}
    >
      <img
        className="relative object-cover w-[100%] h-[100%] rounded-md"
        src="https://i.imgur.com/kGkSg1v.png"
        alt="Card background"
      />
      <img
        className="w-[35px] h-[30px] absolute top-2 right-2"
        src="https://i.imgur.com/bbPHJVe.png absolute top-0"
        alt="Card logo"
      />
      <div className="absolute top-2 left-2 ">
        <h3 className="text-md mb-1 ">Amount : </h3>
        <span className="text-3xl tracking-widest">{totalIncome || 0.0}$</span>
      </div>
      <div className="absolute bottom-2 text-sm  md:text-md left-2 ">
        <span>4642 3489 9867 7632</span>
      </div>
      <div>
        <p className="absolute bottom-2 right-2 md:text-md text-sm">11/15</p>
      </div>
    </div>
  );
}

export function CreditCard2() {
  const existingTransactions =
    JSON.parse(localStorage.getItem("transactions")) ?? [];

  const totalSpending = existingTransactions.reduce(
    (acc, item) => acc + item.transaction,
    0
  );

  return (
    <div
      className={`w-[100%] h-[120px] relative text-white transition-transform transform hover:scale-110`}
    >
      <img
        className="relative object-cover w-[100%] h-[100%] rounded-md"
        src="https://i.imgur.com/Zi6v09P.png"
        alt="Card background"
      />
      <img
        className="w-[35px] h-[30px] absolute top-2 right-2"
        src="https://i.imgur.com/bbPHJVe.png absolute top-0"
        alt="Card logo"
      />
      <div className="absolute top-2 left-2 ">
        <h3 className="text-md mb-1 ">Spending : </h3>
        <span className="text-3xl tracking-widest">{totalSpending}$</span>
      </div>
      <div className="absolute bottom-2 text-sm left-2 md:text-md">
        <span>4642 3489 9867 7632</span>
      </div>
      <div>
        <p className="absolute bottom-2 right-2 text-sm md:text-md">11/15</p>
      </div>
    </div>
  );
}
