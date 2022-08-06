document.getElementById('calculate-btn').addEventListener('click', function () {
    // income 
    const incomeInput = document.getElementById('income');
    const incomeValue = parseInt(incomeInput.value);

    // expenses

    const foodCostInput = document.getElementById('food-cost');
    const foodCostValue = parseInt(foodCostInput.value);

    const rentCostInput = document.getElementById('rent-cost');
    const rentCostValue = parseInt(rentCostInput.value);

    const clothesCostInput = document.getElementById('clothes-cost');
    const clothesCostValue = parseInt(clothesCostInput.value);

    // error message
    const totalExpenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');
    const errormessage = document.getElementById('error-message');

    if (isNaN(foodCostValue)) {
        errormessage.innerText = 'You input: ' + foodCostInput.value + ', in food box. ' + ' Please Input valid number';
        foodCostInput.value = '';
        totalExpenses.innerText = ' ';
         balance.innerText = ' ';
    }
    else if (isNaN(rentCostValue)) {
        errormessage.innerText = 'You input: ' + rentCostInput.value + ', in rent box. ' + ' Please Input valid number';
        rentCostInput.value = ' ';
        totalExpenses.innerText = ' ';
         balance.innerText = ' ';
    }
    else if (isNaN(clothesCostValue)) {
        errormessage.innerText = 'You input: ' + clothesCostInput.value + ', in clothes box. ' + ' Please Input valid number';
        clothesCostInput.value = ' ';
        totalExpenses.innerText = ' ';
         balance.innerText = ' ';
    } else {


        // balance 
        const errorIncome = document.getElementById('error-icome');
        if (isNaN(incomeValue)) {
            errorIncome.innerText = 'You input: ' + incomeInput.value + ', in income box. ' + ' Please Input valid number';
        } else {
            const totalExpensesAmount = foodCostValue + rentCostValue + clothesCostValue;

            // total expenses 


            totalExpenses.innerText = totalExpensesAmount;
            
            balance.innerText = incomeValue - totalExpensesAmount;
            errorIncome.innerText = ' '
        }


        // saving 

        document.getElementById('save-btn').addEventListener('click', function () {
            // save parcent input
            const savePercentInput = document.getElementById('save-percent-input');
            const savePercentInputValue = parseInt(savePercentInput.value);


            // saving-amount

            const savingAmount = document.getElementById('saving-amount');
            const savingAmountValue = parseInt(savingAmount.innerText);

            const remaingBalance = document.getElementById('remaing-balance');
            const remaingBalanceValue = parseInt(remaingBalance.innerText);

            const errorSave = document.getElementById('error-save')
            if (isNaN(savePercentInputValue)) {
                errorSave.innerText = 'You input: ' + savePercentInput.value + ', in save box. ' + ' Please Input valid number';
                savingAmount.innerText = ' ';
                remaingBalance.innerText = ' '

            } else {
                savingAmount.innerText = (savePercentInputValue * parseInt(balance.innerText) / 100)

                // remaing balance



                remaingBalance.innerText = parseInt(balance.innerText) - parseInt(savingAmount.innerText);
                errorSave.innerText = ' '
            }




        })
        errormessage.innerText = ''

    }





    // console.log(totalExpenses.innerText);
})