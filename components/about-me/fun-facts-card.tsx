'use client'
import Image from 'next/image'

const FunFactsCard = ({ title, description, image, color, i }) => {
    return (
        <div className="card-container" style={{ top: `calc(${i * 50}px)` }}>
            <div
                className="card"
                style={{
                    backgroundColor: color,
                }}
            >
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default FunFactsCard
