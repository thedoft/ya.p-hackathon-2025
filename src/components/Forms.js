import React from 'react';
import Select from 'react-select';

import Popup from './Popup.js';
import Registration from './Registration.js'

export default function Forms() {

	return (
			<Popup id="registration" form={Registration}/>
	)

}