import { getCategories } from '@/lib/action/equipment';
import React from 'react';

const ManagerDashboard = async() => {
    const result = await getCategories()
    console.log(result,'result')
    return (
        <div>
            
        </div>
    );
};

export default ManagerDashboard;