export const indexHTML = (pageName, categories, notes) => {
    return /*html*/`
    ${headerHTML(pageName, categories)}
    ${navHTML(categories)}
    ${mainHTML(categories, notes)}
    ${footerHTML()}
    `;
}

const headerHTML = (pageName) => {
    return /*html*/ `
    <header class="width-70">
        <a href="/" class="font-size-32">${pageName}</a>
    </header>
    `;
}

const navHTML = (categories) => {
    let html = `<nav class="width-70">`
    for (const category of categories) {
        html += `<a href="#${category}">${category}</a>`;
    }
    html += `</nav>`;

    return html;
}

const mainHTML = (categories, notes) => {
    let html = `<main class="width-70">`
    for (const category of categories) {
        html += `
        <section class="truncate-container">
            ${createNotesByCategory(notes[category])}
        </section>`;
    }
    html += `</main>`;

    return html;
}

const createNotesByCategory = (notes) => {
    return notes.map(note => `<p class="truncate note" title="${note}">${note}</p>`).join("");
}

const footerHTML = () => {
    return /*html*/`
    <footer class="width-70">
        <p class="font-size-8">Created by kmi0817</p>
        <p class="font-size-8">2023.09</p>
    </footer>
    `;
}