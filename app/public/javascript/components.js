export const indexHTML = (pageName, categories, notes) => {
    return /*html*/`
    ${headerHTML(pageName, categories)}
    ${mainHTML(categories, notes)}
    ${footerHTML()}
    `;
}

const headerHTML = (pageName, categories) => {
    return /*html*/ `
    <header>
        <a href="/">${pageName}</a>
        ${navHTML(categories)}
    </header>
    `;
}

const navHTML = (categories) => {
    let html = `<nav>`
    for (const category of categories) {
        html += `<a href="#${category}">${category}</a>`;
    }
    html += `</nav>`;

    return html;
}

const mainHTML = (categories, notes) => {
    let html = `<main>`
    for (const category of categories) {
        html += `
        <section>
            ${createNotesByCategory(notes[category])}
        </section>`;
    }
    html += `</main>`;

    return html;
}

const createNotesByCategory = (notes) => {
    return notes.map(note => `<p title="${note}">${note}</p>`).join("");
}

const footerHTML = () => {
    return /*html*/`
    <footer>
        <p>Created by kmi0817</p>
        <p>2023.09</p>
    </footer>
    `;
}