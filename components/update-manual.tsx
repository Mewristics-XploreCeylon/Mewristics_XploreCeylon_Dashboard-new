import React from "react"

import { Button } from "../components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { useRouter } from "next/navigation"

export default function UpdateManual() {
  const router = useRouter()
  return (
    <Card className="sm:col-span-2 max-w-md">
      <CardHeader className="pb-3">
        <CardTitle>Update Crew Manual</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          If there are any updates to chapters of the fits air crew manual, please update it here.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="bg-[#0B2567]" onClick={()=> {router.push("/dashboard/crew_manual")}}>Update Manual</Button>
      </CardFooter>
    </Card>
  )
}
