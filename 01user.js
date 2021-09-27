// Informacion con los arreglos de cada entidad
// Creo la entidad usuarios
let users = [];
// creo la clase y el constructor
class User {
    constructor(user_name, name, surname, phone_number, email, password, adress, admin) {
        this.user_name = user_name;
        this.name = name;
        this.surname = surname;
        this.phone_number = phone_number;
        this.email = email;
        this.password = password;
        this.adress = adress;
        this.admin = admin === undefined? false: admin;
    }
}

let admin = new User('admin1','admin', null, null, 'admin@gmail.com', 'admin1234', null, true);
let user1 = new User('vasquezr', 'Rosana','Vasquez', '2964550546', 'rosana.vasquez@gmail.com', 'rosana1234', 'Rolda643', false);
let user2 = new User('barberot', 'Tobias', 'Barbero', '2964430764' , 'tobit.barbero@gmail.com', 'tobias1234', 'Rolda645', false);

users = [admin, user1, user2];
console.log ('Se cargó correctamente la información de usuarios', users);

module.exports = {users}