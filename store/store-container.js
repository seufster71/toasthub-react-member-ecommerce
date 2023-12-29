/*
* Author Edward Seufert
*/
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fuLogger from '../../../core/common/fu-logger';
import ECStoreView from '../../../memberView/ecommerce/store/store-view';

function ECStoreContainer({location,navigate}) {
	const itemState = useSelector((state) => state.ecstore);
	

	fuLogger.log({level:'TRACE',loc:'ECStoreContainer::render',msg:"Hi there"});
    return (
		<ECStoreView
			itemState={itemState}/>
	);
 
}


export default ECStoreContainer;
