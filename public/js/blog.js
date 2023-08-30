
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
