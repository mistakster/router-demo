import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Link = ({ id, name }) => {
    const dispatch = useDispatch();

    const handleClick = useCallback((e) => {
        e.preventDefault();
        dispatch(push('/' + id));
    }, [dispatch, id]);

    return (
        <a href={`/${id}`} onClick={handleClick}>
            {name}
        </a>
    );
};


const People = () => {
    const people = useSelector(state => state.people.resources);

    return (
        <ul>
            {people.map(person => (
                <li key={person.id}>
                    <Link id={person.id} name={person.name}/>
                </li>
            ))}
        </ul>
    );
};

export default People;
