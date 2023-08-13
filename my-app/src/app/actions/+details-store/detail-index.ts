export interface IDetailsPageState{
    hasUser:boolean
}

export interface IActionsSate{
    details:IDetailsPageState
}

export interface IActionsModuleState{
    actions:IActionsSate
}