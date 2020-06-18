// for this we are going to be using the stack data structure

// First of all, let us introduce the stack implementation

const lg = (arg) => {
    console.log(arg);
};

class Stack { // Last in first out
    constructor(value) {
        this.data = [];
        this.top = 0;
    };

    // the push method - to insert an element into the stack
    push (value) {
        this.data[this.top] = value;
        this.top += 1; // this is proposed to be the position index of the next element which is equal to the length of the array
        // lg(this.data)
    };

    length () {
        return this.top;
    };

    peek () { // checking the top element/value of the stack 
        return this.data[this.top - 1];
    };

    isEmpty() {
        return this.top === 0 // if this.top is 0, then the length of the stack is 0 which means it is empty
        // this.top = 0 means you are assigning top to be zero
        // but this.top === 0 is comapring the value of this top and checking if it is 0 i.e empty which could be true or false
    };

    pop () { //this method doesn't take in any value because we are not inserting any value into it we are only taking out
        // It is meant to remove the last element from the stack
        if (this.isEmpty() === false) {
            this.top = this.top - 1 // 3 - 1 = 2
            this.data.pop()
        };
        lg(this.data)
    };

    traverseElement() {
        let top = this.top - 1;

        // while (top >= 0 ) { // 3 2 1 0
        //     console.log(this.data[top])
        //     top --;
        // };

        for (let index = top; index >= 0; index--) {
            console.log(this.data[index]);
        };
    };
};


const plates = new Stack();

// plates.push('firstplate');
// plates.push('secondplate');
// plates.push('thirdplate');
// plates.push('fourthplate');

// plates.traverseElement();
// plates.pop()
// lg(plates.length() + ' length of the stack');
// lg(plates.peek() + ' peek element method');
// lg(plates.isEmpty());

// lg(plates);



// For the question

const matchingParanthesis = (paranthesisString) => {
    let stack = [];
    const obj = { // assign the opening paranthesis as the key and closing as value
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // (( ()))

    // Traverse through the input paranthesis String
    for (let index = 0; index < paranthesisString.length; index++) {
        if (paranthesisString[index] === '(' || paranthesisString[index] === '{' || paranthesisString[index] === '[') {
            stack.push(paranthesisString[index]);
        } else {
            let last = stack.pop();
            console.log(last + ' popped item');
            console.log(obj[last] + ' value of popped item')

            if (obj[last] !== paranthesisString[index]) { // ')' !== ')'
                return false;
            };
        }
        lg(stack);
    };

    if (stack.length !== 0) { return false }; 
    //for case where a single paranthesis is passed as input
    // the stack should be empty after iteration
    return true;
};


console.log(matchingParanthesis('({()})'))