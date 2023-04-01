
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        0000 
    )
    });
    
    
    document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    });
    
    const audio = new Audio("audio.mp3");
    const buttons = document.querySelectorAll("p");
    
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        audio.play();
      });
    });
