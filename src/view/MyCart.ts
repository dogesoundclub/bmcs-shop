import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import CartItem from "../component/CartItem";
import Layout from "./Layout";

export default class MyCart implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "MY CART";
        Layout.current.content.append(this.container = el(".my-cart-view",
            el("section",
                el("article",
                    el("h2", "MY CART"),
                    el("hr"),
                    el(".item-list",
                        new CartItem(),
                    ),
                    el("hr"),
                    el("a",
                        el("img", { src: "/images/shared/icn/promotion.svg", alt: "promotion" }),
                        el("p", "프로모션 코드 입력"),
                    ),
                    el(".input-container",
                        el("input", { placeholder: "Enter a promo code" }),
                        el("a", "ENTER")
                    ),
                    el("a",
                        el("img", { src: "/images/shared/icn/memo.svg", alt: "memo" }),
                        el("p", "메모 남기기"),
                    ),
                    el(".input-container",
                        el("input", { placeholder: "Leave a message" }),
                        el("a", "ENTER")
                    ),
                ),
                el("aside",
                    el("h2", "ORDER SUMMARY"),
                    el("hr"),
                    el(".text-container",
                        el("p", "합계"),
                        el("p", "2,000,000 WON"),
                    ),
                    el(".text-container",
                        el("p", "배송비"),
                        el("p", "FREE"),
                    ),
                    el("hr"),
                    el(".text-container",
                        el("p", "TOTAL"),
                        el("h6", "2,000,000 WON"),
                    ),
                    el("a", "CHECK OUT"),
                ),
            ),
            el("form.mailing-form",
                el("section",
                    el(".input-container",
                        el("label", "JOIN OUT MAILING LIST AND NEVER MISS AN UPDATE"),
                        el("input", { placeholder: "Enter your email here*" }),
                    ),
                    el("button", "SUBSCRIBE NOW"),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}