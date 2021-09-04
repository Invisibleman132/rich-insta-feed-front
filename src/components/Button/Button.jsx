import classNames from "classnames";
import styles from "./button.module.css"

export const Button = ({children,color}) => {
    
    const handleClick=()=>{
console.log("Hello!");
    }
    const companentClassName = classNames(
        {
            [styles.colorPurple ]: color ==="purple",
            [styles.colorWhite ]: color ==="white",
        }
    )
    return (
        <button className={companentClassName} onClick={handleClick}>
            {children}
        </button>
    )
}
