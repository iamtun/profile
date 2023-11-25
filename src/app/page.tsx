import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Tuna.dev - Xách dép chạy deadline",
  description: "Xin chào, đây là trang của một anh dev mới tập tành làm web",
}

const Home:React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello. This is Tuna Dev</h1>
    </main>
  )
}

export default Home
