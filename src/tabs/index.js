const tabTitles = Array.from(document.querySelectorAll(".tab_titles>button"));
const tabContents = Array.from(document.querySelectorAll(".tab_contents>div"));

function toggleTabContent(currentIndex) {
    tabContents.forEach((item, index) => {
        const isActive = index === currentIndex;
        const currentTitle = tabTitles[index];

        if (currentTitle) {
            currentTitle.classList.toggle("active", isActive);
        }

        item.classList.toggle("active", isActive);
    });
}

function onClickTabTitle(event) {
    const button = event.target;
    const buttonIndex = tabTitles.indexOf(button);

    toggleTabContent(buttonIndex);
};

function initializeTabs() {
    const currentTabIndexDefault = 0;

    tabTitles.forEach((titleButton) => {
        titleButton.addEventListener("click", onClickTabTitle);
    });

    toggleTabContent(currentTabIndexDefault)
}

initializeTabs();