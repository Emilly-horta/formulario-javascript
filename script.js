const fields = document.querySelectorAll("[required]")


function customValidation(event){
    const field = event.target


    function verifyErrors(){
        let foundError = false;

        //verifica se tem erro
        for(let error in field.validity){
            if (error != "customError" && field.validity[error]){
                foundError = error
            }
        }

        return foundError;
    }

    const error = verifyErrors();
    console.log("existe erro: ", error)


    if(error){
        //trocar mensagem do required
    field.setCustomValidity("Esse campo é obrigatorio")
    } else{
        field.setCustomValidity("")
    }
    
}

for(field of fields){
    field.addEventListener("invalid",customValidation)
}

document.querySelector("form").addEventListener("submit", event => {
    console.log("Pode enviar o formulário")
    event.preventDefault()
})