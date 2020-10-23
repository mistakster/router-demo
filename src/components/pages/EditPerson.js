import React from 'react';
import Person from '../Person';

const EditPerson = (props) => {
    const id = props?.match?.params?.id;

    return (
        <Person id={id}/>
    );
};

export default EditPerson;
