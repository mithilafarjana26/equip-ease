import { getCategories } from '@/lib/action/equipment';
import React from 'react';
import CategorySearchBar from '../components/CategorySearchBar';
import CategoryFilter from '../components/CategoryFilter';

const BrowseCategory = async({searchParams}) => {
    const search=await searchParams
      const queryString = new URLSearchParams(search).toString();
console.log(queryString)
const result = await getCategories(queryString);
  console.log(result)
    return (
        <div>
            <CategorySearchBar/>
            <CategoryFilter/>

            <div>
<h1>total equipment : {result.length}</h1>
                 {
                result.map(category=>(
                    <li key={category._id}>{category.equipmentName}</li>
                ))
            }
            </div>
        </div>
    );
};

export default BrowseCategory;