

// let date_show.houres() = 0;

function setCount(){
    // date_show.houres() ++;
    let date_show = new Date;
    document.getElementById("Date").innerHTML = date_show.getDate();
    document.getElementById("Month").innerHTML = date_show.getMonth();
    document.getElementById("Yeyer").innerHTML = date_show.getFullYear();
    document.getElementById("houre").innerHTML = date_show.getHours();
    document.getElementById("Mint").innerHTML = date_show.getMinutes();
    document.getElementById("sec").innerHTML = date_show.getSeconds();
    
}
setCount();
setInterval(function(){
    setCount();
},1000)



function time(){
    let times = new Date;

}