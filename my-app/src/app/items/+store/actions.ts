import { createAction } from "@ngrx/store"


const catalogDomain = '[CatalogComponent]'

const userClosedDomain = '[UserClosedComponent]'

export const verifyLength = createAction(`${catalogDomain} Verify Length`)

export const userClosedOffersLength = createAction(`${userClosedDomain} User Closed Offers`)