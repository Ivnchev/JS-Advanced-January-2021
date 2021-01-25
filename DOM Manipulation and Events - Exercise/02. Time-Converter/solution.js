function attachEventsListeners() {
    let days = document.querySelector('#days')
    let hours = document.querySelector('#hours')
    let minutes = document.querySelector('#minutes')
    let seconds = document.querySelector('#seconds')
    
    document.getElementById('daysBtn').addEventListener('click', () => {
        hours.value = days.value * 24;
        minutes.value = days.value * 60 * 24
        seconds.value = days.value * (24 * 60 * 60)
    });
    document.getElementById('hoursBtn').addEventListener('click', () => {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60
        seconds.value = hours.value * (60 * 60)
    });
    document.getElementById('minutesBtn').addEventListener('click', () => {
        days.value = minutes.value / (24 * 60)
        hours.value = minutes.value / 60 
        seconds.value = minutes.value * 60
    });
    document.getElementById('secondsBtn').addEventListener('click', () => {
       days.value = seconds.value / (24 * 60 * 60)
       hours.value = seconds.value / (60 * 60)
       minutes.value = seconds.value / 60
    });
}