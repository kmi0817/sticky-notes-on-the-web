import { indexHTML } from "./components.js";

const pageName = "Sticky Notes";
const categories = ["coding", "history", "math"];
const notes = {
    coding: [
        "Welcom to Stikcy Notes",
        "This is Coding Note",
    ],
    history: [
        "This is history note",
        `고구려의 건국신화는 이후 주몽이라 불리는 군장을 중심으로 한 부여계 지배층이 이주해 와 고구려의 계루부를 형성하였고 기존의 토착세력인 소노부를 대체하여 고구려 연맹왕국의 주도권을 잡은 것으로 해석된다. 고구려는 땅이 협소하고 산악지역이 많아 주변에 대한 전쟁을 자주하였다. 주변의 여러 소국을 복속시키며 확장하던 고구려는 부여를 흡수하여 동아시아의 강자가 되었다.`
    ],
    math: [
        "This is math note"
    ]
};

const body = document.querySelector("body");
body.insertAdjacentHTML("afterbegin", indexHTML(
    pageName,
    categories,
    notes
));