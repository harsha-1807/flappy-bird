let button1 = document.getElementById("Button1")

button1.onclick = () => {
    window.location.href="../name page/name.html","_self"
    
    //storing player name
    let PlayerName = document.getElementById("inputbox").value 
    // console.log(PlayerName)
    localStorage.setItem("Name",PlayerName)


};

