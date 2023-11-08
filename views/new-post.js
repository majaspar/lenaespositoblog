const tableOfContents = document.getElementById('table-of-contents')
const toggleTableBtn = document.querySelector('.open-table-of-contents') 


toggleTableBtn.addEventListener('click', () => {
    tableOfContents.classList.toggle('table-of-contents-visible')
})
