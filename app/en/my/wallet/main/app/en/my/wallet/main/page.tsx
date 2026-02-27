"use client"
import { useState } from "react"

export default function Wallet() {
  const [mode, setMode] = useState("practice")
  const [balance, setBalance] = useState(10000)

  const switchMode = () => {
    if (mode === "practice") {
      setMode("live")
      setBalance(0)
    } else {
      setMode("practice")
      setBalance(10000)
    }
  }

  return (
    <div style={{padding:40}}>
      <h1>MYWEBBIN Wallet</h1>
      <h2>Mode: {mode}</h2>
      <h2>Balance: ${balance}</h2>
      <button onClick={switchMode}>Switch Mode</button>
    </div>
  )
}
