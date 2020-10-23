import people from './data/swapi-people.json';

const INITIAL_STATE = {
    resources: people.map(person => ({
        ...person,
        id: person.name.toLowerCase().replaceAll(/\s+/g, '-'),
    }))
};

export default function peopleReducer(state, action) {
    if (typeof state === 'undefined') {
        return INITIAL_STATE;
    }

    switch (action.type) {
        case 'ADD_PERSON':
            return {
                ...state,
                resources: [
                    ...state.resources,
                    action.payload
                ]
            };
        default:
            return state;
    }
}
