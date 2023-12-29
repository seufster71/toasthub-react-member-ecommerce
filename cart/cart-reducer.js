import reducerUtils from '../../../core/common/reducer-utils';

export default function memberECCartReducer(state = {}, action) {
  switch(action.type) {
    case 'MEMBER_ECCART_INIT': {
    	if (action.responseJson != null && action.responseJson.params != null) {
    	    return Object.assign({}, state, {
    	      	prefTexts: Object.assign({}, state.prefTexts, reducerUtils.getPrefTexts(action)),
				prefLabels: Object.assign({}, state.prefLabels, reducerUtils.getPrefLabels(action)),
				prefOptions: Object.assign({}, state.prefOptions, reducerUtils.getPrefOptions(action)),
				columns: reducerUtils.getColumns(action),
				itemCount: reducerUtils.getItemCount(action),
				items: reducerUtils.getItems(action),
				listLimit: reducerUtils.getListLimit(action),
				listStart: reducerUtils.getListStart(action),
				orderCriteria: [{'orderColumn':'ECCART_TABLE_NAME','orderDir':'ASC'}],
				searchCriteria: [{'searchValue':'','searchColumn':'ECCART_TABLE_NAME'}],
				paginationSegment: 1,
				selected: null,
				isModifyOpen: false,
				isTeamLinkOpen: false,
				pageName:"ECCART",
				isDeleteModalOpen: false,
				errors:null, 
				warns:null, 
				successes:null,
				searchValue:""
    	    });
    	  } else {
    	    return state;
    	  }
    }
    default:
      return state;
  }
}

