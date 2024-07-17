// import React, { useEffect, useState } from 'react';

// const CityDropdown = ({ state, onSelectCity }) => {
//   const [cities, setCities] = useState([]);

//   useEffect(() => {
//     if (state) {
//       fetch(`https://api.example.com/cities?state=${state}`)
//         .then(response => response.json())
//         .then(data => setCities(data))
//         .catch(error => console.error('Error fetching cities:', error));
//     }
//   }, [state]);

//   return (
//     <select onChange={(e) => onSelectCity(e.target.value)}>
//       <option value="">Select City</option>
//       {cities.map(city => (
//         <option key={city.id} value={city.id}>
//           {city.name}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default CityDropdown;
import React, { useEffect, useState } from 'react';

const CityDropdown = ({ state, onSelectCity }) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch(`https://api.example.com/cities?state=${state}`)
            .then(response => response.json())
            .then(data => setCities(data))
            .catch(error => console.error('Error fetching cities:', error));
    }, [state]);

    return (
        <select onChange={(e) => onSelectCity(e.target.value)}>
            <option value="">Select City</option>
            {cities.map(city => (
                <option key={city.id} value={city.id}>
                    {city.name}
                </option>
            ))}
        </select>
    );
};

export default CityDropdown;

