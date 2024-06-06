import React, {useState} from 'react';

const mobiles = [
    {
      brand: "Apple",
      model: "iPhone 14 Pro",
      operatingSystem: "iOS",
      screenSize: "6.1 inches",
      batteryCapacity: "3095 mAh",
      price: 999
    },

    {
      brand: "Samsung",
      model: "Galaxy S23",
      operatingSystem: "Android",
      screenSize: "6.2 inches",
      batteryCapacity: "3700 mAh",
      price: 799
    },

    {
      brand: "Google",
      model: "Pixel 7",
      operatingSystem: "Android",
      screenSize: "6.3 inches",
      batteryCapacity: "4355 mAh",
      price: 599
    },

    {
      brand: "OnePlus",
      model: "OnePlus 11",
      operatingSystem: "Android",
      screenSize: "6.7 inches",
      batteryCapacity: "5000 mAh",
      price: 699
    },
    {
      brand: "Xiaomi",
      model: "Mi 12",
      operatingSystem: "Android",
      screenSize: "6.28 inches",
      batteryCapacity: "4500 mAh",
      price: 749
    }
  ];

  const MobileList = () => {
    const [showMobiles, setShowMobiles] = useState(false);

    const handleCheckboxChange = (event) => {
      setShowMobiles(event.target.checked);
    };

    return(
        <div>
            <h1>Mobile Phones</h1>
            <label>
              <input type='checkbox' checked= {showMobiles} onChange={handleCheckboxChange} />
              Show Mobiles
            </label>
            {showMobiles && (
            <ul>
                {mobiles.map((mobile, index) => (
                    <li key = {index}>
                        <h2>{mobile.model}</h2>
                        <p>Brand: {mobile.brand}</p>
                        <p>Operating System: {mobile.operatingSystem}</p>
                        <p>Screen Size: {mobile.screenSize}</p>
                        <p>Battery Capacity: {mobile.batteryCapacity}</p>
                        <p>Price: ${mobile.price}</p>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
  };

  export default MobileList;