const Loader = () => {
    return (
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black z-20'>
            <span className='w-12 h-12 border-4 border-primary-dark border-r-accent-dark rounded-full animate-spin pointer-events-none'></span>
        </div>
    );
}

export default Loader;