import { createAction } from "@ngrx/store"


const detailsDomain = '[DetailsComponent]'

export const verifyUser = createAction(`${detailsDomain} Verify User`)
export const removeUser = createAction(`${detailsDomain} Remove User`)