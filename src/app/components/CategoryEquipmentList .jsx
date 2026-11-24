"use client";

import React, { useState } from "react";
import CategoryCard from "./CategoryCard";


const CategoryEquipmentList = ({ result }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleEquipment = showAll ? result : result.slice(0, 7);

  return (
    <>
      {result.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleEquipment.map((equipment) => (
            <CategoryCard
              key={equipment._id}
              category={equipment}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold">
            No Equipment Found
          </h2>
        </div>
      )}

      {result.length > 7 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
};

export default CategoryEquipmentList;