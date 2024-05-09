#!/usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pincode?",
        type: "number",
    }
]);
//12345 === 1234 - false
if (pinAnswer.pin === mypin)
    console.log("your correct pincode");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select operation",
        type: "list",
        choices: ["current account", "saving account"]
    },
    {
        name: "transMethod",
        message: "enter your transaction method",
        type: "list",
        choices: ["CashWithDraw", "fastCash"],
    },
]);
if (operationAns.transMethod == "CashWithDraw") {
    let CashWithDrawAmount = await inquirer.prompt([{
            name: "withdraw",
            message: "enter the amount you want to with draw:",
            type: "number",
        }
    ]);
    //greater than or equals to operater
    if (mybalance >= CashWithDrawAmount.withdraw) {
        mybalance -= CashWithDrawAmount.withdraw; //my balance = mybalance -cash with draw
        console.log(`your total balance is:${mybalance}`);
    }
    else
        (console.log(`insufficient balance.`));
}
else {
    let fastCashAmount = await inquirer.prompt([
        {
            name: "fastCash",
            message: "select amount you want to with draw",
            type: 'list',
            choices: [
                '1000',
                '3000',
                '5000',
            ]
        }
    ]);
    if (mybalance >= fastCashAmount.fastCash) {
        mybalance -= fastCashAmount.fastCash; //my balance = mybalance -cash with draw
        console.log(`your total balance is :${mybalance}`);
    }
    else {
        console.log(`insufficient balance`);
    }
}
