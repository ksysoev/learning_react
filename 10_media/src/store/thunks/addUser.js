import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from '@faker-js/faker'

const addUser = createAsyncThunk("users/add", async () => {
    const response = await axios.post("http://localhost:3001/users", {
        name: faker.name.fullName(),
    });

    await pause(1000);

    return response.data;
})

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { addUser }