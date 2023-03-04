import React from 'react'

export default function Search({search,handleChange}) {
  return (
    
      <input
        type="text"
        placeholder="Search for your country..."
        value={search}
        onChange={handleChange}
        className="bg-slate-100 border border-slate-200 w-full px-5 py-2 rounded-md "
      />
    
  );
}
