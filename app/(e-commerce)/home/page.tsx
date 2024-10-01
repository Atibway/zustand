"use client"

import { Button } from '@/components/ui/button';

import { ProductCard } from '@/components/e-commerce/ProductCard';


export const products = [
  { id:1, name: "Nike Flyknits",quantity: 2, price: 19.99, image: "https://th.bing.com/th/id/OIP.7SeMY3g9G_4NuDeEHBz8DgAAAA?rs=1&pid=ImgDetMain?height=200&width=200" },
  { id:2, name: "Nike Air-Max", quantity: 5, price: 24.99, image: "https://i5.walmartimages.com/asr/5829b956-2747-4111-a1f5-8cf480dd8458_1.2369644d6071452ec1a4c487e046326a.jpeg?height=200&width=200" },
  {id:3, name: "Nike Hoodie", quantity: 3, price: 29.99, image: "https://th.bing.com/th/id/OIP.3q4CNoceBV2fGq3l4PbTjQAAAA?rs=1&pid=ImgDetMain?height=200&width=200" },
  { id:4, name: "Air T-Shirt", quantity: 1, price: 34.99, image: "https://th.bing.com/th/id/OIP.Oho3ZR08Nxturs9_TfzAmAAAAA?rs=1&pid=ImgDetMain?height=200&width=200" },
]

const HomePage = () => {
  return (
    <main className='flex flex-col min-h-screen'>
<div className='min-h-[40rem] flex-1'>
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
<div className='container px-4 md:px-6'>
<div className='flex flex-col items-center space-y-4 text-center'>
<div className='space-y-2'>
<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
  WELCOME TO BM STORES
</h1>
<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover our wide range of products and enjoy exclusive deals today.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Shop Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
</div>
</div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                item={product}
                />
              ))}
            </div>
          </div>
        </section>
</div>
    </main>
  )
};

export default HomePage