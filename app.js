const images = document.querySelectorAll('.images img');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const caption = document.getElementById('caption');
const close = document.querySelector('.close');
const prevArrow = document.createElement('span');
const nextArrow = document.createElement('span');
let currentImageIndex = 0;

images.forEach((image, index) => {
  image.addEventListener('click', function() {
    currentImageIndex = index;
    updateModalContent();
    modal.style.display = 'block';
  });
});

close.addEventListener('click', function() {
  modal.style.display = 'none';
});

prevArrow.className = 'arrow prev';
prevArrow.textContent = '<';
prevArrow.addEventListener('click', showPreviousImage);

nextArrow.className = 'arrow next';
nextArrow.textContent = '>';
nextArrow.addEventListener('click', showNextImage);

function showPreviousImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateModalContent();
}

function showNextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateModalContent();
}

function updateModalContent() {
  const currentImage = images[currentImageIndex];
  modalContent.src = currentImage.src;
  caption.textContent = currentImage.dataset.title;
}

modal.appendChild(prevArrow);
modal.appendChild(nextArrow);
