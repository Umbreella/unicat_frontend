import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    TextField,
    TextInput,
    DateInput,
} from 'react-admin';

const ListPayments = () => {
    const paymentFilters = [
        <TextInput label="Search" source="q" alwaysOn/>,
        <DateInput source="created_at" alwaysOn/>,
    ];

    return (
        <List filters={paymentFilters}>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="user"/>
                <TextField source="course"/>
                <TextField source="amount"/>
                <DateField source="created_at"/>
            </Datagrid>
        </List>
    );
};

export default ListPayments;