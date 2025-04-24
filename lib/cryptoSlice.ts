// redux/cryptoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { mockAssets } from '@/lib/mockData'

export type Asset = typeof mockAssets[number]

interface CryptoState {
  assets: Asset[]
}

const initialState: CryptoState = {
  assets: mockAssets,
}

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset(state, action: PayloadAction<Asset>) {
      const index = state.assets.findIndex(a => a.id === action.payload.id)
      if (index !== -1) {
        state.assets[index] = action.payload
      }
    },
    bulkUpdateAssets(state, action: PayloadAction<Asset[]>) {
      state.assets = action.payload
    },
  },
})

export const { updateAsset, bulkUpdateAssets } = cryptoSlice.actions
export default cryptoSlice.reducer
