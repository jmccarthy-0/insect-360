const Error404 = () => {
    return (
        <div className='grid w-[95%] min-h-dvh mx-auto grid-rows-max-1fr'>
            <main className='text-center w-full h-dvh grid place-content-center bg-primary-light'>
                <h1 className='text-primary-dark text-5xl md:text-6xl lg:text-8xl mb-4'>404</h1>
                <p className='text-primary-dark'>Page not found.</p>
            </main>
        </div>
    );
}

export default Error404;