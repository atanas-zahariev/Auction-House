import { createReducer, on } from "@ngrx/store";
import { IDetailsPageState } from "./detail-index";
import { removeUser, verifyUser } from "./details-actions";


export const detailsReducer = createReducer<IDetailsPageState>(

    {
        hasUser:false
    },
    
    on(verifyUser,(state) => {
        return{
            ...state,
            hasUser:true
        }
    }),
    on(removeUser, (state)=>{
        return{
            ...state,
            hasUser:false
        }
    })
)