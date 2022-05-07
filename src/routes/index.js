import HomePage from "../features/Movie/Page/Home";
import DetailPage from "../features/Movie/Components/DetailPage";
import SeriesMovie from "../features/Movie/Page/SeriesMovie/SeriesMovie";
import MovieTheaters from "../features/Movie/Page/MovieTheaters/MovieTheaters";
import Cartoon from "../features/Movie/Page/Cartoon/Cartoon";
import OddMovie from "../features/Movie/Page/OddMovie/OddMovie";
import Search from "../features/Movie/Page/Search/Search";
import OthersMovie from "../features/Movie/Components/OthersMovie";

export const publicRoutes = [
    { path:"/", component:HomePage},
    { path:"phimbo", component:SeriesMovie},
    { path:"phimchieurap", component:MovieTheaters},
    { path:"phimhoathinh", component:Cartoon},
    { path:"phimle", component:OddMovie},
    { path:"search", component:Search},
    { path:'/search/:id', component:OthersMovie},
    { path:"detail/:key/:detailId", component:DetailPage}

];


