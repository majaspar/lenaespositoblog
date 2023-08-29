let date = new Date();

document.getElementById('currentTime').innerHTML = todaysDate(date) + currentTime(date);



function todaysDate(date) {
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;

    return `Today is ${day}/${month}/${year}`
}

function currentTime(date) {
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return ` and the time is ${hour}:${minutes}.`
}

