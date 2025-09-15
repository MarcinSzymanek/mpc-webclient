import classes from "./buttonStyles.module.css"

export default function OutOfStockButton()
{
    return(
        <button className={classes.outOfStockButton} disabled={true}>
            Out of stock
        </button>
    )
}
