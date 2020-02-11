import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = forwardRef((props, ref) => {
    const {
        children,
        className,
        appearance,
        variant,
        disabled,
        startIcon: startIconProp,
        endIcon: endIconProp,
        block,
        size,
        type,
        loading,
        onClick,
        ...other
    } = props;

    const startIcon = startIconProp && <span className={`startIcon ${size}`}>{startIconProp}</span>
    const endIcon = endIconProp && <span className={`endIcon ${size}`}>{endIconProp}</span>

    const classes = [className];
    classes.push(`${variant}_${disabled ? 'disabled' : appearance}`);
    classes.push(block && 'block');
    classes.push((disabled || loading) && 'no-pointer-events');

    const evtHandler = (handler) => {
        if(disabled || loading) return;
        return handler();
    };

    return <button
        ref={ref}
        className={classes.filter(Boolean).join(' ')}
        type={type}
        onClick={() => evtHandler(onClick)}
        {...other}
    >
        {
            loading 
            ?
            'Loading...'
            :
            <>{startIcon} {children} {endIcon}</>
        }
    </button>
});


Button.defaultProps = {
    className: 'button',
    appearance: 'primary',
    variant: 'contained',
    disabled: false,
    startIcon: null,
    endIcon: null,
    block: false,
    size: 'medium',
    type: 'button',
    onClick: () => {},
    loading: false,
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    appearance: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    disabled: PropTypes.bool,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    block: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.bool,
};

export default Button;