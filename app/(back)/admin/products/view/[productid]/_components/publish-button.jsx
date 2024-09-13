"use client"

import { Button } from "@material-tailwind/react"

const PublishButton = ({className}) => {
  return (
    <div>
        <Button disabled={true} className={className}>Publish Product</Button>
      
    </div>
  )
}

export default PublishButton
