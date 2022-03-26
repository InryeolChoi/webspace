document.addEventListener("DOMContentLoaded",
    function(e){
        let button = document.querySelector("input")        
        let p = document.querySelector("p")
      
        button.addEventListener("click",
            function(e){
                console.log(p.textContent)
                p.textContent = "JS로 입력함"
            }
            
        )
    }
)