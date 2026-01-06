let todo = [];

while(true){

    let req = prompt("Plz! enter the request");
    if(req === "exit"){
        console.log("You are out. Thanks for using!");
        break;
    } else if(req == "list"){
        if(todo.length == 0){
            console.log("There is no task");
        } else{
            console.log("Your tasks:");
            for(let i=0; i < todo.length; i++){
                console.log(i, todo[i]);
            }
        }
    } else if(req == "add"){
        let task = prompt("Plz! enter the task");
        todo.push(task);
        console.log("Your Task will be added!");
    } else if(req == "delete"){
        let idx = parseInt(prompt("Write the index number of the task that you want to delete"));
        if(idx >= 0 && idx < todo.length){
            todo.splice(idx,1);
            console.log("You'r task will be deleted.")
        } else{
            console.log("Invalid index");
        }
    } else {
        console.log("Please follow the instructions to use the app.");
    }
    
}