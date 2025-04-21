import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProvinceDropdown = () => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const fetchProvinces = async () => {
      try {
         const response = await axios.get('http://tala7.com:44/api/Province/Get_All_Provice');
         setProvinces(response.data);
        // const test = Get_All_Provice();
        // console.log("test");
        // console.log(test);
        // console.log("test");
        //setProvinces(test.data);
        //setProvinces(test.json().data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProvinces();
  }, []);

  if (loading) {
    return <div className="p-4 text-gray-600">Loading provinces...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <label htmlFor="province-select" className="block text-sm font-medium text-gray-700 mb-1">
        Select a Province:
      </label>
      <select
        id="province-select"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">-- Select a province --</option>
        {provinces.map((province) => (
          <option key={province.name} value={province.name}>
            {province.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProvinceDropdown;