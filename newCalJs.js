class Stack 
{
    constructor()
    {
        this.items = [];
    }


    push(el)
    {
    return this.items.push(el);
    }

    pop()
    {
    return this.items.pop();
    }

    returnTop()
    {
       var dis = document.getElementById("display");
       dis.innerText = this.items[memory.items.length-1];
    }

    clearMemory()
    {
        this.items = [];
    }
}

let memory = new Stack();

function display(value)
{
    document.getElementById("display").innerText += value;
}

function decResult()
{
    var exp = document.getElementById("display").innerText;
    if(exp[0]=="*" || exp[0]=="/")
    {
        syntaxError();
    }
    while( exp[exp.length-1]=="+" || exp[exp.length-1]=="-" || exp[exp.length-1]=="*" || exp[exp.length-1]=="/")
    {
        let x = exp.slice(0,-1);
        exp = x;
    }

    for(let i=0; i<exp.length; i++)
    {
        if((exp[i]=="+" || exp[i]=="-" || exp[i]=="*" || exp[i]=="/") && (exp[i+1]=="+" || exp[i+1]=="-" || exp[i+1]=="*" || exp[i+1]=="/"))
        {
            syntaxError();
        }
    }

    //var postFix = infixToPostfix(exp);
    var b = evaluateExpression(exp);
    document.getElementById("display").innerText = b;
    memory.push(b);
}

function evaluateExpression(expression) {
    return new Function(`return ${expression}`).call();
  }

// function infixToPostfix(expression) {
//     var stack = [];
//     var postfix = "";
//     var precedence = {
//         "+": 1,
//         "-": 1,
//         "*": 2,
//         "/": 2,
//         "^": 3
//     };

//     for (var i = 0; i < expression.length; i++) {
//         var token = expression[i];

//         if (/\d/.test(token)) {
//             postfix += token;
//         } else if (token === "(") {
//             stack.push(token);
//         } else if (token === ")") {
//             while (stack[stack.length - 1] !== "(") {
//                 postfix += stack.pop();
//             }
//             stack.pop();
//         } else {
//             while (stack.length > 0 && precedence[token] <= precedence[stack[stack.length - 1]]) {
//                 postfix += stack.pop();
//             }
//             stack.push(token);
//         }
//     }

//     while (stack.length > 0) {
//         postfix += stack.pop();
//     }
//     return postfix;
// }

// function evaluateExpression(expr) {
//     var stack = [];
//     var tokens = expr.split(" ");
//     var valid_operators = ["+", "-", "*", "/"];
//     for (var i = 0; i < tokens.length; i++) {
//         var token = tokens[i];
//         if (valid_operators.includes(token)) {
//             var operand2 = stack.pop();
//             var operand1 = stack.pop();
//             var result = eval(operand1 + token + operand2);
//             stack.push(result);
//         } else {
//             stack.push(parseFloat(token));
//         }
//     }
//     return stack.pop();
// }

function clrscr()
{
    document.getElementById("display").innerText = '';
}

function backspace()
{
  var val = document.getElementById("display").value;
  document.getElementById("display").value = val.substr(0, val.length - 1);
}

function syntaxError()
{
    document.getElementById("display").innerText = 'SYNTAX ERROR';
}

function sqrt()
{
    var p = document.getElementById("display").innerText;
    var q = Math.sqrt(p);
    if(q=='NaN')
    {
        syntaxError();
    }
    document.getElementById("display").innerText = q;
}
