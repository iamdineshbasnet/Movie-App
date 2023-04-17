import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from './components/Footer'
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homePageSlice";
function App() {
    const dispatch = useDispatch();
    const url = useSelector((state) => state.home.url);

    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            }
            dispatch(getApiConfiguration(url));
        });
    };
    useEffect(() => {
        fetchApiConfig();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
