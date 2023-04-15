import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {
	const apiTesting = () =>{
		fetchDataFromApi("/movie/popular")
			.then((res)=> {
				console.log(res)
			})
	}
    useEffect(() => {
			apiTesting()

		}, []);

    return <div className="App">App</div>;
}

export default App;
