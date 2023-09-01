const clock = document.getElementById('clock');


function refreshTime() {
    let date = new Date();
    clock.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = addZero(hours);
        minutes = addZero(minutes);
        seconds = addZero(seconds);

        return `${hours}:${minutes}:${seconds}`
    }

    function addZero(time) {
        time = time.toString();
        return time.length < 2 ? "0"+time : time;
    }
}

refreshTime()

setInterval(refreshTime, 1000)