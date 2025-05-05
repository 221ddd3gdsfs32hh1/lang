
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

const teachers = [
    {
        first_name: "Алексей",
        last_name: "Иванов",
        photo: "https://randomuser.me/api/portraits/men/31.jpg",
        info: "Специалист по математике с опытом более 10 лет."
    },
    {
        first_name: "Игорь",
        last_name: "Петров",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        info: "Эксперт по физике и химии, преподаёт старшеклассникам."
    },
    {
        first_name: "Михаил",
        last_name: "Смирнов",
        photo: "https://randomuser.me/api/portraits/men/33.jpg",
        info: "Преподаватель информатики, увлечён программированием."
    }
];

window.onload = function () {
    const container = document.getElementById("teachers-container");
    teachers.forEach(teacher => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${teacher.photo}" alt="Фото">
            <h3>${teacher.first_name} ${teacher.last_name}</h3>
            <p>${teacher.info}</p>
        `;
        container.appendChild(card);
    });
};
