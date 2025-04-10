let currentImageIndex = 0;
const images = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"]; 

function openLetter() {
    const letterContainer = document.querySelector(".letter-container");
    letterContainer.classList.toggle("opened");
}

function nextImage(event) {
    event.stopPropagation(); // Ngăn chặn việc đóng thư khi nhấn nút
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("slider-image").src = images[currentImageIndex];
}

function prevImage(event) {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("slider-image").src = images[currentImageIndex];
}
