import classes from './Error404.module.css';

const Error404 = () => {
    return (
        <div className='grid w-[95%] min-h-dvh mx-auto grid-rows-max-1fr'>
            <main className={`${classes['error-wrapper']}`}>
                <h1 className={`${classes['error-title']}`}>404</h1>
                <p className={`${classes['error-descr']}`}>Page not found.</p>
            </main>
        </div>
    );
}

export default Error404;