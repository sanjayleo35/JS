function updateTime() {
    const now = new Date();
    let hour = String(now.getHours()).padStart(2, '0');   
    const medium = hour >=  12? "PM" : "AM"
    hour = hour%12 || 12
    hour = hour.toString().padStart(2,'0')
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    const time = `${hour}:${minute}:${second} ${medium}`;
    document.getElementById("clock").textContent = time;  
}


setInterval(updateTime, 1000);


updateTime();
