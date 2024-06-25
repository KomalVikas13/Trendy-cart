import { createSlice } from "@reduxjs/toolkit"

const Slice = createSlice({
    name : "slice1",
    initialState : {
        filter : {
            "categoryDropdown" : "",
            "rating" : "",
            "pricesCategoryMini" : "",
            "pricesCategoryMaxi" : ""
        }
    },
    reducers : {
        category_dropdown : (state,action)=>{
            state.filter.categoryDropdown = action.payload;
        },
        category_rating : (state,action)=>{
            state.filter.category_rating = action.payload;
        },
        category_prices_mini : (state,action)=>{
            state.filter.pricesCategoryMini = action.payload;
        },
        category_prices_maxi : (state,action)=>{
            state.filter.pricesCategoryMaxi = action.payload;
        }
    }
})

export const {category_dropdown,category_rating,category_prices_mini,category_prices_maxi} = Slice.actions;
export default Slice.reducer;