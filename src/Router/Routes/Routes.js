import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import AllServies from "../../Pages/Home/Services/AllServies";
import CardDetailsView from "../../Pages/Home/Services/CardDetailsView";
import ServiceCardView from "../../Pages/Home/Services/ServiceCardView";
import Login from "../../Pages/Login/Login";
import OfferBook from "../../Pages/OfferBook/OfferBook";
import Register from "../../Pages/Register/Register";
import Update from "../../Pages/Update/Update";
import Reviews from "../../Review/Reviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
//8.create route, have main route and some children route
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/servicecardview',
                element:<ServiceCardView></ServiceCardView>,
                loader: () => fetch('https://assign11-crud-onlinebookstore-server.vercel.app/services')
                
            },
            {
                path:'/allservices',
                element:<AllServies></AllServies>
            },

            {
                path:'/carddetailsview/:id',
                element:<CardDetailsView></CardDetailsView>,
                loader: ({params}) => fetch(`https://assign11-crud-onlinebookstore-server.vercel.app/services/${params.id}`)
                
            },
            {
                path:'/reviews',
                element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/update/:id',
                element:<Update></Update>
            },
            {
                path:'/blog',
                element:<Blog></Blog>

            },
            {
                path:'/offerbook',
                element:<OfferBook></OfferBook>
            }
            
        ]
    }
]);

export default router;