import { useState } from "react";
import classes from "./dropdownMenu.module.css";

interface DropdownItem{
    index: number,
    value: string
}


export default function DropdownMenu({menuItems, onChangeCb} : {menuItems:string[], onChangeCb: (param: string) => void})
{
    const items: DropdownItem[] = menuItems.map( (item: string, index: number) => (
        {index: index, value: item} as DropdownItem
    ));
    const [open, setOpen] = useState(false);
    const [selected, updateSelected] = useState(items[0].value);


    const handleOpen = () => {
        setOpen(!open);
    }

    const handleClick = (index: number) => {
        console.log("Handle click with index: " + index.toString());
        updateSelected(items[index].value);
        onChangeCb(items[index].value);
        setOpen(false);
    }

    return(
        <div className={classes.wrapper}>
            <button className={classes.selected} onClick={handleOpen}>{selected}</button>
            {open? (
                <ul className={classes.menu}>
                    {menuItems.map((menuItem, index) => (
                        <li key={index}>
                            <button className={classes.menuItem} onClick={() => handleClick(index)}>{menuItem}</button>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}