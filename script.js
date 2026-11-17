const destinations = [
    {
        number: "01",
        country: "FRANCE",
        title: "Paris",
        description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80"
    },
    {
        number: "02",
        country: "JAPAN",
        title: "Tokyo",
        description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
    },
    {
        number: "03",
        country: "ITALY",
        title: "Rome",
        description: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80"
    },
    {
        number: "04",
        country: "EGYPT",
        title: "Cairo",
        description: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
        continent: "Africa",
        food: "Koshari, Foul",
        place: "Pyramids",
        language: "Arabic",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=80"
    }
];

let currentIndex = 0;

function updateDestination(index) {
    const data = destinations[index];
    
    document.getElementById('dest-img').src = data.image;
    document.getElementById('dest-number').textContent = data.number;
    document.getElementById('progress-text').textContent = `${data.number} / 04`;
    document.getElementById('dest-country').textContent = data.country;
    document.getElementById('dest-title').textContent = data.title;
    document.getElementById('dest-desc').textContent = data.description;
    document.getElementById('info-continent').textContent = data.continent;
    document.getElementById('info-food').textContent = data.food;
    document.getElementById('info-place').textContent = data.place;
    document.getElementById('info-lang').textContent = data.language;

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % destinations.length;
    updateDestination(currentIndex);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
    updateDestination(currentIndex);
});

updateDestination(0);