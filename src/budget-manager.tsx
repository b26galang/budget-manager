import { useReducer, useState } from "react"
import { PaidExpensesList } from "./paid-expenses-list";
import { budgetManagerReducer, BudgetManagerState } from "./reducers/budget-manager-reducer"
import { UnpaidExpensesList } from "./unpaid-expenses-list";
import "./font.css";


const textStyle: React.CSSProperties = {
    color: "#c1d7c3",
    fontFamily: "Nunito Sans, sans-serif"
}

const labelStyle: React.CSSProperties = {
    color: "#c1d7c3",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "20px",
    fontWeight: "bold"
}

const inputStyle: React.CSSProperties = {
    fontSize: "17px",
    height: "25px",
    width: "150px",
    marginRight: "20px",
    fontFamily: "Nunito Sans, sans-serif",
    fontWeight: "bold"
}

const addBtn: React.CSSProperties = {
    backgroundColor: "white",
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "4px",
    border: "1px solid black",
    height: "35px",
    padding: "2px 20px"
}

const tableStyle1: React.CSSProperties = {
    textAlign: "center",
    width: "450px",
    margin: "30px auto"
}

const tableStyle2: React.CSSProperties = {
    textAlign: "center",
    width: "380px",
    margin: "30px auto"
}


const initialState: BudgetManagerState = {
    expenseNameInput: "",
    expenseCostInput: 0,
    isEssentialInput: false,
    unpaidExpenses: [],
    paidExpenses: [],
    totalCost: 0
}

export function BudgetManager() {

    const [budgetManagerState, dispatch] = useReducer(budgetManagerReducer, initialState);


    function handleEssential(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SET_IS_ESSENTIAL", payload: event.target.checked })
    }

    return <div style={{ backgroundColor: "#164850", minHeight: "1000px", maxHeight: "100%" }}>

        <div style={{ textAlign: "center", padding: "10rem" }}>

            <h1 style={textStyle}>Budget Manager</h1>
            <label style={labelStyle} htmlFor="expense">Expense Name: &nbsp;</label>
            <input style={inputStyle} id="expense" type="text" onChange={(e) => dispatch({ type: "SET_EXPENSE_NAME", payload: e.target.value })} />

            <label style={labelStyle} htmlFor="cost">Cost : &nbsp; $</label>
            <input style={inputStyle} id="cost" type="number" onChange={(e) => dispatch({ type: "SET_EXPENSE_COST", payload: Number(e.target.value) })} />

            <label style={labelStyle} htmlFor="isEssential">Essential </label>
            <input style={{ marginRight: "20px" }} type="checkbox" id="isEssential" name="essential" onChange={handleEssential} />

            <button style={addBtn} onClick={() => dispatch({ type: "ADD_EXPENSE" })}>Add</button>
            <br></br>
            <br></br>
            <br></br>
            
            <h2 style={textStyle}>Unpaid Expenses</h2>
            <table style={tableStyle1}>
                <UnpaidExpensesList unpaidExpenses={budgetManagerState.unpaidExpenses} dispatch={dispatch} />
            </table>

            <br></br>
            <h2 style={textStyle}>Paid Expenses</h2>
            <table style={tableStyle2}>
                <PaidExpensesList paidExpenses={budgetManagerState.paidExpenses} dispatch={dispatch} />
            </table>
            <br></br>
            <br></br>

            <h2 style={textStyle}>Total Cost : <span style={{color: "#fd3e81"}}>$ {budgetManagerState.totalCost}</span></h2>
        </div>

    </div>
}