export default function Home() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f0f1a; color: #fff; }
        .container { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; }
        .logo { font-size: clamp(2rem, 8vw, 4rem); font-weight: 900; letter-spacing: 2px; background: linear-gradient(135deg, #00d2ff, #7b2ff7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .tagline { margin-top: 12px; font-size: clamp(0.9rem, 3vw, 1.2rem); color: #aaa; text-align: center; }
        .cards { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 40px; justify-content: center; width: 100%; max-width: 600px; }
        .card { background: #1a1a2e; border: 1px solid #2a2a4a; border-radius: 16px; padding: 24px; flex: 1 1 140px; min-width: 140px; text-align: center; cursor: pointer; transition: transform 0.2s, border-color 0.2s; }
        .card:hover { transform: translateY(-4px); border-color: #7b2ff7; }
        .card-icon { font-size: 2rem; margin-bottom: 8px; }
        .card-label { font-size: 0.9rem; color: #ccc; font-weight: 600; }
        .btn { margin-top: 36px; padding: 14px 36px; background: linear-gradient(135deg, #00d2ff, #7b2ff7); border: none; border-radius: 50px; color: #fff; font-size: 1rem; font-weight: 700; cursor: pointer; text-decoration: none; display: inline-block; transition: opacity 0.2s; }
        .btn:hover { opacity: 0.85; }
        .footer { margin-top: 48px; font-size: 0.75rem; color: #555; }
        @media (max-width: 400px) { .card { padding: 16px; } }
      `}</style>
      <div className="container">
        <div className="logo">MYWEBBIN</div>
        <p className="tagline">Your Web3 Spot Trading Platform</p>
        <div className="cards">
          <div className="card">
            <div className="card-icon">💼</div>
            <div className="card-label">Wallet</div>
          </div>
          <div className="card">
            <div className="card-icon">📈</div>
            <div className="card-label">Trade</div>
          </div>
          <div className="card">
            <div className="card-icon">🔒</div>
            <div className="card-label">Secure</div>
          </div>
          <div className="card">
            <div className="card-icon">⚡</div>
            <div className="card-label">Fast</div>
          </div>
        </div>
        <a className="btn" href="/en/my/wallet/main">Open Wallet</a>
        <p className="footer">MYWEBBIN 2026 — Powered by Web3</p>
      </div>
    </>
  )
}
