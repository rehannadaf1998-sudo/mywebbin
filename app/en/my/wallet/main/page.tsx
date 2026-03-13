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
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f0f1a; color: #fff; }
        .container { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; }
        .card { background: #1a1a2e; border: 1px solid #2a2a4a; border-radius: 20px; padding: 32px 24px; width: 100%; max-width: 380px; text-align: center; }
        .title { font-size: clamp(1.4rem, 6vw, 2rem); font-weight: 900; background: linear-gradient(135deg, #00d2ff, #7b2ff7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 24px; }
        .badge { display: inline-block; padding: 6px 18px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; }
        .badge.practice { background: #1e3a5f; color: #00d2ff; border: 1px solid #00d2ff44; }
        .badge.live { background: #3a1e1e; color: #ff4d4d; border: 1px solid #ff4d4d44; }
        .balance { font-size: clamp(2rem, 10vw, 3rem); font-weight: 900; margin: 16px 0; }
        .balance.practice { color: #00d2ff; }
        .balance.live { color: #ff4d4d; }
        .label { font-size: 0.85rem; color: #666; margin-bottom: 28px; }
        .btn { width: 100%; padding: 16px; background: linear-gradient(135deg, #00d2ff, #7b2ff7); border: none; border-radius: 50px; color: #fff; font-size: 1rem; font-weight: 700; cursor: pointer; transition: opacity 0.2s; }
        .btn:hover { opacity: 0.85; }
        .back { margin-top: 20px; font-size: 0.85rem; color: #555; text-decoration: none; display: block; }
        .back:hover { color: #aaa; }
      `}</style>
      <div className="container">
        <div className="card">
          <div className="title">MYWEBBIN Wallet</div>
          <span className={`badge ${mode}`}>{mode} mode</span>
          <div className={`balance ${mode}`}>${balance.toLocaleString()}</div>
          <p className="label">{mode === "practice" ? "Practice with virtual funds" : "Connected to live account"}</p>
          <button className="btn" onClick={switchMode}>
            Switch to {mode === "practice" ? "Live" : "Practice"} Mode
          </button>
          <a className="back" href="/">← Back to Home</a>
        </div>
      </div>
    </>
  )
}
