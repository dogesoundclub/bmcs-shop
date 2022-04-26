import { DomNode, el } from "skydapp-browser";
import { View, ViewParams } from "skydapp-common";
import GoodsItem from "../component/GoodsItem";
import Layout from "./Layout";

export default class Home implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = "HOME";
        Layout.current.content.append(this.container = el(".home-view",
            el(".goods-list",
                new GoodsItem(),
            ),
            el(".about-container",
                el("h2", "About Biased Mate Cycle Shop"),
                // el("", "영상자리"),
                el("p", "BMCS는 2021년 7월 9일에 발매된 한국 최초의 제너레이티브 NFT, 도지사운드클럽 메이트의 후속 이야기를 세계관으로 두고 있는 PFP 컬렉션입니다. DSC 운영팀은 최근 국내 최초의 제너레이티브 NFT라는 이유로 큰 인기를 얻게 된 메이트들이 인기에 취해 안일해지자, 이들을 일깨우기 위해 4가지의 극약 처방 NFT(물약으로 알려짐. 원제는 BIAS CARDS(를 에어드랍하였습니다. 물약을 메이트가 마시면 전기감전을 느끼게 되고(Biased) 고속 성장을 하여 어른이 되게 됩니다. 이렇게 어른이 된 메이트를 바이어스라고 부릅니다. 성장한 메이트, 바이어스들이 새로운 모험가들을 위한 자전거를 판매하는 상점 Biased Mate Cycle Shop을 연다는 것으로 BMCS의 이야기가 시작됩니다."),
            ),
            el(".wear-container",
                el("h2", "About Biased Mate Cycle Wear"),
                el("p", "BMCW는 BMCS 커뮤니티의 회원들에 의해 설립되었습니다. 우리는 공식 보어드 에이프 및 그들의 허가된 파생상품의 프린트를 특징으로 하는 한정판과 오픈 에디션 의류 및 상품을 제공할 것입니다. BMCW 스트리트웨어에는 정식 라이선스를 받은 Worged Ape와 파생상품이 포함되어 있습니다. 각각의 한정판 아이템은 10,000개의 검증된 BMCS 멤버의 공식 파생물을 특징으로 하고 있습니다. 각 품목에는 오리지널 BMCS 토큰 아이디/라이선스 넘버와 목 라벨에 인쇄된 블록체인 QR코드도 들어 있다."),
                el(".img-list",
                    el(".img-container",
                        el("img", { src: "/images/shared/img/goods-mock.png", alt: "goods" }),
                    ),
                ),
            ),
            el(".contact-container",
                el("h2", "Contact Biased Mate Cycle Shop"),
                el("form",
                    el(".info-container",
                        el(".input-container",
                            el("label", "NAME"),
                            el("input",),
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
                    el("button", "SUBMIT"),
                ),
                el("form.mailing-form",
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