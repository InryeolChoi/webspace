document.addEventListener("DOMContentLoaded",
    function(e){
        let nameEditbutton = document.querySelector("#nameEditbutton")        
        let editName = document.querySelector("#editNameField")
        let okButton = document.querySelector("#okButton")
        let newName = document.querySelector("#newName")
        let nameHere = document.querySelector("#nameHere")

        nameEditbutton.addEventListener("click",
            function(e){
                editName.style.display = "block"
                nameEditbutton.style.display = "none"
            }
        )

        nameEditbutton.addEventListener("click",
            function(e){
                nameHere.textContent = newName.value
                editName.style.display = "none"
                nameEditbutton.style.display = "inline"
            }
        )
    
    }
)