import { indexHTML } from "./components.js";

const pageName = "Sticky Notes";
const categories = ["coding", "history", "math"];
const notes = {
    coding: [
        "Welcom to Stikcy Notes",
        "This is Coding Note",
    ],
    history: [
        "This is history note"
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