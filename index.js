let users = [];

let user = {
    "name": "Juan",
    "ap_paterno": "Vilchez",
}

let description = {
    "name": "Nombres completos",
    "ap_paterno": "Apellido paterno",
    "ap_materno": "Apellido materno",
    "birthday": "Cumpleaños",
}
const validate = (user, description) => {
    let aux = {};
    let res = [];

    for (let clave in description) {
        if (user[clave] == undefined) {
            res.push(["No se registro el " + description[clave].toLowerCase()]);
        } else {
            res.push([description[clave], user[clave]])
        }

    }
    return res;
}

console.log(validate(user, description));