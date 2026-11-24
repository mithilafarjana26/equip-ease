
import { getOneCategory } from '@/lib/action/equipment';
import React from 'react';

const CategoryDetails = async({params}) => {
    const {id} = await params
    const equipments=await getOneCategory(`${id}`)
    console.log(equipments)
    return (
        <div>
            <h1>main category details</h1>
        </div>
    );
};

export default CategoryDetails;