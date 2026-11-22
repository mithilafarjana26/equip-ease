
'use client';

import React from 'react';
import {
    Search,
    CalendarCheck,
    ShieldCheck,
    Wallet
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        id: 1,
        icon: Search,
        title: 'Explore the Right Equipment',
        description:
            'Discover useful tools and equipment from trusted owners around your area.',
        bg: 'bg-blue-50',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    {
        id: 2,
        icon: CalendarCheck,
        title: 'Reserve on Your Schedule',
        description:
            'Choose your rental dates and quantity to book equipment that fits your plan.',
        bg: 'bg-violet-50',
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-600',
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: 'Rent with Confidence',
        description:
            'Enjoy a smoother rental experience with secure online payments and clear booking details.',
        bg: 'bg-emerald-50',
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
    },
    {
        id: 4,
        icon: Wallet,
        title: 'Turn Your Gear into Income',
        description:
            'Share your equipment with others and earn money whenever it is available for rent.',
        bg: 'bg-amber-50',
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
    },
];

const FeaturesCard = () => {
    return (
        <section className="bg-white px-5 py-16 md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">

                <div className="mb-12 text-center">
                    <span className="mb-3 inline-block rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
                        Why EquipNest?
                    </span>

                    <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                        Everything You Need to <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Rent Smarter</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                        From finding the right equipment to earning from your own gear,
                        we make renting simple and convenient.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                        once: false,
                                         amount: 0.3,
                                                    }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.12,
                                }}
                                whileHover={{ y: -7 }}
                                className={`${feature.bg} rounded-2xl border border-slate-100 p-7 transition-shadow duration-300 hover:shadow-xl`}
                            >
                                <div className={`${feature.iconBg} ${feature.iconColor} mb-6 flex h-14 w-14 items-center justify-center rounded-xl`}>
                                    <Icon size={27} strokeWidth={1.8} />
                                </div>

                                <h3 className="mb-3 text-lg font-bold text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="text-sm leading-7 text-slate-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default FeaturesCard;
