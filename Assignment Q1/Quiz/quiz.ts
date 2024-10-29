// Create a quiz application using TypeScript and the Inquirer library. 
// The program should take user input through Inquirer, 
// implement a quiz with a variable number of questions, 
// calculate the quiz score in separate ES module, 
// and display the final result along with correct and incorrect user-given answers. 

export let questions = [{
    question: "Q # 1: What is TypeScript primarily used for?",
    multiple_choices: ["Memory management", "Dynamic typing", "Static typing", "Asynchronous object"],
    correct: "Static typing"
},{
    question: "Q # 2: Which of the following is NOT a valid TypeScript data type?",
    multiple_choices: ["Void", "any", "Tuple", "dynamic"],
    correct: "Void"
}]

