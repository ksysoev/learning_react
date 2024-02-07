import classNames from "classnames";


function Button({
    children,
    primary,
    secondary,
    warning,
    danger,
    success,
    outline,
    rounded,
    className,
    ...rest
}) {
    const classes = classNames('flex items-center px-3 py-1.5 border', className, {
        'border-blue-500 bg-blue-500': primary,
        'border-gray-900 bg-gray-900': secondary,
        'border-green-500 bg-green-500': success,
        'border-yellow-400 bg-yellow-400': warning,
        'border-red-500 bg-red-500': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-white': !outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger
    });
    return (
        <button {...rest} className={classes}>{children}</button>
    );
}

Button.propTypes = {
    checkVariationValue: function ({ primary, secondary, warning, danger, success }) {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!danger) + Number(!!success);

        if (count > 1) {
            return new Error(
                `You can't use more than one variation at the same time`
            );
        }
    }
};



export default Button;