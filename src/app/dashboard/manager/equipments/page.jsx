import { getCategories } from '@/lib/action/equipment';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Eye,
    Pencil,
    Trash2,
    MapPin,
    Package
} from 'lucide-react';
const ManageEquipmentTable = async() => {
      const equipment = await getCategories()
        console.log(equipment,'result')
    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Manage Equipment
                </h1>
                <p className="text-gray-500 mt-2">
                    Manage all your listed rental equipment.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                <div className="bg-white p-5 rounded-xl shadow-sm border">
                    <p className="text-gray-500 text-sm">Total Equipment</p>
                    <h2 className="text-3xl font-bold mt-2 text-gray-800">
                        {equipment.length}
                    </h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm border">
                    <p className="text-gray-500 text-sm">Total Quantity</p>
                    <h2 className="text-3xl font-bold mt-2 text-blue-600">
                        {equipment.reduce(
                            (total, item) => total + Number(item.quantity || 0),
                            0
                        )}
                    </h2>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm border">
                    <p className="text-gray-500 text-sm">Approved Equipment</p>
                    <h2 className="text-3xl font-bold mt-2 text-green-600">
                        {equipment.filter(
                            item => item.status === 'Approved'
                        ).length}
                    </h2>
                </div>

            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

                <div className="p-5 border-b">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Equipment List
                    </h2>
                </div>

                <div className="overflow-x-auto">

                    <table className="w-full text-sm text-left">

                        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                            <tr>
                                <th className="px-5 py-4">Equipment</th>
                                <th className="px-5 py-4">Category</th>
                                <th className="px-5 py-4">Location</th>
                                <th className="px-5 py-4">Price</th>
                                <th className="px-5 py-4">Quantity</th>
                                <th className="px-5 py-4">Status</th>
                                <th className="px-5 py-4 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">

                            {equipment.map((item) => (

                                <tr
                                    key={item._id}
                                    className="hover:bg-gray-50 transition"
                                >

                                    {/* Equipment */}
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3 min-w-[220px]">

                                            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                                                <Image
                                                    src={item?.image}
                                                    alt={item.equipmentName}
                                                    fill
                                                    sizes="56px"
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div>
                                                <p className="font-semibold text-gray-800">
                                                    {item.equipmentName}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {item.brand} - {item.model}
                                                </p>
                                            </div>

                                        </div>
                                    </td>

                                    {/* Category */}
                                    <td className="px-5 py-4">
                                        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium capitalize">
                                            {item.category}
                                        </span>
                                    </td>

                                    {/* Location */}
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-1 text-gray-600 whitespace-nowrap">
                                            <MapPin size={14} />
                                            {item.location}
                                        </div>
                                    </td>

                                    {/* Price */}
                                    <td className="px-5 py-4 font-semibold text-gray-800 whitespace-nowrap">
                                        ৳{Number(item.rentalPrice).toLocaleString('en-BD')}
                                        <span className="text-xs text-gray-400 font-normal">
                                            /day
                                        </span>
                                    </td>

                                    {/* Quantity */}
                                    <td className="px-5 py-4">
                                        <span className="font-medium text-gray-700">
                                            {item.quantity}
                                        </span>
                                    </td>

                                    {/* Status */}
                                    <td className="px-5 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            item.status === 'Approved'
                                                ? 'bg-green-100 text-green-700'
                                                : item.status === 'Pending'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'bg-red-100 text-red-700'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-5 py-4">
                                        <div className="flex items-center justify-center gap-2">

                                            <Link
                                                href={`/dashboard/manager/equipments/${item._id}/applications`}
                                                title="View Equipment"
                                                className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                                            >
                                                <Eye size={17} />
                                            </Link>

                                            <Link
                                                href={`/manager-dashboard/edit/${item._id}`}
                                                title="Edit Equipment"
                                                className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition"
                                            >
                                                <Pencil size={17} />
                                            </Link>

                                            <button
                                                title="Delete Equipment"
                                                className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                                            >
                                                <Trash2 size={17} />
                                            </button>

                                        </div>
                                    </td>

                                </tr>

                            ))}

                            {equipment.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="text-center py-12 text-gray-500">
                                        <Package size={35} className="mx-auto mb-2 text-gray-400" />
                                        No equipment found.
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>
            </div>

        </div>
    );
};

export default ManageEquipmentTable;