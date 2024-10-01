
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Image from 'next/image';
import { Product, useCart } from '@/store/use-cart';
type ProductProps ={
  item: Product
}
export const ProductCard = ({
 item
}: ProductProps) => {
  const cart = useCart()
  return (
    <div
    key={item.id}
    >

    <Card >
                  <CardHeader>
                  <div className="relative ">
                  <Image
                      alt={item.name}
                      className="aspect-square object-cover w-full"
                      height={200}
                      src={item.image}
                      width={200}
                    />
</div>

                  </CardHeader>
                  <CardContent>
                    <CardTitle>{item.name}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                    onClick={() =>cart.addItem(item)}
                    className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
    </div>
  )
}
