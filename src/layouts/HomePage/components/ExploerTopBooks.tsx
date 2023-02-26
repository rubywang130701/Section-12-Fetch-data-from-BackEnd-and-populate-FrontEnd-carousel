// TODO The ExploreTopBooks component appears to be a functional component that returns a JSX element. It contains a div with the classes p-5 mb-4 bg-dark header, which has a child div with the classes container-fluid py-5 text-white d-flex justify-content-center align-items-center. Inside this inner div, there is a h1 element with the class display-5 fw-bold and text "Find your next adventure", a p element with the class col-md-8 fs-4 and text "Where would you like to go next?", and a a element with the classes btn main-color btn-lg text-white, text "Explore top books", and a href attribute set to "#".
//  This component is likely meant to be used as a section header for a page, encouraging the user to explore the top books available.
export const ExploreTopBooks =()=>{
    return(
        <div className='p-5 mb-4 bg-dark header'>
            <div className='container-fluid py-5 text-white d-flex justify-content-center align-items-center'>
                <div>
                    <h1 className='display-5 fw-bold'>Find your next adventure</h1>
                    <p className='col-md-8 fs-4'>Where would you like to go newt?</p>
                    <a type='button' className='btn main-color btn-lg text-white' href='#'>
                        Explore top books
                    </a>
                </div>
            </div>
        </div>
    );
}