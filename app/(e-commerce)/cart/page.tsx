"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ShoppingCart, Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { products } from "../home/page"
import Image from "next/image"
import { useCart } from "@/store/use-cart"



const CartPage = () => {
  const cart = useCart()
  const [qty, setQty] = useState<number|string>(1);
  const [isMounted, setIsMounted] = useState(false)

  useEffect(()=>{
      setIsMounted(true)
  }, []);
  

  if (!isMounted){
      return null;
  }

  const totalPrice = cart.items.reduce((sum, item)=> {
    return sum + Number(item.price) * item.quantity
  }, 0)
   

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
       <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Shopping Cart</h1>
        </div>
      </header> 

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
<Table>
    <TableHeader>
        <TableRow>
        <TableHead >
            Product
        </TableHead>
        <TableHead className="w-[10rem]" >
            Name
        </TableHead>
        <TableHead>
            Price
        </TableHead>
        <TableHead>
            Quantity
        </TableHead>
        <TableHead className="text-right">
            Total
        </TableHead>
        <TableHead>
        </TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
       {cart.items.map(item=> {
        const onRemove = ()=> {
          cart.removeItem(item.id)
        }

        const currentItem = products.find((product) => product.id === item.id)
      
        return(
        <TableRow key={item.id}>
<TableCell className="flex items-center space-x-3">
<div className="relative h-20 w-20">
  <Image
    src={item.image}
    alt={item.name}
    height={100}
    width={100}
    className="rounded object-cover"
  />
</div>
</TableCell>
<TableCell>
  {item.name}
</TableCell>
<TableCell>
    ${item.price.toFixed(2)}
</TableCell>
<TableCell>
    <div className="flex items-center space-x-2">
                        <select
    value={item.quantity}
    onClick={()=> {
      cart.updateQuantity( qty as number, item.id)
    }}
    onChange={(e) => setQty(e.target.value)}
    className="p-2 w-[4rem] border border-slate-800 rounded-lg text-black"
  >
    {item.quantity > 0 ? (
      Array.from(Array(Number(currentItem?.quantity)).keys()).map((x) => (
        <option
        key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))
    ) : (
      <option value="0">Out of stock</option>
    )}
  </select>
     

    </div>
</TableCell>

<TableCell className="text-right">
${(item.price * item.quantity).toFixed(2)}
</TableCell>

<TableCell>
    <Button
    variant={"ghost"}
    size={"icon"}
onClick={onRemove}
    >
        <Trash2Icon className="h-4 w-4 text-red-500"/>
        <span className="sr-only">remove Item</span>
    </Button>
</TableCell>
        </TableRow>
        )
})}
    </TableBody>
</Table>

<div className="grid grid-cols-2 bg-gray-50">
<div className="mt-14 ml-2">
                <Button
                variant={"destructive"}
                className="w-1/2"
                disabled={cart.items.length == 0}
                onClick={()=> cart.removeAll()}
                >
                  Clear  cart
                </Button>
              </div>
<div className="px-4 py-3   text-right sm:px-6">

              <div className="text-xl font-bold mb-4">
                Total: ${totalPrice.toFixed(2)}
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button variant="outline" asChild>
                  <Link href="/home">Continue Shopping</Link>
                </Button>
                <Button
                disabled={cart.items.length == 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Proceed to Checkout
                </Button>
              </div>
            </div>
</div>
      </div>
      </div>
      </main>
    </div>
  )
}

export default CartPage