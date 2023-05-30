import React, { useState } from "react";
import sendEmail1 from "./sendEmail1";
import sanitizeHtml from "sanitize-html";

function Form2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sanitize input values
    const sanitizedFirstName = sanitizeHtml(firstName);
    const sanitizedLastName = sanitizeHtml(lastName);
    const sanitizedEmail = sanitizeHtml(email);
    const sanitizedMobile = sanitizeHtml(mobile);
    const title = document.getElementById("title").textContent;


    const formData = {
      firstName: sanitizedFirstName,
      lastName: sanitizedLastName,
      email: sanitizedEmail,
      mobile: sanitizedMobile,
      message: sanitizeHtml(message),
      title,
    };

    try {
      await sendEmail1(formData);
      setFormSubmitted(true);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-40 px-4 py-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-md p-4"
        >
          <h2 id="title" className="text-2xl text-white font-bold mb-4">Center Lease/CBT</h2>
          {error && (
            <p className="text-red-500 mb-4">Something went wrong. Please try again later.</p>
          )}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
                First Name:
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 50))}
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
                onChange={(e) => setLastName(e.target.value.replace(/[^a-zA-Z\s]/g, "").slice(0, 50))}
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 200))}
              className="border-2 border-gray-200 p-2 w-full rounded-md resize-y h-40 max-h-40"
              maxLength={200}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`py-2 px-2 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[10px] outline-none`}
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="max-w-md mx-auto mt-40 px-4 py-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-md p-4">
          <h2 className="text-4xl text-white font-bold mb-4">Application Sent</h2>
          <p className="text-white">Thank you for your submission!</p>
        </div>
      )}
    </>
  );
}

export default Form2;
