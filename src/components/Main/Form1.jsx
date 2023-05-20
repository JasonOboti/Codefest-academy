import React, { useState } from "react";

function Form1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [howDidYouFindUs, setHowDidYouFindUs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("How did you find us?:", howDidYouFindUs);
  };

  return (
    <form onSubmit={handleSubmit}  className="max-w-md mx-auto mt-40 px-4 py-8 bg-white bg-opacity-50  backdrop-filter backdrop-blur-lg rounded-2xl shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">Application Form</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-2 border-gray-200 p-2 w-full rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-2 border-gray-200 p-2 w-full rounded-md"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 border-gray-200 p-2 w-full rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile">
          Mobile:
        </label>
        <input
          id="mobile"
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="border-2 border-gray-200 p-2 w-full rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="howDidYouFindUs">
          How did you find us?
        </label>
        <select
          id="howDidYouFindUs"
          value={howDidYouFindUs}
          onChange={(e) => setHowDidYouFindUs(e.target.value)}
          className="border-2 border-gray-200 p-2 w-full rounded-md"
          required
        >
          <option value="">Please select</option>
          <option value="Google">Google</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend or Family">Friend orFamily</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Join
      </button>
    </form>
  );
}

export default Form1;