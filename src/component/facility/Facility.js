import React from "react";
import data from "./data.json";

function Facility() {
    console.log(data);
  return (
    <>
      <div>
        <h1>Locations</h1>
        {Object.keys(data).map((location) => (
          <div key={location}>
            <h2>{location}</h2>
            <ul>
              {data[location].map((company, index) => (
                <li key={index}>
                  <h3>{company["Company Name"]}</h3>
                  <p>
                  <a
                  href={company["Map Location"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company["Address"]}
                </a></p>
                  <p>Phone: {company["Phone"]}</p>
                  
                    <p>
                      Website:{" "}
                      <a
                        href={company["Website"]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {company["Website"]}
                      </a>
                    </p>
                  
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Facility;
