import inquirer from "inquirer";
import { questions } from "./quiz.js";
let answer : string[]= [];
let scoreCount = 0;
for (let i = 0 ; i<questions.length; i++){
    // console.log(questions[i].question);
    let selectedAnswer = await inquirer.prompt([{
        name: "selected_Answer",
        type: "list",
        message: questions[i].question,
        choices: questions[i].multiple_choices
    }])
    answer.push(selectedAnswer.selected_Answer)
    if (questions[i].correct === selectedAnswer.selected_Answer) {
        console.log("Your answer is correct")
        scoreCount++;
    }else{
        console.log(`Sorry, you answer ${answer} is not correct`)
        console.log(`Correct answer is ${questions[i].correct}`)
    }
}
console.log(`Your final result is ${scoreCount}`);
