function clock() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    hours = (hours < 10)? "0" + hours : hours;
    minutes = (minutes < 10)? "0" + minutes : minutes;
    seconds = (seconds < 10)? "0" + seconds : seconds;

    document.querySelector('.clock').innerHTML = `<div class="time"><div class="hours-minutes">${hours} ${minutes}</div>${seconds}</div>`; 
    window.setTimeout( function() { clock(); }, 200)
}
 
clock();