
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
        console.log(e.target.valueAsNumber);
        setTimelineIndex(e.target.valueAsNumber)
    };

    return <input type="range" step={1} min={min} max={max} value={value} onChange={handleIndexRangeChange}/>
};

export default TimelineScrubber;