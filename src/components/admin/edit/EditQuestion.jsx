import React, {useState} from 'react';
import {
    Datagrid,
    Edit, Pagination,
    ReferenceInput, ReferenceManyField,
    required, SelectInput,
    SimpleForm, TextField,
    TextInput, BooleanField, useEditController, Button, useRefresh,
} from 'react-admin';
import {RichTextInput} from "ra-input-rich-text";
import RichTextToolbar from "../toolbars/RichTextToolbar";
import {Modal} from "react-bootstrap";
import EditAnswer from "./EditAnswer";
import CreateAnswer from "../create/CreateAnswer";
import RefreshIcon from "@mui/icons-material/Refresh";

const EditQuestion = (props) => {
    const {selectedQuestionId} = props.data;
    const closeEditQuestion = props.func;
    const {record, save, isLoading} = useEditController({
        resource: 'lessons/questions',
        id: selectedQuestionId,
        redirect: '',
    });
    const [selectedAnswerId, setSelectedAnswerId] = useState(null);
    const refresh = useRefresh();

    const handleClick = (id) => {
        setSelectedAnswerId(id);
    };

    const handleCloseClick = () => {
        setSelectedAnswerId(null);
    };

    const overrideSave = (record) => {
        save(record);
        closeEditQuestion();
    }

    if (isLoading) {
        return <></>;
    }

    return (
        <SimpleForm record={record}
                    onSubmit={(record) => overrideSave(record)}>
            <ReferenceInput source="question_type"
                            label="question_type"
                            reference="lessons/questions/types">
                <SelectInput optionText="label" optionValue="id"
                             validate={required()}/>
            </ReferenceInput>
            <RichTextInput
                source="body"
                toolbar={<RichTextToolbar/>}
                validate={required()}/>
            {
                record.question_type !== 3 &&
                <Button
                    variant="raised"
                    onClick={refresh}
                >
                    <RefreshIcon/>
                </Button>
            }
            <ReferenceManyField label="Answers"
                                reference="lessons/questions/answers"
                                target="question"
                                pagination={<Pagination/>}>
                <Datagrid title="Answers"
                          rowClick={(id, resource, record) => {
                              handleClick(id);
                              return false;
                          }}>
                    <TextField source="value"/>
                    <BooleanField source="is_true"/>
                </Datagrid>
            </ReferenceManyField>
            {
                record.question_type !== 3 &&
                <CreateAnswer data={selectedQuestionId}/>
            }
            <Modal show={selectedAnswerId !== null} onHide={handleCloseClick}
                   size="lg" fullscreen="lg-down">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        {
                            selectedAnswerId !== null &&
                            <EditAnswer data={selectedAnswerId}
                                        func={handleCloseClick}/>
                        }
                    </>
                </Modal.Body>
            </Modal>
        </SimpleForm>
    );
};

export default EditQuestion;