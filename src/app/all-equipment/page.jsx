import React from "react";
import { getCategories } from "@/lib/action/equipment";
import AllCategories from "../categories/page";
import CategoryEquipmentList from "../components/CategoryEquipmentList ";


const AllEquipments = async ({ searchParams }) => {
  const search = await searchParams;

  const queryString = new URLSearchParams(search).toString();

  const result = await getCategories(queryString);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Category Cards */}
        <AllCategories />

        {/* Equipment Heading */}
        <div className="mt-12 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold capitalize">
            {search.category
              ? `${search.category} Equipment`
              : "All Equipment"}
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Total Equipment: {result.length}
          </p>
        </div>

        {/* Equipment Cards */}
        <CategoryEquipmentList result={result} />

      </div>
    </div>
  );
};

export default AllEquipments;