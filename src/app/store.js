import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Counter/counterSlice'

// atualizar com os reducers do app
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})