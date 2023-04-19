import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
import { getApiConfiguration } from "./store/homePageSlice";
import Footer from "./components/Footer";
=======
import { getApiConfiguration, getGenres } from "./store/homePageSlice";
>>>>>>> Stashed changes
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
        genresCall()
    }, []);

    const genresCall = async () =>{
        let promises = []
        let endpoints = ["tv", 'movie']
        let allGenres = {}

        endpoints.forEach((url)=>{
            promises.push(fetchDataFromApi(`/genre/${url}/list`))
        })

        const data = await Promise.all(promises)
        data.map(({genres})=>{
            return genres.map((item)=>(allGenres[item.id] = item))
        })

        dispatch(getGenres(allGenres))
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
