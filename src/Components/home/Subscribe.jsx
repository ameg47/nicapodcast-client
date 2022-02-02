import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Subscribe() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('your-email', email);
    axios.post(
      'http://www.nicapodcasts.local/wp-json/contact-form-7/v1/contact-forms/79/feedback',
      formData,
      {
        headers: { 'content-type': 'multipart/form-data' },
      },
    )
      .then((response) => {
        if (response.data.status === 'mail_sent') {
          Swal.fire({
            icon: 'success',
            title: 'Done!',
            text: response.data.message,
          });
        } else if (response.data.status === 'validation_failed') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.data.message,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.data.message,
        });
      });
    e.target.reset();
    setEmail('');
  };

  return (
    <div className="my-20 mx-6 md:mx-18 xl:mx-48">
      <h2 className="text-3xl text-center">New Episode Every Week!</h2>
      <p className="text-center my-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. </p>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <label htmlFor="email" className="md:w-1/3">
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
