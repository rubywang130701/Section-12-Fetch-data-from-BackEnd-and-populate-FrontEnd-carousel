// TODO The SpinnerLoading component is a React functional component that returns a spinner animation to indicate that the page is loading. It takes no props and simply returns a container div with a height of 550 pixels and a centered spinner animation. The spinner animation is implemented using the Bootstrap spinner-border class, and its color is set to primary. The visually-hidden class is used to hide the text "Loading..." from screen readers.
export const SpinnerLoading = () => {
    return (
        <div className='container m-5 d-flex justify-content-center' 
            style={{ height: 550 }}>
                <div className='spinner-border text-primary' role='status'>
                    <span className='visually-hidden'>
                        Loading...
                    </span>
                </div>
        </div>
    );
}