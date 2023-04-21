import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homePageSlice";

import Header from "./components/Header";
import Footer from './components/Footer'
import Home from "./pages/home";
import DetailsPage from './pages/DetailsPage'
import SearchMovie from './pages/SearchMovie'
import Explore from "./pages/Explore";
import PageNotFound from  './pages/PageNotFound'
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
                    <Route path="/:mediaType/:id" element={<DetailsPage />} />
                    <Route path="/search/:query" element={<SearchMovie />} />
                    <Route path="/explore/:mediaType" element={<Explore />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
