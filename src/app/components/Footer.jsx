
'use client';

import React from 'react';
import Link from 'next/link';
import {
    Mail,
    MapPin,
    Phone,
    ArrowRight
} from 'lucide-react';

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter
} from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="border-t border-slate-100 bg-white">

            <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 lg:px-16">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
                            Equip<span className="text-blue-600">Nest.</span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-7 text-slate-500">
                            Your trusted destination for renting quality equipment.
                            Find what you need, rent with ease, and make every project
                            successful.
                        </p>

                        <div className="mt-5 flex gap-3">
                            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <FaFacebookF size={17} />
                            </a>

                            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <FaInstagram size={17} />
                            </a>

                            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <FaLinkedinIn size={17} />
                            </a>

                            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                                <FaXTwitter size={17} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-500">
                            <li>
                                <Link href="/" className="transition-colors hover:text-blue-600">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-equipment" className="transition-colors hover:text-blue-600">
                                    Browse Equipment
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="transition-colors hover:text-blue-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="transition-colors hover:text-blue-600">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">
                            Customer Support
                        </h3>

                        <ul className="space-y-4 text-sm text-slate-500">
                            <li>
                                <Link href="/faq" className="hover:text-blue-600">
                                    Frequently Asked Questions
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-blue-600">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-blue-600">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-600">
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-900">
                            Get In Touch
                        </h3>

                        <ul className="space-y-4 text-sm text-slate-500">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="shrink-0 text-blue-600" />
                                <span>Dhaka, Bangladesh</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail size={18} className="shrink-0 text-blue-600" />
                                <a href="mailto:support@equipnest.com" className="hover:text-blue-600">
                                    support@equipnest.com
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone size={18} className="shrink-0 text-blue-600" />
                                <span>+880 1XXXXXXXXX</span>
                            </li>
                        </ul>

                        <Link
                            href="/all-equipment"
                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3"
                        >
                            Start Renting <ArrowRight size={16} />
                        </Link>
                    </div>

                </div>

                {/* Payment Methods */}
                <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-slate-100 pt-8 md:flex-row">

                    <div>
                        <h4 className="mb-3 text-sm font-semibold text-slate-700">
                            Secure Payment Methods
                        </h4>

                        <div className="flex flex-wrap items-center gap-2">

                            <span className="rounded-md border border-slate-200 px-4 py-2 text-lg font-extrabold italic text-blue-700">
                                VISA
                            </span>

                            <span className="flex items-center gap-1 rounded-md border border-slate-200 px-3 py-2">
                                <span className="h-4 w-4 rounded-full bg-red-500"></span>
                                <span className="-ml-2 h-4 w-4 rounded-full bg-amber-400/90"></span>
                                <span className="ml-1 text-xs font-bold text-slate-700">Mastercard</span>
                            </span>

                            <span className="rounded-md border border-slate-200 px-4 py-2 text-sm font-bold text-blue-600">
                                PayPal
                            </span>

                            <span className="rounded-md border border-slate-200 px-4 py-2 text-sm font-extrabold text-violet-600">
                                stripe
                            </span>

                            <span className="rounded-md border border-slate-200 px-3 py-2 text-sm font-bold text-pink-600">
                                bKash
                            </span>

                            <span className="rounded-md border border-slate-200 px-3 py-2 text-sm font-bold text-orange-600">
                                Nagad
                            </span>

                        </div>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-sm font-semibold text-slate-700">
                            Rent Smarter. Work Better.
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                            Quality equipment, whenever you need it.
                        </p>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center sm:flex-row">

                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} EquipNest. All rights reserved.
                    </p>

                    <p className="text-xs text-slate-500">
                        Made with care for smarter rentals.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
