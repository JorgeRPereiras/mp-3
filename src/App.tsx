import {RouterProvider} from "react-router-dom";
import router from "./router.ts";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer";

export default function App() {

    return (
        <>
            <Header/>
            <RouterProvider router={router}/>
            <Footer/>
        </>
    )
}