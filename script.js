function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to toggle product visibility
function toggleProducts() {
    const hiddenProducts = document.querySelectorAll('.product-card.hidden');
    const showMoreBtn = document.getElementById('showMoreBtn');

    hiddenProducts.forEach((product) => {
        // Toggle visibility by adding/removing 'hidden' class
        product.classList.toggle('hidden');
    });

    // Update button text based on the current state
    showMoreBtn.textContent = showMoreBtn.textContent === 'Show More' ? 'Show Less' : 'Show More';
}


// JavaScript for testimonial slider
let currentTestimonial = 0;
showTestimonial(currentTestimonial);

// Function to change testimonial
function changeTestimonial(n) {
    showTestimonial(currentTestimonial += n);
}

// Function to show the current testimonial
function showTestimonial(n) {
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (n >= testimonials.length) {
        currentTestimonial = 0;
    }
    if (n < 0) {
        currentTestimonial = testimonials.length - 1;
    }

    testimonials.forEach((testimonial) => testimonial.classList.remove('active'));
    testimonials[currentTestimonial].classList.add('active');
}

// Optional: Automatic Slide Change every 5 seconds
setInterval(() => {
    changeTestimonial(1);
}, 5000);
