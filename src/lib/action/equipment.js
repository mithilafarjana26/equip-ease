const BASE_URL= process.env.NEXT_PUBLIC_API_BASE_URL|| 'http://localhost:5000'
//create categories

export const createCategories = async(data)=>{
    const res = await fetch(`${BASE_URL}/categories`,{
        method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
    })
    return res.json()
}

//get all categories

export const getCategories = async(query = '')=>{
    const res = await fetch(`${BASE_URL}/categories?${query}`)
    return res.json()
}

//find one jobsa

export const getOneCategory = async(categoriesId)=>{
    const res=await fetch(`${BASE_URL}/categories/${categoriesId}`)
    return res.json()
}