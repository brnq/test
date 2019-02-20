
let age = document.getElementById('age');
function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
addEventListener("keyup", event => {
    if (event.code == "Enter") {
        //method 1
        showUser.call(age, "Danilov", "Anton");

        //method 2
        // showUser.apply(age, ["Danilov", "Anton"]);

        //method 3
        // let showUserBound = showUser.bind(age);
        // showUserBound("Danilov", "Anton");
    }
});