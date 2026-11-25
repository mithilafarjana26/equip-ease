
'use client'

import React from 'react';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

import {
    LayoutDashboard,
    ClipboardList,
    Heart,
    User,
    PlusCircle,
    Package,
    CalendarCheck,
    Users,
    Settings,
} from 'lucide-react';


const menuItemsByRole = {

    customer: [
        {
            name: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "My Rentals",
            url: "/dashboard/customer/applications",
            icon: ClipboardList,
        },
        {
            name: "Favorites",
            url: "/dashboard/customer/favorites",
            icon: Heart,
        },
        {
            name: "My Profile",
            url: "/dashboard/customer/profile",
            icon: User,
        },
    ],

    manager: [
        {
            name: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Add Equipment",
            url: "/dashboard/manager/equipments/new",
            icon: PlusCircle,
        },
        {
            name: "My Equipment",
            url: "/dashboard/manager/equipments",
            icon: Package,
        },
        {
            name: "My Equipment Rental",
            url: "/dashboard/manager/rentals",
            icon: CalendarCheck,
        },
        {
            name: "My Profile",
            url: "/dashboard/manager/profile",
            icon: User,
        },
    ],

    admin: [
        {
            name: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "All Users",
            url: "/dashboard/admin/users",
            icon: Users,
        },
        {
            name: "All Equipment",
            url: "/dashboard/admin/equipment",
            icon: Package,
        },
        {
            name: "All Rentals",
            url: "/dashboard/admin/rentals",
            icon: ClipboardList,
        },
        {
            name: "My Profile",
            url: "/dashboard/admin/profile",
            icon: User,
        },
    ],

};


const AppSidebar = () => {

    const { data: session, isPending } = useSession();

    const role = session?.user?.role || "";

    if (isPending) {
        return <div>Loading...</div>;
    }

    const menuItems = menuItemsByRole[role] || [];

    return (
        <Sidebar>

            <SidebarHeader>
                <Link href="/" className="text-xl font-bold px-3 py-4">
                    EquipRent
                </Link>
            </SidebarHeader>

            <SidebarContent>

                <SidebarGroup>

                    <SidebarMenu>

                        {menuItems.map((item) => (

                            <SidebarMenuItem key={item.name}>

                                <SidebarMenuButton
                                    render={<Link href={item.url} />}
                                >
                                    <item.icon />
                                    <span>{item.name}</span>
                                </SidebarMenuButton>

                            </SidebarMenuItem>

                        ))}

                    </SidebarMenu>

                </SidebarGroup>

            </SidebarContent>

            <SidebarFooter />

        </Sidebar>
    );
};

export default AppSidebar;
