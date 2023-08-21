document.addEventListener('DOMContentLoaded', function () {

    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function () {
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
        });
    };
    searchClose.addEventListener('click', function () {
        searchBar.style.visibility = 'hidden';
        searchBar.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
    });

});

function functionEnter() {
    var k = new Event("keydown");
    k.key="return"; //Change this value for different keys
    document.dispatchEvent(k);
}

// const input = document.getElementById('searchInput');

// input.addEventListener('keypress', function(event) {
//     if(event.key === '13') {
//         event.preventDefault();
//         document.getElementById('search-icon').click();
//     }
// 



// jsdom.jQueryify(window, "https://code.jquery.com/jquery-3.7.0.min.js", function () {


//     window.$('#to-do-list ul').sortable({
//         items: "li:not('.day-of-the-week, .add-item')",
//         connectWith: "ul",
//         dropOnEmpty: true,
//         placeholder: "emptySpace"
//     });

//     window.$('input').keydown(function (e) {
//         if (e.keyCode == 13) {
//             var item = $(this).val();

//             $(this).parent().parent().append('<li>' + item + '</li');
//             $(this).val('');
//         }
//     })

//     window.$('#delete-box').droppable({
//         drop: function (event, ui) {
//             ui.draggable.remove();
//         }
//     })
// });
const postResults = document.getElementById('post-results');



console.log(postResults.children)