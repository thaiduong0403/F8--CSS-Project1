// document.querySelector(".navbar-mb-icon").addEventListener("click", () => {
//     document.querySelector(".navbar-mb").classList.add("Open");
// });

function addOpen(class1, class2) {
    document.querySelector(class1).addEventListener("click", () => {
        document.querySelector(class2).classList.add("Open");
    });
}

function removeOpen(class1, class2) {
    document.querySelector(class1).addEventListener("click", () => {
        document.querySelector(class2).classList.remove("Open");
    });
}

function addClose(class1, class2) {
    document.querySelector(class1).addEventListener("click", () => {
        document.querySelector(class2).classList.add("Close");
    });
}

function removeClose(class1, class2) {
    document.querySelector(class1).addEventListener("click", () => {
        document.querySelector(class2).classList.remove("Close");
    });
}

// Nhan phim nav-icon
addOpen(".navbar-mb-icon", ".navbar-mb");
addOpen(".navbar-mb-icon", ".navbar-mb-overlay");
addClose(".navbar-mb-icon", ".action-mb");
addClose(".navbar-mb-icon", ".action-mb-icon");
// Nhan phim nav-close
removeOpen(".navbar-mb_close", ".navbar-mb");
removeOpen(".navbar-mb_close", ".navbar-mb-overlay");
removeClose(".navbar-mb_close", ".action-mb");
removeClose(".navbar-mb_close", ".action-mb-icon");

// Nhan phim action-icon
addOpen(".action-mb-icon", ".action-mb");
addOpen(".action-mb-icon", ".navbar-mb-overlay");
addClose(".action-mb-icon", ".navbar-mb");
addClose(".action-mb-icon", ".navbar-mb-icon");
// Nhan phim action-close
removeOpen(".action-mb_close", ".action-mb");
removeOpen(".action-mb_close", ".navbar-mb-overlay");
removeClose(".action-mb_close", ".navbar-mb");
removeClose(".action-mb_close", ".navbar-mb-icon");
