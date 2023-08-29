
$(function () {
    $('#to-do-list ul').sortable({
        items: "li:not('.day-of-the-week, .add-item')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });

    $('input').keydown(function (e) {
        if (e.keyCode == 13) {
            var item = $(this).val();

            $(this).parent().parent().append('<li>' + item + '</li');
            $(this).val('');
        }
    })

    $('#delete-box').droppable({
        drop: function (event, ui) {
            ui.draggable.remove();
        }
    })
})


$(function () {
    var targets = $('.filter'),
        buttons = $('.filter-button').on("click", function () {
            var value = $(this).data('filter');
            if (value == "all")
                buttons.removeClass('checked');
            else
                $(this).toggleClass('checked');

            var checkedClasses = buttons.filter('.checked').toArray().map(function (btn) { return $(btn).data('filter'); }); //create array of filters

            if (checkedClasses.length === 0)
                targets.show('1000');
            else {
                var selector = '.' + checkedClasses.join('.'), //create selector of the combined classes
                    show = targets.filter(selector);
                targets.not(show).hide('3000');
                show.show('3000');
            }
        });
});


// const categoriesArray = ["jQuery", "Small-app", "website", "Bootstrap", "JavaScript", "DOM-Manipulation", "cheat-sheat", "JavaScript"]


// function onlyUnique(value, index, array) {
//     return array.indexOf(value) === index;
// }

// let unique = categoriesArray.filter(onlyUnique);

// unique.sort();

// // function listUnique(list) {
// //     for (let i = 0; i > list.length; i++) {
// //         list[i].innerHTML = `<button class="filter-button tags-array" data-filter="${list[i]}">${list[i]}</button>`;
// //     }
// // }

// function addClass(element) {
//     const buttonTag = document.createElement('button');
//     buttonTag.classList.add('filter-button');
//     buttonTag.setAttribute("data-filter", element)
//     buttonTag.innerHTML = element;
// }

// let categoriesDom = document.getElementById('categories');
// categoriesDom.innerHTML = listUnique(unique);




const shareLink = encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, I found this article');
const title = encodeURIComponent(document.querySelector('title').textContent);

// console.log([shareLink, msg, title])

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${shareLink}`;


const twitterLink = document.querySelector('.twitterLink');
twitterLink.href = `https://www.twitter.com/share?&url=${shareLink}&text=${msg}&hashtags=lenaesposito,lenaespositoblog,webdeveloper,webdesigner`;


const whatsappLink = document.querySelector('.whatsappLink');
whatsappLink.href = `https://api.whatsapp.com/send?text=${shareLink}`;
