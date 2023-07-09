import React from 'react';
import {Datagrid, DateField, List, NumberField} from 'react-admin';

const ListDiscount = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="percent" />
                <DateField source="start_date" showTime/>
                <DateField source="end_date" showTime/>
            </Datagrid>
        </List>
    );
};

export default ListDiscount;