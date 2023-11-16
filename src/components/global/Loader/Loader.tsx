import { useEffect } from "react";

import './Loader.css';

const Loader = () => {
    useEffect(() => {
        console.log('Loader Mount')

        return () => {
            console.log('Loader Unmount');
        }
    }, []);
    return (
        <div className="loader">
            <p>Loading Animation Placeholder</p>
        </div>
    );
}

export default Loader;