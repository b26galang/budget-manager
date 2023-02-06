import { BudgetManagerState, budgetManagerReducer, Expense } from "../reducers/budget-manager-reducer";

test("SET EXPENSE", () =>{
    const budgetState: BudgetManagerState = {
        expenseNameInput: "laptop",
        expenseCostInput: 2000,
        isEssentialInput: true,
        unpaidExpenses: [],
        paidExpenses: [],
        totalCost: 0,
    }

    const nextState = budgetManagerReducer(budgetState, {type: "SET_EXPENSE_NAME", payload: "laptop"});
    expect(nextState.expenseNameInput).toBe("laptop");
    console.log(budgetState);
    console.log(nextState);
})

test ("SET COST", () => {
    const budgetState: BudgetManagerState = {
        expenseNameInput: "cellphone",
        expenseCostInput: 1000,
        isEssentialInput: true,
        unpaidExpenses: [],
        paidExpenses: [],
        totalCost: 0,
    }

    const nextState = budgetManagerReducer(budgetState, {type: "SET_EXPENSE_COST", payload: 1000});
    expect(nextState.expenseCostInput).toBe(1000);
    console.log(budgetState);
    console.log(nextState);
})

test ("SET ESSENTIAL", () => {
    const budgetState: BudgetManagerState = {
        expenseNameInput: "Sweater",
        expenseCostInput: 50,
        isEssentialInput: false,
        unpaidExpenses: [],
        paidExpenses: [],
        totalCost: 0,
    }

    const nextState = budgetManagerReducer(budgetState, {type: "SET_IS_ESSENTIAL", payload: false});
    expect(nextState.isEssentialInput).toBe(false);
    console.log(budgetState);
    console.log(nextState);
})

test ("ADD EXPENSE", () => {
    const budgetState: BudgetManagerState = {
        expenseNameInput: "Shoes",
        expenseCostInput: 120,
        isEssentialInput: false,
        unpaidExpenses: [],
        paidExpenses: [],
        totalCost: 0,
    }

    const nextState = budgetManagerReducer(budgetState, {type: "ADD_EXPENSE"});
    expect(nextState.expenseNameInput).toBe("Shoes");
    expect(nextState.expenseCostInput).toBe(120);
    expect(nextState.isEssentialInput).toBe(false);
    expect(nextState.unpaidExpenses.length).toBe(1);
    expect(nextState.totalCost).toBe(120);
})

test ("MARK PAID", () => {
    const budgetState: BudgetManagerState = {
        expenseNameInput: "Mouse",
        expenseCostInput: 70,
        isEssentialInput: true,
        unpaidExpenses: [{id: 1, name: "Mousepad", cost: 20, isEssential: true}],
        paidExpenses: [],
        totalCost: 0,
    }

    const nextState = budgetManagerReducer(budgetState, {type: "MARK_PAID", expenseId: 1});
    expect(nextState.paidExpenses.length).toBe(1);
    expect(nextState.unpaidExpenses.length).toBe(0);
    expect(nextState.totalCost).toBe(0);
})

test ("DELETE UNPAID EXPENSE", () => {
    const budgetState: BudgetManagerState = {
        expenseNameInput: "Keyboard",
        expenseCostInput: 100,
        isEssentialInput: true,
        unpaidExpenses: [
            {id: 1, name: "Mousepad", cost: 20, isEssential: true},
            {id: 2, name: "tea", cost: 4, isEssential: true},
            {id: 3, name:"coffee", cost: 6, isEssential: true}
        ],
        paidExpenses: [],
        totalCost: 0,
    }

    const nextState = budgetManagerReducer(budgetState, {type: "DELETE_UNPAID_EXPENSE", expenseId: 2});
    expect(nextState.unpaidExpenses.length).toBe(2);
    expect(nextState.totalCost).toBe(26);
})

test ("DELETE PAID EXPENSE", () => {
    const budgetState: BudgetManagerState = {
        expenseNameInput: "Monitor",
        expenseCostInput: 300,
        isEssentialInput: true,
        unpaidExpenses: [],
        paidExpenses: [
            {id: 4, name: "mug", cost: 6, isEssential: false},
            {id: 5, name: "plate", cost: 7, isEssential: false}
        ],
        totalCost: 0,
    }

    const nextState = budgetManagerReducer(budgetState, {type: "DELETE_PAID_EXPENSE", expenseId: 4});
    expect(nextState.paidExpenses.length).toBe(1);
    expect(nextState.totalCost).toBe(7);
})



