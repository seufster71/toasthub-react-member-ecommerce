/*
 * Copyright (C) 2020 The ToastHub Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import reducerUtils from '../../../core/common/reducer-utils';

export default function memberECMarketReducer(state = {}, action) {
  	switch(action.type) {
    	case 'EC_MARKET_INIT': {
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
					orderCriteria: [{'orderColumn':'EC_MARKET_TABLE_TITLE','orderDir':'ASC'}],
					searchCriteria: [{'searchValue':'','searchColumn':'EC_MARKET_TABLE_TITLE'}],
					paginationSegment: 1,
					selected: null,
					inputFields:null,
					view: "MAIN",
					pageName:"EC_MARKET",
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
    	case 'EC_MARKET_LIST': {
			if (action.responseJson != null && action.responseJson.params != null) {
				return Object.assign({}, state, {
					itemCount: reducerUtils.getItemCount(action),
					items: reducerUtils.getItems(action),
					listLimit: reducerUtils.getListLimit(action),
					listStart: reducerUtils.getListStart(action),
					paginationSegment: action.paginationSegment,
					selected: null,
					inputFields:null,
					view: "MAIN",
					isDeleteModalOpen: false,
					errors:null, 
					warns:null, 
					successes:null
				});
			} else {
				return state;
			}
		}
		case 'EC_MARKET_INPUT_CHANGE': {
			return reducerUtils.updateInputChange(state,action);
		}
		case 'EC_MARKET_CLEAR_FIELD': {
			return reducerUtils.updateClearField(state,action);
		}
		case 'EC_MARKET_LISTLIMIT': {
			return reducerUtils.updateListLimit(state,action);
		}
		case 'EC_MARKET_SEARCH': { 
			return reducerUtils.updateSearch(state,action);
		}
		case 'EC_MARKET_SEARCH_CHANGE': { 
			return reducerUtils.updateSearchChange(state,action);
		}
		case 'EC_MARKET_ORDERBY': { 
			return reducerUtils.updateOrderBy(state,action);
		}
		case 'EC_MARKET_SET_ERRORS': {
			return Object.assign({}, state, {
				errors: action.errors
			});
		}
		case 'EC_MARKET_CLOSE_DELETE_MODAL': {
			return Object.assign({}, state, {
				isDeleteModalOpen: false
			});
		}
		case 'EC_MARKET_OPEN_DELETE_MODAL': {
			return Object.assign({}, state, {
				isDeleteModalOpen: true,
				selected: action.item
			});
		}
		case 'EC_MARKET_CANCEL': {
			return Object.assign({}, state, {
				view: "MAIN",
				selected:null,
				inputFields:null
			});
		}
    	default:
     	 return state;
  	}
}

