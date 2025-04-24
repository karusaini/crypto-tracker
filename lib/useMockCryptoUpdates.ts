// lib/useMockCryptoUpdates.ts
'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { bulkUpdateAssets } from '@/lib/cryptoSlice'

function getRandomDelta() {
  return (Math.random() - 0.5) * 2 // 
}

export const useMockCryptoUpdates = () => {
  const dispatch = useAppDispatch()
  const assets = useAppSelector(state => state.crypto.assets)

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = assets.map(asset => {
        const delta = 1 + getRandomDelta() / 100

        const newPrice = asset.price * delta
        const change1h = asset.change1h + getRandomDelta()
        const change24h = asset.change24h + getRandomDelta()
        const change7d = asset.change7d + getRandomDelta()
        const volume24h = asset.volume24h * (1 + getRandomDelta() / 10)

        return {
          ...asset,
          price: Number(newPrice.toFixed(2)),
          change1h: Number(change1h.toFixed(2)),
          change24h: Number(change24h.toFixed(2)),
          change7d: Number(change7d.toFixed(2)),
          volume24h: Math.floor(volume24h),
        }
      })

      dispatch(bulkUpdateAssets(updated))
    }, 2000)

    return () => clearInterval(interval)
  }, [assets, dispatch])
}
