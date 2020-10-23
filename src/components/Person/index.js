import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Input, Collapse } from 'antd';
import MySuperControl from './MySuperControl';

const Person = ({ id }) => {
    const person = useSelector(state => state.people.resources.find(p => p.id === id));

    const initialValues = {
        ...person,
        panels: []
    };

    return (
        <div>
            <a href="#/">&larr; Back</a>
            <Form
                initialValues={initialValues}
                onValuesChange={(changedValues, allValues) => {
                    console.log(JSON.stringify(allValues));
                }}
            >
                <Form.Item
                    name="name"
                    label="Name"
                >
                    <Input/>
                </Form.Item>
                <Form.List name="options">
                    {(panels, { add, remove }) => (
                        <div>
                            <Collapse>
                                {panels.map((panel, index) => (
                                    <Collapse.Panel key={index} header={`Panel #${index}`}>
                                        <MySuperControl
                                            key={index}
                                            panel={panel}
                                            onRemove={() => remove(index)}
                                        />
                                    </Collapse.Panel>
                                ))}
                            </Collapse>
                            <Button onClick={() => add({ providers: [1], locations: [] })}>
                                Add
                            </Button>
                        </div>
                    )}
                </Form.List>
            </Form>
        </div>
    );
};

export default Person;
