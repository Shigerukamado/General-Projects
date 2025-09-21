'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@radix-ui/themes'
const Issuespage = () => {
  return (
    <div><Button><Link href="/issues/new">New Issues</Link></Button></div>
  )
}

export default Issuespage