import React from 'react';
import {Datagrid, DateField, List, TextField, SelectInput} from 'react-admin';

const ListComment = () => {
    return (
        <List filters={[
            <SelectInput
                source="commented_type"
                choices={[
                    {id: '0', name: 'Course comments'},
                    {id: '1', name: 'News comments'},
                    {id: '2', name: 'Event comments'},
                ]}
                alwaysOn/>
        ]}>
            <Datagrid rowClick="edit">
                <TextField source="body"/>
                <DateField source="created_at"/>
            </Datagrid>
        </List>
    );
};

export default ListComment;