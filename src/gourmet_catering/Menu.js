import React from "react";
import imgMenu from './img/OurMenu.png';

function Menu() {
    return (
        <div className={"container pt-4"}>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"text-center"}>
                        <h2 className={"mt-3 mb-5"}>Our Menu</h2>
                    </div>

                    <h5 className={"my-3"}>Bread Basket</h5>
                    <p className={"mb-5"}>Assortment of fresh baked fruit breads and muffins 5.50</p>

                    <h5 className={"my-3"}>Honey Almond Granola with Fruits</h5>
                    <p className={"mb-5"}>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

                    <h5 className={"my-3"}>Belgian Waffle</h5>
                    <p className={"mb-5"}>Vanilla flavored batter with malted flour 7.50</p>

                    <h5 className={"my-3"}>Scrambled eggs</h5>
                    <p className={"mb-5"}>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>

                    <h5 className={"my-3"}>Blueberry Pancakes</h5>
                    <p className={"mb-5"}>With syrup, butter and lots of berries 8.50</p>
                </div>
                <div className={"col"}>
                    <img src={imgMenu} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Menu;