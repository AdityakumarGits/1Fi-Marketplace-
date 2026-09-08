export function LoadingState(){return <div className="state-box"><div className="spinner"/><p>Loading marketplace...</p></div>}
export function ErrorState({message="Please try again."}){return <div className="state-box"><strong>Unable to load marketplace</strong><p>{message}</p></div>}
export function FloatingChat(){return <button className="floating-chat" aria-label="Chat">◔</button>}
