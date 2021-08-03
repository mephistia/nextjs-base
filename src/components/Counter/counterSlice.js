import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    
    reducers: {
        // handlers de actions
        increment: (state) => {
            // usa biblioteca Immer para escrever código "mutável",
            // mas retorna nova instância do objeto, imutável
            state.value++
        },

        decrement: (state) => {
            state.value--
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
