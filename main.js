const button = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    button.textContent = "☀️";
} else {
    button.textContent = "🌙";
}

button.addEventListener("click", (e) => {
    e.preventDefault(); // zapobiega przejściu do "#"

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    if (isDark) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        button.textContent = "🌙";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        button.textContent = "☀️";
    }
});

