
"use client"

import { Button } from "@/components/ui/button";
import { useStore } from "@/store/example1";
import { storeProps } from "@/store/example1";
import Link from "next/link";
import { useState } from "react";

const Example1 = () => {
    const [newBearCount] = useState<number>(20)
    const {count, increase, removeAllCount, updateCount, decrease}: storeProps = useStore()
    
  return (
    <>
    <div>
    <Button
      variant={"link"}
      >
        <Link
        href={"/"}
        >
        Back To Home Page
        </Link>
      </Button>
    </div>
    <div className="flex justify-center items-center">
      
    <div className="flex justify-center items-center mt-20 w-[300px] h-[300px] bg-blue-300 rounded-full">
        <Button
        onClick={() =>updateCount(newBearCount)}
        >
            Update
        </Button>
      <div className="grid ">
        <Button onClick={decrease}>
            -
        </Button>
    <h1 className="bg-pink-300  w-7 h-7 rounded-full text-center pt-1 mx-5">{count}</h1>
    <Button
    onClick={increase}
    >
     +
    </Button>
      </div>
    <div>
    <Button
    className=""
   onClick={removeAllCount}
    >
   Remove
    </Button>
    </div>

   </div>
    </div>
    </>
  )
}

export default Example1