import React, {useState} from "react";

const laptops = [
    {
        brand: "Apple",
    model: "MacBook Pro 16",
    operatingSystem: "macOS",
    screenSize: "16 inches",
    processor: "Apple M1 Pro",
    ram: "16 GB",
    storage: "512 GB SSD",
    price: 2499

    },

    {
        brand: "Dell",
    model: "XPS 13",
    operatingSystem: "Windows 11",
    screenSize: "13.4 inches",
    processor: "Intel Core i7",
    ram: "16 GB",
    storage: "1 TB SSD",
    price: 1399

    },

    {
        brand: "HP",
    model: "Spectre x360",
    operatingSystem: "Windows 11",
    screenSize: "13.3 inches",
    processor: "Intel Core i7",
    ram: "16 GB",
    storage: "512 GB SSD",
    price: 1299

    },

    {
        brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    operatingSystem: "Windows 11",
    screenSize: "14 inches",
    processor: "Intel Core i7",
    ram: "16 GB",
    storage: "1 TB SSD",
    price: 1699

    },

    {
        brand: "Asus",
    model: "ROG Zephyrus G14",
    operatingSystem: "Windows 11",
    screenSize: "14 inches",
    processor: "AMD Ryzen 9",
    ram: "16 GB",
    storage: "1 TB SSD",
    price: 1499

    }
];

const LaptopList = () => {
    const [showLaptops, setShowLaptops] = useState(false);

    const handleCheckboxChange = (event) => {
      setShowLaptops(event.target.checked);
    };

    return(
        <div>
            <h1>Laptops</h1>
            <label>
              <input type='checkbox' checked= {showLaptops} onChange={handleCheckboxChange} />
              Show Laptops
            </label>
            {showLaptops && (
            <ul>
                {laptops.map((laptop, index) => (
                    <li key = {index}>
                        <h2>{laptop.model}</h2>
                        <p>Brand: {laptop.brand}</p>
                        <p>Operating System: {laptop.operatingSystem}</p>
                        <p>Screen Size: {laptop.screenSize}</p>
                        <p>Processor: {laptop.processor}</p>
                        <p>Ram: {laptop.ram}</p>
                        <p>Storage: {laptop.storage}</p>
                        <p>Price: ${laptop.price}</p>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
  };

  export default LaptopList;