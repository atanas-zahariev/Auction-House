import { createAction } from "@ngrx/store"


const profileDomain = '[CatalogComponent]'

export const verifyLength = createAction(`${profileDomain} Verify Length`)

export const userClosedOffersLength = createAction(`${profileDomain} User Closed Offers`)