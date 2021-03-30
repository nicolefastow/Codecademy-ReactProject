import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Name" 
        type="text" 
        value={name}
        onChange={({target}) => {setName(target.value)}}
        required
      />
      <input 
        placeholder="Phone Number"
        type="tel"
        value={phone}
        onChange={({target}) => {setPhone(target.value)}}
        required
      />
      <input 
        placeholder="Email Address"
        type="email"
        value={email}
        onChange={({target}) => {setEmail(target.value)}}
        required
      />
      <input
        type="submit"
      />
    </form>
  );
};