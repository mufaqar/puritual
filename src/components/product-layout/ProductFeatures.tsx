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
            onClick={() => handleFAQ(idx)}
            className="md:text-3xl text-xl font-normal text-dark mb-2.5 flex items-center justify-between gap-5"
          >
            <span>{item.title}</span> {openFaq === idx ? <TfiLayoutLineSolid  />: <LiaPlusSolid  />}
          </h4>
          <div
            className={`transition-all duration-200 ${
              openFaq === idx ? "max-h-[300px] h-full" : "h-0 overflow-hidden"
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
