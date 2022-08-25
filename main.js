// SIMULADOR INTERACTIVO

const remeraKitty = "2500"
const remeraAir = "2000"
const buzoKitty = "5600"
const pantalonKitty = "6000"

let compraProducto = (show) => {
    alert("¡Bienvenido a Nikitty!");
    let limite = parseInt(prompt("¿Cuantos productos quiere llevar?"))
    if (isNaN(limite)){
        alert("Porfavor elija un número, recargue la pagina para intentarlo nuevamente.")
        return
    }
    for (let i = 1; i <= limite; i++){
        let ropa = prompt("En nuestra tienda tenemos diversos productos como: \n 1. Remera Kitty \n 2. Remera Air \n 3. Buzo Kitty \n 4. Pantalon Kitty. \n Elija su/s producto/s.");
        if (ropa == "1"){
            console.log("La remera de Kitty cuesta " + "$" + remeraKitty);
        } else if (ropa == "2"){
            console.log("La remera Air cuesta " + "$" + remeraAir);
        } else if (ropa == "3"){
            console.log("El buzo Kitty cuesta " + "$" + buzoKitty);
        } else if (ropa == "4"){
            console.log("El pantalon Kitty cuesta " + "$" + pantalonKitty);
        }
        
    }
}





compraProducto()

