import React, { useCallback } from 'react';
import { Form, Button, Checkbox } from 'antd';

const providers = [
    { id: 1, name: 'MTS' },
    { id: 2, name: 'Beeline' },
    { id: 3, name: 'Megafon ' },
    { id: 4, name: 'Tele2' }
];

const locations = [
    { id: 100, name: 'Moscow' },
    { id: 101, name: 'Chelyabinsk' }
];

const CheckboxRow = ({ value, onChange, list }) => {
    const handleChange = useCallback((id) => {
        return (e) => {
            if (e.target.checked) {
                // add id
                if (value.indexOf(id) < 0) {
                    onChange([...value, id]);
                }
            } else {
                // remove id
                onChange(value.filter(valueId => valueId !== id));
            }
        };
    }, [value, onChange]);

    return (
        <div>
            {list.map(item => (
                <Checkbox key={item.id} onChange={handleChange(item.id)} checked={value.indexOf(item.id) >= 0}>
                    {item.name}
                </Checkbox>
            ))}
        </div>
    );
};

const MySuperControl = ({ panel, onRemove }) => {
    return (
        <div>
            <Form.Item name={[panel.name, 'providers']}>
                <CheckboxRow list={providers}/>
            </Form.Item>
            <Form.Item name={[panel.name, 'locations']}>
                <CheckboxRow list={locations}/>
            </Form.Item>
            <Button onClick={onRemove}>
                Remove
            </Button>
        </div>
    )
};

export default MySuperControl;
