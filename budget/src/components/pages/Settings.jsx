import { InputText } from "primereact/inputtext";
import profilePicture from "../../assets/avatar.jpg";
import { useState } from "react";
import PrintEveryMinute from "../../Data/testing";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);

  const togglePanel = () => {
    setActive(!active);
  };

  const deleteAll = () => {
    localStorage.removeItem("amount");
    localStorage.removeItem("transactions");
    localStorage.removeItem("budget");
    localStorage.removeItem("savings");
    togglePanel();
  };

  return (
    <div className="mx-2 mt-2 mb-16 md:mb-0">
      <div className="flex flex-col gap-y-4 mb-4">
        {/* Username */}
        <div className="flex items-center justify-start gap-4">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-[50px] h-[50px] rounded-full bg-red-500"
          />
          <div className="card flex justify-content-center">
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-[285px] h-[50px]"
            />
          </div>
        </div>
        {/* Email */}
        <div>
          <InputText
            id="email"
            keyfilter="email"
            className="w-[350px] h-[50px]"
            placeholder="Email"
          />
        </div>
        {/* Password */}
        <div>
          <InputText
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[350px] h-[50px]"
            placeholder="Password"
          />
        </div>
      </div>
      {/* Generate and Reset */}
      <div className="flex justify-start">
        <button className="bg-gray-700 rounded-md h-[50px] w-[166px] mr-4">
          Generate Report
        </button>
        <button
          className="bg-gray-700 rounded-md h-[50px] w-[166px]"
          onClick={togglePanel}
        >
          Reset App
        </button>
      </div>

      {/* Popup */}
      {active && (
        <div className="resultPopUp popupPosition">
          <h1 className="text-center capitalize">
            If you click yes all the information on this app will be deleted
          </h1>
          <h1>Do you want to proceed?</h1>
          <div className="flex gap-4">
            <button
              className="bg-red-500 px-4 py-2 rounded-md capitalize cursor-pointer text-md"
              onClick={deleteAll}
            >
              Yes
            </button>
            <button
              className="bg-red-500 px-4 py-2 rounded-md capitalize cursor-pointer text-md"
              onClick={togglePanel}
            >
              No
            </button>
          </div>
        </div>
      )}

      {/* testing area */}
      <PrintEveryMinute />
      {/* testing area */}
    </div>
  );
}
