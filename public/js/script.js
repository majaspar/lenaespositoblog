// add new tags in add-post.ejs

let addTagsBtn = document.getElementById('addTagsBtn');
let tagList = document.querySelector('.tag-list')
let tagItem = document.querySelectorAll('.tag-item')[0];
let allTags = document.querySelectorAll('.tag-item')


addTagsBtn.addEventListener('click', function () {
    let newTags = tagItem.cloneNode(true);
    let tagInput = newTags.getElementsByTagName('input')[0];
    tagInput.value = '';
    tagList.appendChild(newTags)
})

// add new tags in edit-post.ejs

let editTagsBtn = document.getElementById('editaddTagsBtn');
let edittagList = document.querySelector('.edittag-list')
let edittagItem = document.querySelectorAll('.teditag-item')[0];
let editallTags = document.querySelectorAll('.edittag-item')


editTagsBtn.addEventListener('click', function () {
    let editnewTags = edittagItem.cloneNode(true);
    let edittagInput = editnewTags.getElementsByTagName('input')[0];
    edittagInput.value = '';
    edittagList.appendChild(editnewTags)
})
