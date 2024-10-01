
"use client"
import { usePersonStore } from "@/store/update-state"

const UpdateState = () => {
    // "select" the needed state and actions, in this case, the firstName value
  // and the action updateFirstName
    const firstName = usePersonStore((state)=> state.firstName)
    const updateFirstName = usePersonStore((state)=> state.updateFirstName)
  return (
   <main className="flex justify-center mt-20">
    <div className="bg-blue-400 p-7 space-y-4 rounded-xl">
    <label className="font-semibold block">
        First Name
    </label>
    <input
    className="bg-slate-200 p-2 rounded-xl"
    onChange={(e)=> updateFirstName(e.currentTarget.value)}
    value={firstName}
    />

<p>
    Hello, <strong>{firstName}</strong>
</p>
    </div>
   </main>
  )
}

export default UpdateState