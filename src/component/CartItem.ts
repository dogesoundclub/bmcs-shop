import { DomNode, el } from "skydapp-browser";

export default class CartItem extends DomNode {
    constructor() {
        super(".cart-item");
        this.append(
            el(".img-container",
                el("img", { src: "/images/shared/img/goods-mock.png", alt: "goods" }),
            ),
            el(".content",
                el("h6", "1 / 1 BIASED MATE CYCLE SHOP SUITCASE"),
                el("p", "2,000,000 WON"),
                el(".caption-container",
                    el("p", "2,000,000 WON"),
                    el("p", "Size : One Size"),
                    el("p", "Color : White"),
                ),
            ),
            el(".toolbar-container",
                el(".amount-container",
                    el("img", { src: "/images/shared/icn/minus.svg", alt: "minus" }),
                    el("p", "1"),
                    el("img", { src: "/images/shared/icn/add.svg", alt: "add" }),
                ),
                el("img", { src: "/images/shared/icn/close.svg", alt: "close" }),
            ),
        );
    }
}