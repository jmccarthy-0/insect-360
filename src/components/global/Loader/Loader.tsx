import LoaderStyles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={`${LoaderStyles['loader']}`}>
            <span className={`${LoaderStyles['spinner']}`}></span>
        </div>
    );
}

export default Loader;