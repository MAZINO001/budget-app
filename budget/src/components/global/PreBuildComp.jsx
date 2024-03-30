import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
export function Rnage() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [{ range: "Month" }, { range: "Week" }, { range: "Day" }];

  return (
    <div className="card flex justify-content-center ">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="range"
        placeholder="Month"
        className="w-full md:w-14rem "
      />
    </div>
  );
}

//input bumbers

import { InputNumber } from "primereact/inputnumber";

export default function Input1() {
  const [value1, setValue1] = useState(20);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <label htmlFor="stacked-buttons" className="font-bold block mb-2">
          Stacked
        </label>
        <InputNumber
          inputId="stacked-buttons"
          value={value1}
          onValueChange={(e) => setValue1(e.value)}
          showButtons
          mode="currency"
          currency="USD"
        />
      </div>
    </div>
  );
}
//button Component
import { Button } from "primereact/button";
export function AddButton() {
  return (
    <div className="card flex justify-content-center">
      <Button label="Submit" />
    </div>
  );
}
