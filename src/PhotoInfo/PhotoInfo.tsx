import classes from './PhotoInfo.module.css';

const PhotoInfo = () => {
    return (
        <div className={classes['photo-info']}>
            <p>All photographs are public domain, feel free to download and use as you wish.</p>
            <p>
                <strong>Photography Information:</strong> Canon Mark II 5D, Zerene Stacker, Stackshot Sled, 65mm Canon MP-E 1-5X macro lens, Twin Macro Flash in Styrofoam Cooler, F5.0, ISO 100, Shutter Speed 200
            </p>
        </div>
    )
}

export default PhotoInfo;