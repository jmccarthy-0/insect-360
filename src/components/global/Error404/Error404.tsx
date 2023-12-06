import classes from './Error404.module.css';
import LayoutStyles from '@/routes/Layout.module.css';

const Error404 = () => {
    return (
        <div className={`${LayoutStyles['page-grid']}`}>
            <main className={`${classes['error-wrapper']}`}>
                <h1 className={`${classes['error-title']}`}>404</h1>
                <p className={`${classes['error-descr']}`}>Page not found.</p>
            </main>
        </div>
    );
}

export default Error404;