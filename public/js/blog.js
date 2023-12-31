
$(function () {
    $('#to-do-list ul').sortable({
        items: "li:not('.day-of-the-week, .add-item')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });

    $('.add-item input').keydown(function (e) {
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

