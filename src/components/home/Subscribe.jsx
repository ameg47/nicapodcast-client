import React, { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('email', email);
    e.target.reset();
    setEmail('');
  };

  return (
    <div className="my-16 mx-48">
      <h2 className="text-3xl text-center">New Episode Every Week!</h2>
      <p className="text-center my-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. </p>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <label htmlFor="email" className="w-1/3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type your email"
            required
            onChange={handleChange}
            className="w-full bg-stone-100 py-4 px-6 focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="w-36 text-sm bg-myred hover:bg-white text-white hover:text-myred border border-myred py-2 px-4 rounded-sm"
        >
          Subscribe &#x2192;
        </button>
      </form>
    </div>
  );
}
