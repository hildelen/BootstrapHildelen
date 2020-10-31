
    function verificar(){
        //Capturo del DOM
        let usuario = document.getElementById("usuario");
        let contraseña = document.getElementById("password");
    
        //Compruebo los datos obtenidos del DOM
        if(usuario.value.includes("@") == false || contraseña.value === ""){
            if (contraseña.value === ""){
                alert(`La contraseña no puede estar vacía`); 
                return false;            
            }
            else{
                alert(`Falta el arroba en el usuario`);         
                return false;   
            } 
        }     
        else{
            alert(`Bienvenido`);   
            return true;     
        } 
    }
         
