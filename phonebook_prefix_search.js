function searchByPrefix(phonebook, prefix){
    let names = Object.keys(phonebook);
    let output = [];

    for (let name of names){
        if (name.startsWith(prefix)){
            output.push(name);
        }
    }
    return output;
}

phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
prefix = "ra";
console.log(searchByPrefix(phonebook, prefix));