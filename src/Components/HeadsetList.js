import React, {useState} from 'react';

const headsets = [
    {
        id: 1,
        name: "HyperX Cloud II",
        brand: "HyperX",
        price: 99.99,
        features: ["7.1 Surround Sound", "Detachable Microphone", "Memory Foam Ear Pads"],
        rating: 4.7

    },

    {
        id: 2,
        name: "Logitech G Pro X",
        brand: "Logitech",
        price: 129.99,
        features: ["Blue Voice Technology", "DTS Headphone:X 2.0", "Detachable Microphone"],
        rating: 4.6
    },

    {
        id: 3,
        name: "SteelSeries Arctis 7",
        brand: "SteelSeries",
        price: 149.99,
        features: ["2.4GHz Wireless", "DTS Headphone:X v2.0", "20 Hour Battery Life"],
        rating: 4.5
    },

    {
        id: 4,
        name: "Corsair HS70 Pro",
        brand: "Corsair",
        price: 99.99,
        features: ["2.4GHz Wireless", "50mm Neodymium Drivers", "Detachable Microphone"],
        rating: 4.4
    },

    {
        id: 5,
        name: "Razer Kraken Tournament Edition",
        brand: "Razer",
        price: 79.99,
        features: ["THX 7.1 Surround Sound", "USB Audio Controller", "Cooling Gel-Infused Cushions"],
        rating: 4.3
    }
];

const HeadsetList = () => {
    const [showHeadsets, setShowHeadsets] = useState(false);

    const handleCheckboxChange = (event) => {
      setShowHeadsets(event.target.checked);
    };

    return(
        <div>
            <h1>Headsets</h1>
            <label>
              <input type='checkbox' checked= {showHeadsets} onChange={handleCheckboxChange} />
              Show Headsets
            </label>
            {showHeadsets && (
            <ul>
                {headsets.map((headset, index) => (
                    <li key = {index}>
                        <h2>{headset.name}</h2>
                        <p>Id: {headset.id}</p>
                        <p>Brand: {headset.brand}</p>
                        <p>Price: ${headset.price}</p>
                        <p>Features: {headset.features}</p>
                        <p>Rating: {headset.rating}</p>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
  };

  export default HeadsetList;