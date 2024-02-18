import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { News } from "../Pages/News";
import { PageBlock } from "../Pages/PageBlock";
import { Projects } from "../Pages/Projects";
import { ShopePage } from "../Pages/ShopPage";
import { NotFound } from "../Pages/NotFound";
import { SingleShop } from "../Pages/SingleShop";


export const main_pages = [
    {
        component: <Home />
    },
    {
        component: <About />,
        path: "/about"
    },
    {
        component: <PageBlock />,
        path: "/pages"
    },
    {
        component: <ShopePage />,
        path: "/shop",
    },
    
    {
        component: <Projects />,
        path: "/project"
    },
    {
        component: <News />,
        path: "/news"
    },
    {
        component: <NotFound />,
        path: "*"
    },
];
