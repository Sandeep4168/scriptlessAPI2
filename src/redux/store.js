import {configureStore} from "@reduxjs/toolkit"
import HeaderReducer from "./features/headerSlice"


export default configureStore({
    reducer :{
        
        header: HeaderReducer,
    }
})

