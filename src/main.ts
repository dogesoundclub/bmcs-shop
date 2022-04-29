import { BrowserInfo, msg } from "skydapp-browser";
import { SkyRouter } from "skydapp-common";
import superagent from "superagent";
import Contact from "./view/Contact";
import Faq from "./view/Faq";
import Home from "./view/Home";
import Layout from "./view/Layout";
import MyCart from "./view/MyCart";

(async () => {
    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("**", Layout);
    SkyRouter.route("", Home);
    SkyRouter.route("my-cart", MyCart);
    SkyRouter.route("contact", Contact);
    SkyRouter.route("faq", Faq);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();