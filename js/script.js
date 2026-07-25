const typed = new Typed("#typing", {

    strings: [
        "Frontend Developer",
        "Laravel Developer",
        "UI Designer",
        "Web Enthusiast"
    ],

    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
 
});

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(8,17,32,.95)";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    } else {
        nav.style.background = "rgba(0,0,0,.18)";
        nav.style.boxShadow = "none";
    }
});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    section.scrollIntoView({
        behavior: "smooth"
    });
}

const skills = {
    html: {
        title: "HTML",
        icon: "fa-brands fa-html5",
        description: "HTML digunakan untuk membuat struktur dasar sebuah website."
    },

    css: {
        title: "CSS",
        icon: "fa-brands fa-css3-alt",
        description: "CSS digunakan untuk mengatur tampilan, warna, layout, dan desain website."
    },

    js: {
        title: "JavaScript",
        icon: "fa-brands fa-js",
        description: "JavaScript digunakan untuk membuat website menjadi lebih interaktif dan dinamis."
    },

    php: {
        title: "PHP",
        icon: "fa-brands fa-php",
        description: "PHP adalah bahasa pemrograman server-side yang digunakan untuk membuat website dinamis dan menghubungkan website dengan database."
    },

    laravel: {
        title: "Laravel",
        icon: "fa-brands fa-laravel",
        description: "Laravel adalah framework PHP yang digunakan untuk membangun aplikasi web dengan struktur yang lebih rapi dan terorganisir."
    },

    mysql: {
        title: "MySQL",
        icon: "fa-solid fa-database",
        description: "MySQL adalah sistem manajemen database yang digunakan untuk menyimpan dan mengelola data."
    }
};

function showSkill(skillName) {
    const skill = skills[skillName];
    document.getElementById("skillTitle").innerText = skill.title;
    document.getElementById("skillDesc").innerText = skill.description;
    document.getElementById("skillIcon").className = skill.icon;
    document.getElementById("skillModal").style.display = "flex";
}

function closeSkill() {
    document.getElementById("skillModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("skillModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
// =============================
// HERO DESCRIPTION TYPE EFFECT
// =============================

