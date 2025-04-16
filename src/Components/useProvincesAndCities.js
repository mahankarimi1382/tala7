// useProvincesAndCities.js
import { useEffect, useState } from "react";

const useProvincesAndCities = () => {
  const [provinces, setProvinces] = useState([]);
  const [citiesMap, setCitiesMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProvincesAndCities = async () => {
      try {
        const res = await fetch("http://tala7.com:44/api/Province/Get_All_Provice");
        const data = await res.json();
        setProvinces(data);

        const newCitiesMap = {};

        for (const province of data) {
          const cityRes = await fetch(
            `http://tala7.com:44/api/Province/Get_City_by_ProvinceId?Id=${province.id}`
          );
          const cities = await cityRes.json();
          newCitiesMap[province.name] = cities.map(city => city.name);
        }

        setCitiesMap(newCitiesMap);
      } catch (err) {
        console.error("Error loading provinces or cities", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProvincesAndCities();
  }, []);

  return { provinces, citiesMap, loading };
};

export default useProvincesAndCities;
