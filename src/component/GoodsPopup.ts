import { DomNode, el, Popup } from "skydapp-browser";

export default class GoodsPopup extends Popup {
    public content: DomNode;

    constructor(imgSrc?: string, title?: string, price?: number, sku?: string) {
        super(".popup-background");
        this.append(
            this.content = el(".goods-popup",
                el(".img-container",
                    el("img", { src: imgSrc, alt: title }),
                ),
                el(".content",
                    el("h6", title),
                    el("p.price", `${price} WON`),
                    el("span.sku", `SKU: ${sku}`),
                    el(".input-container",
                        el("label", "SIZE"),
                        el("input"),
                    ),
                    el(".input-container",
                        el("label", "COLOR"),
                        el("input"),
                    ),
                    el(".input-container",
                        el("label", "QUANTITY"),
                        el("input"),
                    ),
                    el("a.add", "ADD TO CART"),
                    el("a.more", "View More Details"),
                ),
            ),
        );
    }
}