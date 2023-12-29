 /*
* Author Edward Seufert
*/
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './market-actions';
import fuLogger from '../../../core/common/fu-logger';
import ECMarketView from '../../../memberView/ecommerce/market/market-view';
import BaseContainer from '../../../core/container/base-container';

function ECMarketContainer({location,navigate}) {
	const itemState = useSelector((state) => state.ecmarket);
	const session = useSelector((state) => state.session);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	

	useEffect(() => {
		dispatch(actions.init({lang:session.selected.lang}));
	}, []);
	
	
	const onListLimitChange = (fieldName,event) => {
		BaseContainer.onListLimitChange({state:itemState,actions:actions,dispatch:dispatch,appPrefs:appPrefs,fieldName,event});
	}
	const onPaginationClick = (value) => {
		BaseContainer.onPaginationClick({state:itemState,actions:actions,dispatch:dispatch,value});
	}
	const onSearchChange = (field,event) => {
		BaseContainer.onSearchChange({state:itemState,actions:actions,dispatch:dispatch,appPrefs:appPrefs,field,event});
	}
	const onSearchClick = (field,event) => {
		BaseContainer.onSearchClick({state:itemState,actions:actions,dispatch:dispatch,field,event});
	}
	const inputChange = (type,field,value,event) => {
		BaseContainer.inputChange({state:itemState,actions:actions,dispatch:dispatch,appPrefs:appPrefs,type,field,value,event});
	}
	const onOrderBy = (field,event) => {
		BaseContainer.onOrderBy({state:itemState,actions:actions,dispatch:dispatch,appPrefs:appPrefs,field,event});
	}
	const onSave = () => {
		BaseContainer.onSave({state:itemState,actions:actions,dispatch:dispatch,appPrefs:appPrefs,form:"PM_PRODUCT_FORM"});
	}
	const closeModal = () => {
		BaseContainer.closeModal({actions:actions,dispatch:dispatch});
	}
	const onCancel = () => {
		BaseContainer.onCancel({state:itemState,actions:actions,dispatch:dispatch});
	}
	const onBlur = (field) => {
		BaseContainer.onCancel({state:itemState,actions:actions,dispatch:dispatch,field});
	}
	
	const onOption = (code,item) => {
		fuLogger.log({level:'TRACE',loc:'ECMarketContainer::onOption',msg:" code "+code});
		if (BaseContainer.onOptionBase({state:itemState,actions:actions,dispatch:dispatch,code:code,appPrefs:appPrefs,item:item})) {
			return;
		}
		let newPath = location.pathname.substr(0, location.pathname.lastIndexOf("/"));
		switch(code) {
			case 'STORE': {
				newPath = newPath + "/ec-store";
				navigate(newPath,{state:{parent:item,parentType:"STORE"}});
				break;
			}
		}
	}

	fuLogger.log({level:'TRACE',loc:'ECMarketContainer::render',msg:"Hi there"});
	if (itemState.view == "MAIN" && itemState.items != null) {
		return (
			<ECMarketView
			itemState={itemState}
			appPrefs={appPrefs}
			onListLimitChange={onListLimitChange}
			onSearchChange={onSearchChange}
			onSearchClick={onSearchClick}
			onPaginationClick={onPaginationClick}
			onOrderBy={onOrderBy}
			closeModal={closeModal}
			onOption={onOption}
			inputChange={inputChange}
			session={session}
			/>
		);
	} else {
		return (<div> Loading... </div>);
	}
 
}


export default ECMarketContainer;
