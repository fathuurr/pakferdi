import React from 'react';

export default function Select({ label, name, onChange, onClick }) {
  const gender = [
    {
      id: 1,
      gender: 'Laki - Laki',
    },
    {
      id: 2,
      gender: 'Perempuan',
    },
  ];

  return (
    <>
      <label htmlFor="">{label}</label>
      <div class="border bg-[#DBDBE5] flex w-full px-5 py-4 mt-3 text-base font-light rounded-md input">
        <select
          name={name}
          onChange={onChange}
          onClick={onClick}
          id=""
          class="w-full bg-[#DBDBE5] focus-within:outline-none text-base font-light"
          autocomplete
          required>
          <option>Pilih Jenis Kelamin</option>
          {gender.map((item, key) => {
            return (
              <option value="" key={item}>
                {item.gender}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
