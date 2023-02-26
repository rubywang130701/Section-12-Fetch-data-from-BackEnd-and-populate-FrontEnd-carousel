import { Carousel } from "./components/Carousel";
import { ExploreTopBooks } from "./components/ExploerTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraeyServices";

// TODO The HomePage component appears to be a functional component that renders multiple other components. Specifically, it renders the ExploreTopBooks, Carousel, Heros, and LibraryServices components.
export const HomePage =() =>{
    return(
    <>
        <ExploreTopBooks/>
        <Carousel/>
        <Heros/>
        <LibraryServices/>
        </>
    );
}