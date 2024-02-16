import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
    await axios.delete(`http://localhost:3001/users/${user.id}`);

    await pause(1000);

    return user;
})

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export { removeUser }