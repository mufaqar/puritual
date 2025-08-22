"use client";

import React, { useState } from "react";
import { LiaPlusSolid } from "react-icons/lia";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function ProductFeatures({ listing }: any) {
  const [openFaq, setOpenFaq] = useState<any>(0);
  const handleFAQ = (id: number) => {
    if (openFaq === id) {
      return setOpenFaq(null);
    }
    setOpenFaq(id);
  };

  return (
    <div>
      {listing?.map((item: any, idx: number) => (
        <div key={idx} className="mb-6">
          <h4
          
            className="md:text-3xl text-xl font-normal text-dark mb-2.5 flex items-center justify-between gap-5"
          >
            <span>{item.title}</span> 
          </h4>
          <div
            className={`transition-all duration-200 max-h-[300px] h-full ${
              openFaq === idx ? "" : "h-0 overflow-hidden"
            }`}
          >
            <p
              className="md:text-xl text-lg font-normal text-dark"
              dangerouslySetInnerHTML={{ __html: item.value }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductFeatures;
