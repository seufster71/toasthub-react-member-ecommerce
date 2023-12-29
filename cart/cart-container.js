/*
* Author Edward Seufert
*/
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fuLogger from '../../../core/common/fu-logger';
import ECCartView from '../../../memberView/ecommerce/cart/cart-view';

function ECCartContainer({location,navigate}) {
	const itemState = useSelector((state) => state.eccart);
	

	fuLogger.log({level:'TRACE',loc:'ECCartContainer::render',msg:"Hi there"});
    return (
		<ECCartView
			itemState={itemState}/>
	);
 
}


export default ECCartContainer;
