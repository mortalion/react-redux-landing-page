export function selectTechnology(technology) {
	// selectTechnology is an ActionCreator. It needs to
	//  return an action, an object with a type property.
	return {
		type: 'TECHNOLOGY_SELECTED',
		payload: technology
	};
}

export function selectLogo(logo) {
	return {
		type: 'LOGO_SELECTED',
		payload: logo
	};
}

/*
	While I have established these two actions here, I have not implemented
	them in this simple site. Later I might add navigating to the company
	website when a logo is selected, or providing a popup with more info
	about a technology when one is selected or hovered over.
*/
