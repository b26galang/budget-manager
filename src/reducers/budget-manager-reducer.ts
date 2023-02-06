export type Expense = {
    id: number,
    name: string,
    cost: number,
    isEssential: boolean
}

export type BudgetManagerState = {
    expenseNameInput: string,
    expenseCostInput: number,
    isEssentialInput: boolean,
    unpaidExpenses: Expense[],
    paidExpenses: Expense[],
    totalCost: number
}

export type SetExpenseName = {type:"SET_EXPENSE_NAME", payload: string};
export type SetExpenseCost = {type:"SET_EXPENSE_COST", payload: number};
export type SetIsEssential = {type: "SET_IS_ESSENTIAL", payload: boolean};
export type AddExpense = {type: "ADD_EXPENSE"};
export type MarkPaidAction = {type:"MARK_PAID", expenseId: number};
export type DeleteUnpaidExpenseAction = {type:"DELETE_UNPAID_EXPENSE", expenseId: number};
export type DeletePaidExpenseAction ={type:"DELETE_PAID_EXPENSE", expenseId: number};
export type BudgetManagerAction = 
SetExpenseName | SetExpenseCost | SetIsEssential | AddExpense | MarkPaidAction | DeleteUnpaidExpenseAction | DeletePaidExpenseAction ; 

export function budgetManagerReducer(state: BudgetManagerState, action: BudgetManagerAction): BudgetManagerState{
    const newState: BudgetManagerState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_EXPENSE_NAME": {
            newState.expenseNameInput = action.payload;
            return newState;
        }

        case "SET_EXPENSE_COST": {
            newState.expenseCostInput = action.payload;
            return newState;

        }

        case "SET_IS_ESSENTIAL":{
            newState.isEssentialInput = action.payload;
            return newState

        }

        case "ADD_EXPENSE": {
            const expense: Expense = {
                id: Math.random(), 
                name: newState.expenseNameInput, 
                cost: newState.expenseCostInput,
                isEssential: newState.isEssentialInput
            };
            newState.unpaidExpenses.push(expense);
            updateTotalCost(newState);
            return newState;
        }

        case "MARK_PAID": {
            const expense: Expense | undefined = newState.unpaidExpenses.find(expense => expense.id === action.expenseId);
            if (!expense){
                return newState;
            }
            newState.unpaidExpenses = newState.unpaidExpenses.filter(expense => expense.id !== action.expenseId);

            newState.paidExpenses.push(expense);
            return newState;
        }

        case "DELETE_UNPAID_EXPENSE": {
            newState.unpaidExpenses = newState.unpaidExpenses.filter(expense => expense.id !== action.expenseId);
            updateTotalCost(newState);
            return newState;
        }

        case "DELETE_PAID_EXPENSE":{
            newState.paidExpenses = newState.paidExpenses.filter(expense => expense.id !== action.expenseId);
            updateTotalCost(newState);
            return newState;
        }
    }
    
    function updateTotalCost(state: BudgetManagerState){
        state.totalCost = 0;
        state.paidExpenses.forEach((e) => newState.totalCost += e.cost)
        state.unpaidExpenses.forEach((e) => newState.totalCost += e.cost)
    }
}