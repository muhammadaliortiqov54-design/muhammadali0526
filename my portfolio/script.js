// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.");
    contactForm.reset();
});

// Credit Calculator
const creditForm = document.getElementById('creditCalc');
creditForm.addEventListener('submit', function(e){
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const months = parseFloat(document.getElementById('months').value);
    if(isNaN(amount)||isNaN(interest)||isNaN(months)||months<=0){
        alert("Iltimos, barcha maydonlarni to‘ldiring va oylar musbat bo‘lsin!");
        return;
    }
    const monthlyPayment = (amount + (amount*interest/100)) / months;
    document.getElementById('calcResult').innerHTML = `<p>Oylik to‘lov: ${monthlyPayment.toFixed(2)} so'm</p>`;
});

// Testimonials Slider
let index = 0;
const testimonials = document.querySelectorAll('.testimonial-slider .testimonial');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showTestimonial(i){
    testimonials.forEach((t)=>t.classList.remove('active'));
    testimonials[i].classList.add('active');
}

prevBtn.addEventListener('click', ()=>{
    index = (index-1+testimonials.length)%testimonials.length;
    showTestimonial(index);
});
nextBtn.addEventListener('click', ()=>{
    index = (index+1)%testimonials.length;
    showTestimonial(index);
});

// FAQ Toggle
const faqs = document.querySelectorAll('.faq-item');
faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active');
    });
});
