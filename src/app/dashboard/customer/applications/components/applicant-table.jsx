
import React from "react";

const ApplicantTable = ({ application }) => {
    const {
        equipmentName,
        image,
        brand,
        model,
        category,
        location,
        rentalPrice,
        rentalType,
        minDuration,
        delivery,
        status,
    } = application;

    return (
        <tr className="border-b border-gray-100 hover:bg-cyan-50/40 transition duration-200">

            {/* Equipment */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-3 min-w-[220px]">
                    <img
                        src={image}
                        alt={equipmentName}
                        className="w-14 h-14 rounded-xl object-cover border border-gray-100"
                    />

                    <div>
                        <h3 className="font-semibold text-gray-800">
                            {equipmentName}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                            {brand} · {model}
                        </p>
                    </div>
                </div>
            </td>

            {/* Category */}
            <td className="px-6 py-4">
                <span className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-lg text-xs font-semibold capitalize">
                    {category}
                </span>
            </td>

            {/* Location */}
            <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {location}
            </td>

            {/* Price */}
            <td className="px-6 py-4 whitespace-nowrap">
                <p className="font-bold text-gray-800">
                    ৳{Number(rentalPrice).toLocaleString("en-BD")}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    / {rentalType}
                </p>
            </td>

            {/* Duration */}
            <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                {minDuration}
            </td>

            {/* Delivery */}
            <td className="px-6 py-4">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    delivery === "Available"
                        ? "bg-green-50 text-green-600"
                        : "bg-orange-50 text-orange-600"
                }`}>
                    {delivery === "Available" ? "Available" : "Pickup Only"}
                </span>
            </td>

            {/* Status */}
            <td className="px-6 py-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {status}
                </span>
            </td>

        </tr>
    );
};

export default ApplicantTable;
