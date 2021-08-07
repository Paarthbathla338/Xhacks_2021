import React from 'react'
import {Grid} from "@material-ui/core"

import Product from "./Product/Product"

const products =[
    
        {id:1, name : "Shoes" , description : "Running Shoes", price:"$50", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"},
        {id:2, name : "Macbook Pro Air" , description : "Apple Product",price:"$500", image:"https://www.apple.com/v/macbook-air/k/images/overview/hero_endframe__ea0qze85eyi6_large_2x.jpg"}

    
]

const Products =() => {
    return (    <main>
        <Grid container justify="center" spacing={4}>

        {
            products.map((product) =>(
                <Grid item key="product.id" xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>

            ))
        }


        </Grid>
    </main>)


}

export default Products;