import { DomNode, el } from "skydapp-browser";
import GoodsPopup from "./GoodsPopup";

export default class GoodsItem extends DomNode {
    constructor() {
        super(".goods-item");
        this.append(
            el(".img-container",
                el("img", { src: "/images/shared/img/goods-mock.png", alt: "goods" }),
            ),
            el("h6", "1 / 1 BIASED MATE CYCLE SHOP SUITCASE"),
            el("p", "2,000,000 WON"),
            el("a", "ADD TO CART"),
        );
        this.onDom("click", () => new GoodsPopup("/images/shared/img/goods-mock.png", "1 / 1 BIASED MATE CYCLE SHOP SUITCASE", 1000000));
    }
}