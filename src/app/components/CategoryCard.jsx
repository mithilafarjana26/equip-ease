
import Link from 'next/link';
import React from 'react';

const CategoryCard = ({ category }) => {
    const {
        equipmentName,
        description,
        location,
        rentalPrice,
        securityDeposit,
        brand,
        image,
        category: equipmentCategory,
        rentalType,
        condition,
        delivery,
        status
    } = category;

    return (
       <Link href={`/browse-category/${category._id}`}>
        <div className="group flex flex-col sm:flex-row w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">

            {/* Equipment Image */}
            <div className="w-full sm:w-52 md:w-56 h-48 sm:h-auto shrink-0 bg-gray-100 overflow-hidden">
                <img
                    src={image}
                    alt={equipmentName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Equipment Details */}
            <div className="flex flex-col justify-between flex-1 p-4 md:p-5">

                {/* Top Section */}
                <div>
                    <div className="flex justify-between items-start gap-3">

                        <div>
                            <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                                {equipmentName}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                {brand} · {equipmentCategory}
                            </p>
                        </div>

                        <span className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${
                            condition === "Like New"
                                ? "bg-green-100 text-green-700"
                                : "bg-blue-100 text-blue-700"
                        }`}>
                            {condition}
                        </span>

                    </div>

                    <p className="text-sm text-gray-500 mt-3 line-clamp-2">
                        {description}
                    </p>

                    {/* Location */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3 text-sm text-gray-500">

                        <span className="flex items-center gap-1">
                            <span>📍</span>
                            {location}
                        </span>

                        <span className="flex items-center gap-1">
                            <span>📦</span>
                            {rentalType}
                        </span>

                        <span className="flex items-center gap-1">
                            <span>🚚</span>
                            {delivery}
                        </span>

                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-wrap justify-between items-end gap-3 mt-4 pt-3 border-t border-gray-100">

                    <div>
                        <p className="text-xl font-bold text-blue-600">
                            ৳{Number(rentalPrice).toLocaleString('en-BD')}
                            <span className="text-xs font-normal text-gray-400 ml-1">
                                / {rentalType}
                            </span>
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                            Security Deposit: ৳{Number(securityDeposit).toLocaleString('en-BD')}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">

                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                            status === "Approved"
                                ? "bg-green-50 text-green-700"
                                : "bg-yellow-50 text-yellow-700"
                        }`}>
                            {status}
                        </span>

                    </div>

                </div>

            </div>
        </div>
       </Link>
    );
};

export default CategoryCard;
