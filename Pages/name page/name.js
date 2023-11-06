let button1 = document.getElementById("Button1")

button1.onclick = () => {
    window.location.href="/Pages/gamepage 1/game1.html","_self"
    
    //storing player name
    let PlayerName = document.getElementById("inputbox").value 
    // console.log(PlayerName)
    localStorage.setItem("Name",PlayerName)


};

