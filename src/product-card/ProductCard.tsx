import classes from "./ProductCard.module.css"
import type { ProductData } from "../models/Product";
import DropdownMenu from "../dropdown/DropdownMenu";
import AddToCartButton from "../buttons/AddToCartButton";
import OutOfStockButton from "../buttons/OutOfStockButton";

import { useState } from "react";


export type ProductProps = {
    productData: ProductData
}

export default function ProductCard({ productData } : ProductProps)
{
    const [variant, setVariant] = useState("Variant A");

    const renderButton = () => {
        if (productData.quantity > 0) {
            return(
                <>
                    <AddToCartButton/>
                </>
            )
        }
        else{
            return (
                <>
                    <OutOfStockButton/>
                </>
            )
        }

    }

    const onChangeCallback = (param: string) => {
        setVariant(param);
        console.log("Changing variant to: " + variant);
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.imgWrapper}>
                <img src={productData.img_url} alt="Product image"></img>
                <div className={classes.dropdownWrapper}>
                    <DropdownMenu menuItems={["Variant A", "Variant B", "Variant C"]} onChangeCb={onChangeCallback}/>
                </div>
            </div>
            <div className={classes.details}>
                <span className={classes.name}>{productData.name}</span>
                <span className={classes.price}>{productData.price}$</span>
                {renderButton()}
            </div>
        </div>
    )
}