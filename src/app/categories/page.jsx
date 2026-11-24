
'use client';

import React from 'react';
import Link from 'next/link';
import {
    HardHat,
    Camera,
    Truck,
    Sprout,
    Laptop,
    PartyPopper
} from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
    {
        id: 1,
        name: 'Construction',
        icon: HardHat,
        color: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        id: 2,
        name: 'Photography',
        icon: Camera,
        color: 'bg-violet-50',
        iconColor: 'text-violet-600',
    },
    {
        id: 3,
        name: 'Vehicles & Transportation',
        icon: Truck,
        color: 'bg-amber-50',
        iconColor: 'text-amber-600',
    },
    {
        id: 4,
        name: 'Agriculture',
        icon: Sprout,
        color: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
    },
    {
        id: 5,
        name: 'Electronics',
        icon: Laptop,
        color: 'bg-cyan-50',
        iconColor: 'text-cyan-600',
    },
    {
        id: 6,
        name: 'Event Equipment',
        icon: PartyPopper,
        color: 'bg-rose-50',
        iconColor: 'text-rose-600',
    },
];

const AllCategories = () => {
    return (
        <section className="bg-white px-5 py-16 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center"
                >
                    <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                        Explore Equipment
                    </span>

                    <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                        Browse by <span className="text-blue-600">Category</span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
                        Find the right tools and equipment for your next project
                        from our wide range of rental categories.
                    </p>
                </motion.div>

                {/* Category Cards */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

                    {categories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{
                                    once: false,
                                    amount: 0.3,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                    ease: 'easeOut',
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                            >
                               <Link
    href={`/all-equipment?category=${encodeURIComponent(category.name.toLowerCase())}`}
    className="group flex min-h-36 flex-col items-center justify-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
>
                                    <div className={`${category.color} ${category.iconColor} flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}>
                                        <Icon size={27} strokeWidth={1.8} />
                                    </div>

                                    <h3 className="text-sm font-semibold leading-5 text-slate-700 transition-colors group-hover:text-blue-600">
                                        {category.name}
                                    </h3>
                                </Link>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default AllCategories;
