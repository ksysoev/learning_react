import { createSlice, nanoid } from "@reduxjs/toolkit";
import { addCar } from "../actions";

const carSlice = createSlice({
    name: "car",
    initialState: {
        searchTerm: "",
        list: [],
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        removeCar: (state, action) => {
            state.list = state.list.filter((car) => car.id !== action.payload);
        },
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.list.push({ ...action.payload, id: nanoid() });
        });
    }

});

export default carSlice.reducer;
export const { removeCar, changeSearchTerm } = carSlice.actions;