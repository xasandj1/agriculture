import React from 'react'

const secondaryButton = 'py-7 px-[39px] rounded-2xl text-xl font-bold flex items-center gap-3 bg-dark text-white';
const primaryButton = 'py-7 px-[39px] rounded-2xl text-xl font-bold flex items-center gap-3 bg-primary text-dark';

const Button = ({ children, classes, type, disable, click }) => {
    return (
        <button className={classes} type={type} disabled={disable} onClick={click}>{children}</button>
    )
}
export default Button
export { primaryButton, secondaryButton }