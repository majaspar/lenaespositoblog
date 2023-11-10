
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "true") {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute('data-expanded', false);
    } else {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("data-expanded", true);
    }
});



const header = document.querySelector('.primary-header');

const divScrollWatcher = document.createElement('div');


divScrollWatcher.setAttribute('data-scroll-watcher', '');

header.after(divScrollWatcher);


const navObserver = new IntersectionObserver((entries) => {

    header.classList.toggle('background-dark', !entries[0].isIntersecting)
    header.classList.toggle('changed-height', !entries[0].isIntersecting)

});


navObserver.observe(divScrollWatcher)


// const scrollReveal = ScrollReveal({
//     distance: '160px',
//     opacity: 0.1,
//     duration: 800,
//     easing: 'ease-in-out'
// })

// scrollReveal.reveal('.hero-text', {
//     origin: 'left'
// })

// // let unique = [...new Set(myArray)];

// <% for (let tag of posts.tags) {%>
//     <% let unique = [...new Set(posts.tags)] %>
//     <button class="no-btn cloud-tag tags-entry-tag">
//         <%= unique %>
//     </button>
//     <% } %>
