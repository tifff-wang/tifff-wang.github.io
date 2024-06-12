"use client"

import { useRouter } from 'next/navigation'
import { FaCircleArrowLeft } from 'react-icons/fa6'

function BackButton() {
  const router = useRouter()
    return (
        <aside>
            <div
                onClick={() => router.back()}
                className="back-button"
            >
                <FaCircleArrowLeft size={30} />
            </div>
        </aside>
    )
}

export default BackButton
