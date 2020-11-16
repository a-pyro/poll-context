'use strict';

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JS', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
};

const upadateAns = () => {
    const answers = document.querySelectorAll('.answers > td');
    answers.forEach(
        (answer, index) => (answer.innerText = poll.answers[index])
    );
};

upadateAns();

poll.registerNewAnswer = function () {
    /*
    const answer = prompt(
        `What is your favourite programming language?
        0: JS
        1: Pyth
        2: Rust
        3: C++
        (write option number)`
            .split('\n')
            .map((line) => line.trim())
            .join('\n')
    );
    */

    const answer = Number(
        prompt(
            `${this.question}\n${this.options.join(
                '\n'
            )}\n(Write option number)`
        )
    );

    /*
    if (answer === '0' || answer === '1' || answer === '2' || answer === '3') {
        this.answers[parseInt(answer)]++;
    } else {
        alert('invalid input');
    }
    console.log(poll);
    */

    //    register answer with && shortcircuit
    typeof answer === 'number' &&
        answer < this.answers.length &&
        this.answers[answer]++;

    // console.log(this.answers);
    upadateAns();

    this.displayResult();
    this.displayResult('string');
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult = function (type = 'array') {
    if (type === 'string') {
        // console.log(
        //     `Poll result are: ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
        // );
        console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
        console.log(this.answers);
    }
};

const test1 = [5, 2, 3];
const test2 = [1, 5, 3, 9, 6, 1];

poll.displayResult.call({ answers: test1 });
poll.displayResult.call({ answers: test1 }, 'string');
poll.displayResult.call({ answers: test2 });
poll.displayResult.call({ answers: test2 }, 'string');

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
