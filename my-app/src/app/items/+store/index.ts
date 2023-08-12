export interface ICatalogPageState{
   isLengt:boolean
}


export interface IItemsState{
    catalog:ICatalogPageState
}


export interface IItemsModuleState{
    items:IItemsState
}