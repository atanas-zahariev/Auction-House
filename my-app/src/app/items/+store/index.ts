export interface ICatalogPageState{
   isLengt:boolean
}

export interface IUserClosedOffersPage{
    hasClosed:boolean
}


export interface IItemsState{
    catalog:ICatalogPageState,
    closed: IUserClosedOffersPage
}


export interface IItemsModuleState{
    items:IItemsState
}