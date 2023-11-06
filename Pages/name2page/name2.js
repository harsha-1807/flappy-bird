let button1 = document.getElementById("Button1")



  
button1.onclick = () => {
      window.location.href="/Pages/gamepage 2/game2.html","_self"
      let PlayerName1 = document.getElementById("inputbox1").value 
      // console.log(PlayerName)
      localStorage.setItem("Name1",PlayerName1)
      let PlayerName2 = document.getElementById("inputbox2").value 
      // console.log(PlayerName)
      localStorage.setItem("Name2",PlayerName2)

};
