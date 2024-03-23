import './button.scss'
import {FC} from "react";

interface ButtonProps {
    text: string,
    mode?: boolean
}

const Button:FC<ButtonProps> = ({text, mode = false}) => {
    return (
        mode ?
            <button className="mode-button">{text}</button>
            :
            <button className="custom-button">{text}</button>

    );
};

export default Button;