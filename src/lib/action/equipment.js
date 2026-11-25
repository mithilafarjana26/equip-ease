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

//delete jobs api
export const deleteCategory = async(id)=>{
    const res = await fetch(`${BASE_URL}/categories/${id}`,{
        method:"DELETE",
    })
    return res.json()
}

//applications post

export const createApplication = async(data) =>{
    const res = await fetch(`${BASE_URL}/application`,{
         method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
    })
    return res.json()
}

//get application by users

export const  getApplication = async(query = '') =>{
    const res = await fetch(`${BASE_URL}/application?${query}`)
    return res.json()
}

//delete application api
export const deleteApplicant = async(id)=>{
    const res = await fetch(`${BASE_URL}/application/${id}`,{
        method:"DELETE",
    })
    return res.json()
}

//count
export const  getApplicationCount = async(query = '') =>{
    const res = await fetch(`${BASE_URL}/application/count?${query}`)
    return res.json()
}