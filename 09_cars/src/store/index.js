import { configureStore } from "@reduxjs/toolkit";
import formReducer, { changeCost, changeName } from "./slices/formSlice";
import carReducer, { changeSearchTerm, removeCar } from "./slices/carSlice";
import { addCar } from "./actions";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carReducer,
    },
});

export { store, addCar, changeCost, changeName, changeSearchTerm, removeCar };