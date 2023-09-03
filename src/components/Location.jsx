import React, { useState } from 'react';

import countryStateCity from 'country-state-city';

const Location = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');

//   var headers = new Headers();
// headers.append("X-CSCAPI-KEY", "API_KEY");

// var requestOptions = {
//    method: 'GET',
//    headers: headers,
//    redirect: 'follow'
// };

// fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));


  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setCity('');
    setPrice('');
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setPrice('');
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const countries = countryStateCity.getAllCountries();
  const cities = country ? countryStateCity.getCitiesOfCountry(country) : [];

  return (
    <div>
      <div className="formCountry">
        <label>Country</label>
        <form  value={country} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c.isoCode} value={c.name}>
              {c.name}
            </option>
          ))}
        </form>
      </div>

      <div className="formCity">
        <label>City</label>
        <form  value={city} onChange={handleCityChange} disabled={!country}>
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </form>
      </div>

      <div className="formPrice">
        <label>Price</label>
        <form type="number" value={price} onChange={handlePriceChange} disabled={!city} />
      </div>
    </div>
  );
};

export default Location;
