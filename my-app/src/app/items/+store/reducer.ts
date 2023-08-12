import { createReducer, on } from "@ngrx/store";
import { ICatalogPageState } from ".";
import { verifyLength } from "./actions";


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