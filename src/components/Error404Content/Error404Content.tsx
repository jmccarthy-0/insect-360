import classes from './Error404.module.css';

const Error404Content = () => {
    return (
        <div className={`${classes['error-wrapper']}`}>
            <h1 className={`${classes['error-title']}`}>404</h1>
            <p>Page not found.</p>
        </div>
    );
}

export default Error404Content;