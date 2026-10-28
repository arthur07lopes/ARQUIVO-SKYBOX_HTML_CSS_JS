"use strict";

const toggleButton = document.querySelector("#toggle-button");
const toggleLabel = document.querySelector("#toggle-label");
const archiveContent = document.querySelector("#archive-content");

function toggleArchiveVisibility() {
    const shouldRevealContent = archiveContent.hidden;

    archiveContent.hidden = !shouldRevealContent;
    toggleButton.setAttribute("aria-expanded", String(shouldRevealContent));
    toggleLabel.textContent = shouldRevealContent
        ? "OCULTAR REGISTRO"
        : "REVELAR REGISTRO";
}

toggleButton.addEventListener("click", toggleArchiveVisibility);
