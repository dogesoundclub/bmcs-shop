import { BodyNode, BrowserInfo, DomNode, el, msg } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import MobileMenu from "../component/shared/menu/MobileMenu";
import PCMenu from "../component/shared/menu/PCMenu";
import ViewUtil from "./ViewUtil";


export default class Layout implements View {

    public static current: Layout;
    private container: DomNode;
    public content: DomNode;

    constructor() {
        Layout.current = this;
        let select: DomNode<HTMLSelectElement>;
        BodyNode.append(this.container = el(".layout",
            el("header",
                el(".top-nav",
                    el("a",
                        el("img.logo", { src: "/images/shared/logo/BIASED-MATE-CYCLE-SHOP.png", alt: "BIASED-MATE-CYCLE-SHOP" }),
                    ),
                    el("a.cart-container",
                        el("img", { src: "/images/shared/icn/cart.svg", alt: "cart" })
                    ),
                ),
                el(".bottom-nav",
                    el("a", "ABOUT", { click: () => { ViewUtil.go("/about") } }),
                    el("a", "FAQ", { click: () => { ViewUtil.go("/faq") } }),
                    el("a", "CONTACT", { click: () => { ViewUtil.go("/contact") } }),
                ),
            ),
            el("main",
                this.content = el(".content"),
            ),
            el("footer",
                el(".sidebar",
                    el(".content",
                        el(".term",
                            // el("a", "서비스이용약관"),
                            // el("span", "|"),
                            // el("a", "개인정보처리방침"),
                            // el("span", "|"),
                            // el("a", "회사소개"),
                        ),
                        el(".social",
                            el("img", { src: "/images/shared/icn/linktree.svg" }),
                            el("a", "링크트리 바로가기", {
                                href: "https://linktr.ee/dogesoundclub",
                                target: "_blank",
                            }),
                        ),
                    ),
                ),
                el(".provider",
                    el("img", { src: "/images/shared/logo/dsc.svg" }),
                    el("p", msg("FOOTER_DESC")),
                    el("p", "Copyright @2021 DSCLabel Inc. ALL RIGHTS RESERVED.")
                ),
            ),
        ));
    }

    public set title(title: string) {
        document.title = `${title} | BIASED MATE CYCLE SHOP`;
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
