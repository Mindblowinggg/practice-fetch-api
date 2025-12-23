import { useState } from "react";

const AddNewUserForm = ({ setAddNewUserBtnClicked, onAddUser }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Email) {
      alert("Please fill all fields");
      return;
    }
    onAddUser(Name, Email);
  };
  return (
    <div className="relative">
      <p
        onClick={() => setAddNewUserBtnClicked(false)}
        className="h-8 w-8 justify-center flex items-center cursor-pointer  bg-gray-400 rounded-full absolute -right-3  -top-3"
      >
        X
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center items-center bg-gray-200 p-5 rounded-2xl"
      >
        <input
          type="text"
          placeholder="Name"
          className="px-5 py-2 bg-gray-100 border-2 border-blue-500 rounded-3xl outline-none w-[90%] sm:w-70"
          onChange={(e) => setName(e.target.value)}
          value={Name}
        />
        <input
          type="email"
          placeholder="enter email id"
          className="px-5 py-2 bg-gray-100 border-2 border-blue-500 rounded-3xl outline-none w-[90%] sm:w-70"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
        <button
          type="submit"
          className="bg-green-500 w-1/2 md:w-40  text-white cursor-pointer px-2 py-4 rounded-xl"
        >
          Add +
        </button>
      </form>
    </div>
  );
};

export default AddNewUserForm;
