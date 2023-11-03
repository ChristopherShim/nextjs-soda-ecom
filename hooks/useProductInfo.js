import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const useProductInfo = (requestConfig, applyData) => {
    const [productInfo, setProductInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query

    useEffect(()=>{
        if(!id){
            return ;
        }
        axios.get("/api/products?id=" +id).then(response =>{
            setProductInfo(response.data);
            console.log(response.data)
        })
    }, [id])

  return {productInfo}
}

export default useProductInfo