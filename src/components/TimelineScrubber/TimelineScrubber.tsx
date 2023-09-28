import './TimelineScrubber.css';

interface TimelineScrubberProps {
    min: number;
    max: number;
    value: number;
    setTimelineIndex: (value: number | ((prevVar: number) => number)) => void;
}

const TimelineScrubber = ({ min, max, value, setTimelineIndex }: TimelineScrubberProps) => {
    /**
     * Update image sequence using range slider
     * @param e 
     */
    const handleIndexRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimelineIndex(e.target.valueAsNumber)
    };

    return <input className="timeline-scrubber" type="range" step={1} min={min} max={max} value={value} onChange={handleIndexRangeChange} aria-label='Set current image index'/>
};

export default TimelineScrubber;