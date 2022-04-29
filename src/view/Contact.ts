import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import Layout from "./Layout";

export default class Contact implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "CONTACT";
        Layout.current.content.append(this.container = el(".contact-view",
            el("section",
                el("h2", "CONTACT"),
                el("p", "team@biasedmatecycle.shop"),
                el("form",
                    el(".info-container",
                        el(".input-container",
                            el("label", "NAME"),
                            el("input",), ``
                        ),
                        el(".input-container",
                            el("label", "EMAIL"),
                            el("input",),
                        ),
                    ),
                    el(".input-container",
                        el("label", "SUBJECT"),
                        el("input",),
                    ),
                    el(".input-container",
                        el("label", "LEAVE US A MESSAGE..."),
                        el("input",),
                    ),
                    el(".button-container",
                        el("button", "SUBMIT"),
                    ),
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