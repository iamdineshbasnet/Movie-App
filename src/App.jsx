import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homePageSlice";
import Header from "./components/Header";

function App() {
    const dispatch = useDispatch();
    const url = useSelector((state) => state.home.url);
    console.log(url);

    const apiTesting = () => {
        fetchDataFromApi("/movie/popular").then((res) => {
            dispatch(getApiConfiguration(res));
        });
    };
    useEffect(() => {
        apiTesting();
    }, []);

    return (
        <>
            <Header />
        </>
    );
}

export default App;
