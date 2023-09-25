'use client'

import { useEffect } from "react"
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
    useEffect(() => { Crisp.configure('54fb9d4e-935e-45dd-b1af-c2de8b54e789') }, [])

    return null
}

