import { BudgetManagerAction, Expense } from "./reducers/budget-manager-reducer"


const tdStyle: React.CSSProperties = {
    color: "white",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "20px",
}

const notEssential: React.CSSProperties = {
    color: "#fd3e81",
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Nunito Sans, sans-serif"
}

const btnStyle: React.CSSProperties = {
    backgroundColor: "#aa1155",
    color: "white",
    border: "1px solid white",
    fontWeight: "bold",
    fontSize: "16px",
    borderRadius: "4px"
}

type PaidExpensesProps = {
    paidExpenses: Expense[],
    dispatch: React.Dispatch<BudgetManagerAction>
}

export function PaidExpensesList(props: PaidExpensesProps) {

    return <>

{props.paidExpenses.map(e => <tr>
            <td style={tdStyle}>{`${e.name}`}</td> 
            <td style={tdStyle}>{`$${e.cost}`}</td> 
            
            {e.isEssential === true ? <>
            <td style={tdStyle}>Essential</td>
            </>: <td style={notEssential}>Not Essential</td>}

        <button style={btnStyle} onClick={() => props.dispatch({ type: "DELETE_PAID_EXPENSE", expenseId: e.id })}>x</button></tr>)}

    </>

}