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
