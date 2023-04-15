import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "./homePageSlice";


const store = configureStore({
    reducer: {
        home: homePageSlice,
    },
});

export default store;
