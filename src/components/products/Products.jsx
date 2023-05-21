import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './product/Product'

const products = [
  {
    id: 1,
    name: 'shoes',
    description: 'running shoes',
    price: '$125',
    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/image-1638895283.jpeg',
  },
  {
    id: 2,
    name: 'mackbook',
    description: 'apple mackbook',
    price: '$1200',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtL9uQi2dtexnZ0wgEcyYf82vxrVjuWGkYXtEtfi43HuUEr_4VLRbZVV-OsDW91vfKdQ&usqp=CAU',
  },
]

export const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          )
        })}
      </Grid>
    </main>
  )
}
