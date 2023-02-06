import { render, screen } from "@testing-library/react"
import { Expense } from "../reducers/budget-manager-reducer"
import { UnpaidExpensesList} from "../unpaid-expenses-list" 


test("Display expenses", async () => {
    const expenses: Expense[] = [
        {    
            id: 21,
            name: "jacket",
            cost: 120,
            isEssential: false
        },
        {    
            id: 22,
            name: "sweater",
            cost: 40,
            isEssential: true
        },
        {    
            id: 23,
            name: "hat",
            cost: 15,
            isEssential: false
        },
    ]

    // missing render test
    // render(<UnpaidExpensesList unpaidExpenses={expenses}/>)
    const elementJacket = await screen.findByText(/jacket/);
    const elementSweater= await screen.findByText(/sweater/);
    const elementHat = await screen.findByText(/hat/);

    expect(elementJacket.innerHTML).toBe("jacket");
    expect(elementSweater.innerHTML).toBe("sweater");
    expect(elementHat.innerHTML).toBe("hat");

})