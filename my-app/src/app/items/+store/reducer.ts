import { createReducer, on } from "@ngrx/store";
import { ICatalogPageState, IUserClosedOffersPage } from ".";
import { userClosedOffersLength, verifyLength } from "./actions";


export const catalogReducer = createReducer<ICatalogPageState>(
    {
        isLengt:false
    },
    on(verifyLength,(state,action) => {
        return {
            ...state,
            isLengt:true
        }
    })
)

export const userClosedOffersReducer = createReducer<IUserClosedOffersPage>(
    {
        hasClosed:false
    },
    on(userClosedOffersLength,(state) => {
       return{
        ...state,
        hasClosed:true
       }
    })
)