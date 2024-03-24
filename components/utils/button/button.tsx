import './button.scss'
import {FC} from "react";

interface ButtonProps {
    text: string,
    mode?: boolean,
    classNames?: string
}

const Button:FC<ButtonProps> = ({text, mode = false, classNames}) => {
    return (
        mode ?
            <button className={`mode-button ${classNames}`}>{text}</button>
            :
            <button className={`custom-button ${classNames}`}>{text}</button>

    );
};

export default Button;