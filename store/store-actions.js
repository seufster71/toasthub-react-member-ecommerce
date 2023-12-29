import callService from '../../core/api/api-call';

// action helpers



// thunks
export function init({parent,parentType,statCriteria}) {
	return function(dispatch) {
		let requestParams = {};
    	requestParams.action = "INIT";
		requestParams.service = "ECSTORE_SVC";
		requestParams.prefTextKeys = new Array("ECSTORE_PAGE");
		requestParams.prefLabelKeys = new Array("ECSTORE_PAGE");
		if (statCriteria != null) {
			requestParams.statCritera = statCriteria;
		}
		if (parent != null) {
			requestParams.parentId = parent.id;
			requestParams.parentType = parentType;
			dispatch({type:"ECSTORE_ADD_PARENT", parent, parentType});
		} else {
			dispatch({type:"ECSTORE_CLEAR_PARENT"});
		}
    	let params = {};
    	params.requestParams = requestParams;
    	params.URI = '/api/member/callService';

    	return callService(params).then( (responseJson) => {
      		if (responseJson != null && responseJson.protocalError == null){
				dispatch({ type: "MEMBER_ECSTORE_INIT", responseJson });
			} else {
				actionUtils.checkConnectivity(responseJson,dispatch);
			}
    	}).catch(error => {
      		throw(error);
    	});

  	};
}
