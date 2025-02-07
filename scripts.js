document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll(".nav-item .nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active")); // ลบ active ทุกปุ่มก่อน
            this.classList.add("active"); // เพิ่ม active ให้ปุ่มที่ถูกคลิก
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".home__img img");

    setTimeout(() => {
        image.classList.add("animated");
    }, 500); // เริ่มแสดงผลหลังจาก 0.5 วินาที
});

// edu
// สร้าง observer สำหรับติดตามการเลื่อนของ timeline-item
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // เมื่อ item ปรากฏใน viewport ให้เพิ่ม class .show
            entry.target.classList.add('show');
        } else {
            // เมื่อ item ออกจาก viewport ให้ลบ class .show
            entry.target.classList.remove('show');
        }
    });
}, { threshold: 0.5 }); // กำหนดว่าเมื่อ item 50% ปรากฏใน viewport ให้ทำงาน

// เลือกทุกๆ .timeline-item และเริ่มสังเกตการณ์
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});



// Skill
// Add scroll animation

document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});


// adding funtionality to back to top button 
// Get the button element
const backToTopButton = document.getElementById('btn-back-to-top');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// When the button is clicked, scroll to the top of the page
backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add scroll animation to timeline items
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight - 100) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission (replace with actual API call)
    console.log('Form Submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');

    // Clear form
    document.getElementById('contact-form').reset();
});

const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

function showSlide(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});


  // แสดงปุ่ม Back to Top เมื่อเลื่อนลง
  window.addEventListener("scroll", function() {
    var backToTop = document.getElementById("backToTop");
    if (window.scrollY > 300) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  // คลิกปุ่มแล้วเลื่อนขึ้นไปบนสุดอย่างนุ่มนวล
  document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });