import React from 'react';

export default function Input({
  type,
  name,
  placeholder,
  label,
  onClick,
  onChange,
}) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <div class="border bg-[#DBDBE5] flex w-full px-5 py-4 mt-3 text-base font-light rounded-md input">
        <input
          type={type}
          name={name}
          onChange={onChange}
          onClick={onClick}
          id=""
          placeholder={placeholder}
          class="w-full bg-[#DBDBE5] focus-within:outline-none text-base font-light"
          autocomplete
          required
        />
      </div>
    </>
  );
}
