import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import CollapsibleItem from "../component/CollapsibleItem";
import Layout from "./Layout";

export default class Faq implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "FAQ";
        Layout.current.content.append(this.container = el(".faq-view",
            el("section",
                el(".search-container",
                    el("input", { placeholder: "자주 묻는 질문을 검색해보세요!" }),
                    el("img", { src: "/images/shared/icn/search.svg", alt: "search" }),
                ),
                new CollapsibleItem("1", "11"),
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