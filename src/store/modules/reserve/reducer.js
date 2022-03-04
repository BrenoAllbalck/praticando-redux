import produce from "immer"
export default function reserve( state = [], action ){

	switch( action.type ){
		case "ADD-RESERVE":
			return produce( state, draft =>{
				const tripIndex = draft.findIndex( trip => trip.id === action.trips.id );

				if( tripIndex >= 0 ){
					draft[tripIndex].amount += 1
				}else{
					draft.push({
						...action.trips,
						amount:1,
					});
				}

			});
			case "REMOVE-RESERVE":
				return produce( state, draft =>{
					const tripIndex = draft.findIndex( trip => trip.id === action.id );

					if( tripIndex >= 0 ){
						draft.splice(tripIndex, 1)
					}
				});
			case "CHANGE_AMOUT":{
					if( action.amount <= 0 ){
						return state
					}
					return produce( state, draft =>{
						const idINdex = draft.findIndex( trip => trip.id === action.id );
						if( idINdex >= 0  ){
							draft[idINdex].amount = Number(action.amount)
						}
	
					} )
			}

			default: 
				return state
	}
}