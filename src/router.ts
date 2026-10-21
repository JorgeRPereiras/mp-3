import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";

//learned how to use this from Lecture 9, Page 15
const router = createBrowserRouter(
    [{path:"*", Component: Root},]
);

export default router;
