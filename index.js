let mainDiv = document.getElementById("mainDiv")

mainDiv.addEventListener("click", function(){
    let randHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    mainDiv.style.backgroundColor = "#"+randHex(6)
})