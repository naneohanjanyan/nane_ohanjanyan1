import "./Button.css"

export const Button = ({ onClick, children }) => {
    return (
        <button className="buttonComponent" onClick={onClick}>{children}</button>
    );
}

export default Button;