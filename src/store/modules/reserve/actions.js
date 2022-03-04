export function hndleAdd(trips){
    return{
        type:"ADD-RESERVE",
        trips
      }
}

export function handleRemoveReserve(id){
    return{
        type:"REMOVE-RESERVE",
        id
    }
}

export function handleChangeAmount( id, amount ){
    return{
        type: "CHANGE_AMOUT",
        id,
        amount
    }
}