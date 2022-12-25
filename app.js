import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const incomeArr = [];


class ExpenseItem {
    constructor(id, creditor, amount, date) {
        this.id = uuidv4();
        this.creditor = document.getElementById("creditorInput").value;
        this.amount = document.getElementById("amtDueInput").value;
        this.date = document.getElementById("dueDateInput").value;
    }

    //write a function to add the new expense to the expenseList table using jquery
    addExpense() {
        let newExpense = new ExpenseItem();
        let expenseList = document.getElementById("expenseList");
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${newExpense.creditor}</td>
        <td>${newExpense.amount}</td>
        <td>${newExpense.date}</td>
        <td><button class="btn btn-danger btn-sm delete">X</button></td>
        <td><button class="btn btn-info btn-sm edit">Edit</button></td>
        `;
        expenseList.appendChild(newRow);
    }

    //write a function to edit the expense in the expenseList table using jquery
    editExpense() {
        let expenseList = document.getElementById("expenseList");
        let editBtn = document.getElementsByClassName("edit");
        //get the row that the edit button is in
        let row = editBtn.parentElement.parentElement;
        //get values from teh row and push them back into the input fields in the expense form
        let creditor = row.children[0].innerText;
        let amount = row.children[1].innerText;
        let date = row.children[2].innerText;
        document.getElementById("creditorInput").value = creditor;
        document.getElementById("amtDueInput").value = amount;
        document.getElementById("dueDateInput").value = date;
    }

    deleteExpense() {
        let expenseList = document.getElementById("expenseList");
        expenseList.addEventListener("click", function (e) {
            if (e.target.classList.contains("delete")) {
                e.target.parentElement.parentElement.remove();
            }
        });
    }

    convertDate() {
        
    }
}   // end of class


function getIncome() {
    const incomeInput = document.getElementById('incomeInput').value;
    console.log('income entered = ', incomeInput);
    return incomeInput;
}


function updateIncome() {

}



//================================ event listeners ================================

//event listener for the add expense button
document.getElementById("expenseSubmitBtn").addEventListener("click", function (e) {
    e.preventDefault();
    let newExpense = new ExpenseItem();
    newExpense.addExpense();
    newExpense.deleteExpense();
    newExpense.editExpense();
});
console.log(newExpense);

let incomeBtn = document.getElementById('incomeSubmitBtn')
incomeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getIncome();
})




// $("#incomeAmountRecap").text(incomeInput);