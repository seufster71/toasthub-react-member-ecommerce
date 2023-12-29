import callService from '../../core/api/api-call';

// action helpers



// thunks
export function init({parent,parentType,statCriteria}) {
	return function(dispatch) {
		let requestParams = {};
    	requestParams.action = "INIT";
		requestParams.service = "ECCART_SVC";
		requestParams.prefTextKeys = new Array("ECCART_PAGE");
		requestParams.prefLabelKeys = new Array("ECCART_PAGE");
		if (statCriteria != null) {
			requestParams.statCritera = statCriteria;
		}
		if (parent != null) {
			requestParams.parentId = parent.id;
			requestParams.parentType = parentType;
			dispatch({type:"ECCART_ADD_PARENT", parent, parentType});
		} else {
			dispatch({type:"ECCART_CLEAR_PARENT"});
		}
    	let params = {};
    	params.requestParams = requestParams;
    	params.URI = '/api/admin/callService';

    	return callService(params).then( (responseJson) => {
      		if (responseJson != null && responseJson.protocalError == null){
				dispatch({ type: "MEMBER_ECCART_INIT", responseJson });
			} else {
				actionUtils.checkConnectivity(responseJson,dispatch);
			}
    	}).catch(error => {
      		throw(error);
    	});

  	};
}
