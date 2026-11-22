
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, LogOut, User } from 'lucide-react';
import { authClient, useSession } from '@/lib/auth-client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const { data: session, isPending } = useSession();
const router=useRouter()
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'How It Works', href: '/how-it-works' },
    ];

    const handleSignOut = async () => {
        await authClient.signOut();
        setIsOpen(false);
        router.refresh()
    };

    const user = session?.user;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">

            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-200 transition-transform group-hover:scale-105">
                        <span className="text-xl font-extrabold text-white">E</span>
                    </div>

                    <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
                        EquipNest
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-blue-600"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Authentication */}
                <div className="hidden items-center gap-4 md:flex">

                    {isPending ? (
                        <span className="loading loading-spinner loading-sm text-blue-600"></span>
                    ) : user ? (
                        <>
                        <Link  href={`/dashboard/${session?.user?.role}`}>Dashboard</Link>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10 border-2 border-blue-100">
                                    <AvatarImage src={user.image || ''} />
                                    <AvatarFallback className="bg-blue-100 font-bold text-blue-700">
                                        {user.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </AvatarFallback>
                                </Avatar>

                                <span className="text-sm font-semibold text-slate-700">
                                    Welcome, {user.name}
                                </span>
                            </div>

                            <button
                                onClick={handleSignOut}
                                className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                            >
                                <LogOut size={16} />
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/sign-up"
                                className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
                            >
                                Sign Up
                            </Link>

                            <Link
                                href="/sign-in"
                                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300"
                            >
                                Sign In
                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={23} /> : <Menu size={23} />}
                </button>

            </nav>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-xl md:hidden">

                    <div className="flex flex-col gap-1">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="mt-3 border-t border-slate-100 pt-4">

                            {isPending ? (
                                <div className="flex justify-center py-3">
                                    <span className="loading loading-spinner loading-sm text-blue-600"></span>
                                </div>
                            ) : user ? (
                                <div className="flex flex-col gap-4">

                                    <div className="flex items-center gap-3 px-3">
                                        <Avatar className="h-10 w-10 border-2 border-blue-100">
                                            <AvatarImage src={user.image || ''} />
                                            <AvatarFallback className="bg-blue-100 font-bold text-blue-700">
                                                {user.name?.charAt(0)?.toUpperCase() || 'U'}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <p className="text-sm font-bold text-slate-800">
                                                Welcome, {user.name}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleSignOut}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 px-5 py-3 font-semibold text-red-600 transition-colors hover:bg-red-50"
                                    >
                                        <LogOut size={17} />
                                        Sign Out
                                    </button>

                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">

                                    <Link
                                        href="/sign-up"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                                    >
                                        <User size={17} />
                                        Sign Up
                                    </Link>

                                    <Link
                                        href="/sign-in"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-md shadow-blue-200"
                                    >
                                        Sign In
                                        <ArrowUpRight size={17} />
                                    </Link>

                                </div>
                            )}

                        </div>
                    </div>
                </div>
            )}

        </header>
    );
};

export default Navbar;
