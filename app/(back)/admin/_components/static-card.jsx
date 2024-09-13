"use client"
import { Card } from '@material-tailwind/react'
import React from 'react'

const StaticCard = ({title,no,bg}) => {
  return (
    <Card color={bg} variant='gradient'>
        <Card.Body>
            <h5 className=' text-3xl font-bold'>{no}+</h5>
            <h5 className=' text-2xl'>{title}</h5>
        </Card.Body>
    </Card>
  )
}

export default  StaticCard