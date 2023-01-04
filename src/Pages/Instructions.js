import React from 'react'

const Instructions = () => {
  return (
    <div class="container col-8 instructions">
      <h1 class="text-center">Instructions</h1>
      <ol class="pt-2 pb-2">
        <li>Click "income" to open the form to add your income</li>
        <li>Enter the amount of your monthly take home pay into the income box.</li>
        <li>Click on the submit button to load your income</li>
        <li>Click on the "Expenses" button to open the expense form</li>
        <li>Complete the expense form for each monthly expense</li>
        <li>Click on the submit button to add each expense to your budget</li>
        <li>To mark a bill as paid, click on the check box next to the item.</li>
        <li>To edit an entry, click on the edit icon next to the item you wish to edit</li>
        <li>To delete an entry, click on the trash can icon next to the item you wish to delete</li>
      </ol>
      <p>Your balance will auto-calculate with each expense entry, edit, or deletion. </p>
    </div>
  )
}

export default Instructions
