import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../Slice/Slice" 

const Store = configureStore({
    reducer : {
        slice1 : sliceReducer
    }
})

export default Store;