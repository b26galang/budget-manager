import { Expense, BudgetManagerAction } from "./reducers/budget-manager-reducer"


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

const paidStyle: React.CSSProperties = {
    backgroundColor: "white",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "4px",
    border: "1px solid black",
    padding: "2px 20px"
}

type UnpaidExpensesProps = {
    unpaidExpenses: Expense[],
    dispatch: React.Dispatch<BudgetManagerAction>
}


export function UnpaidExpensesList(props: UnpaidExpensesProps) {

    return <>

        {props.unpaidExpenses.map(e => <tr>
            <td style={tdStyle}>{`${e.name}`}</td> 
            <td style={tdStyle}>{`$${e.cost}`}</td> 

            {e.isEssential === true ? <>
            <td style={tdStyle}>Essential</td>
            </>: <td style={notEssential}>Not Essential</td>}


            <td style={tdStyle}>
                <button style={paidStyle} onClick={() => props.dispatch({ type: "MARK_PAID", expenseId: e.id })}>Paid</button></td>
            <td style={tdStyle}>
                <button style={btnStyle} onClick={() => props.dispatch({ type: "DELETE_UNPAID_EXPENSE", expenseId: e.id })}>x</button>
            </td></tr>)}
            

    </>

}