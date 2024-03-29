import inquirer from "inquirer";
import chalk from "chalk";
let addTodo = [];
let condition = true;
while(condition){

let addtask = await inquirer.prompt([
  {
    name: "todos",
    type: "input",
    message: chalk.blueBright("What you want to Add in your Todo List!!")
  },
  {
    name: "moretodo",
    type: "confirm",
    message: chalk.blueBright("Do you want to add more Todos?"),
    default: "false",
  }
])
addTodo.push(addtask.todos);
condition = addtask.moretodo;
console.log(addTodo);
};
