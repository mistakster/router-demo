import React from 'react';
import { useSelector } from 'react-redux';

const Person = ({ id }) => {
    const person = useSelector(state => state.people.resources.find(p => p.id === id));

    return (
        <div>
            <a href="#/">&larr; Back</a>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </div>
    );
};

export default Person;
