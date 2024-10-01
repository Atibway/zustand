"use client"

import { useCart } from "@/store/use-cart"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export const Header = () => {
  const cart = useCart()
  return (
    <div className="px-4  lg:px-6 h-14 flex items-center border-b shadow-lg z-50 sticky top-0 bg-white">
      <div className="flex">
<Link
href={"/home"}
className="flex items-center justify-center"
>
<span className="font-bold text-2xl">BM Stores</span>
</Link>

<div className="mt-4 sm:mt-1">
    <Button
      variant={"link"}
      >
        <Link
        href={"/"}
        >
        Back To Home
        </Link>
      </Button>
    </div>
      </div>

<nav className="ml-auto flex gap-4 sm:gap-6">
   <Link
   href={"#"}
   className="text-sm font-medium hover:underline underline-offset-4"
   >
   Products
   </Link> 
   <Link
   href={"#"}
   className="text-sm font-medium hover:underline underline-offset-4"
   >
   Categories
   </Link> 
   <Link
   href={"#"}
   className="text-sm font-medium hover:underline underline-offset-4"
   >
   About
   </Link> 
   <Link
href={"/cart"}
className="relative flex items-center justify-center mx-5"
>
<ShoppingCart
className="h-6 w-6"
/>
<span className="absolute top-[-7px] left-[8px] bg-red-500 text-white font-bold rounded-full w-5  h-5 text-center ">
  {cart.items.length}
</span>

</Link>
</nav>
    </div>
  )
}

