import classNames from "classnames";

function Skeleton({ times, className }) {
    const outerClassNames = classNames(
        // "skeleton",
        "relative",
        "overflow-hidden",
        "bg-gray-200",
        "rounded",
        "mb-2.5",
        className
    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'insest-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200',
        className
    );


    const boxes = Array(times).fill(0).map((_, index) => (
        <div key={index} className={outerClassNames}>
            <div className={innerClassNames} />
        </div>
    ));

    return boxes
}

export default Skeleton;