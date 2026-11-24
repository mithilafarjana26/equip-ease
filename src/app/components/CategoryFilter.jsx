
"use client";

import { useRouter } from "next/navigation";
import { MapPin, Wallet } from "lucide-react";

// Location Names
const locations = [
    { value: "Dhaka", label: "Dhaka" },
    { value: "Gazipur", label: "Gazipur" },
    { value: "Chittagong", label: "Chittagong" },
];

// Price Filters
const priceFilters = [
    { value: "0-500", label: "0 - 500" },
    { value: "500-1000", label: "500 - 1000" },
    { value: "1000-2000", label: "1000 - 2000" },
    { value: "2000-4000", label: "2000 - 4000" },
    { value: "4000-8000", label: "4000 - 8000" },
    { value: "all", label: "All price" },
];

const CategoryFilter = () => {

    const router = useRouter();

    const handleCheckBoxChange = (e) => {

        const params = new URLSearchParams(window.location.search);

        if (e.target.value === "all") {
            params.delete(e.target.name);
        } else {
            params.set(e.target.name, e.target.value);
        }

        router.push(`/browse-category?${params.toString()}`);
    };

    return (
        <aside className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:w-[250px] lg:shrink-0 lg:self-start">

            <h2 className="text-lg font-semibold text-gray-800">
                Filters
            </h2>

            {/* Location Filter */}
            <fieldset className="mt-6">

                <legend className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <MapPin size={17} className="text-blue-600" />
                    Location
                </legend>

                <ul className="mt-4 space-y-3">

                    {locations.map((location) => (

                        <li key={location.value}>

                            <label className="group flex cursor-pointer items-center gap-3 text-sm text-gray-500">

                                <input
                                    onChange={handleCheckBoxChange}
                                    type="radio"
                                    name="location"
                                    value={location.value}
                                    className="size-4 accent-blue-600"
                                />

                                <span className="flex-1 transition group-hover:text-blue-600">
                                    {location.label}
                                </span>

                            </label>

                        </li>

                    ))}

                </ul>

            </fieldset>

            {/* Rental Price Filter */}
            <fieldset className="mt-7 border-t border-gray-100 pt-6">

                <legend className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <Wallet size={17} className="text-blue-600" />
                    Rental Price
                </legend>

                <select
                    name="price"
                    onChange={handleCheckBoxChange}
                    defaultValue="all"
                    className="mt-4 w-full cursor-pointer rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
                >

                    {priceFilters.map((price) => (

                        <option
                            key={price.value}
                            value={price.value}
                            className="bg-white text-gray-700"
                        >
                            {price.label}
                        </option>

                    ))}

                </select>

            </fieldset>

        </aside>
    );
};

export default CategoryFilter;
