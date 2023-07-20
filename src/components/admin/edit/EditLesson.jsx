import React, {useState} from 'react';
import {
    FunctionField,
    TextInput,
    FormDataConsumer,
    required,
    ReferenceManyField,
    Datagrid,
    TextField,
    RichTextField,
    ReferenceField,
    Pagination,
    SimpleForm,
    useEditController,
    Button,
    useRefresh,
    NumberInput,
} from 'react-admin';
import {RichTextInput} from "ra-input-rich-text";
import RichTextToolbar from "../toolbars/RichTextToolbar";
import CreateQuestion from "../create/CreateQuestion";
import EditQuestion from "./EditQuestion";
import {Modal} from "react-bootstrap";
import RefreshIcon from '@mui/icons-material/Refresh';

const EditLesson = (props) => {
    const selectedLessonId = props.data;
    const closeEditLesson = props.func;
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const {record, save, isLoading} = useEditController({
        resource: 'lessons',
        id: selectedLessonId,
        redirect: '',
    });
    const refresh = useRefresh();

    const openEditQuestion = (id) => {
        setSelectedQuestionId(id);
    };

    const closeEditQuestion = () => {
        setSelectedQuestionId(null);
    };

    const overrideSave = (record) => {
        let clear_record = record;

        if (record.lesson_type !== 2) {
            delete clear_record.body;
        }

        if (record.lesson_type !== 3) {
            delete clear_record.questions;
        }

        save(clear_record);
        closeEditLesson();
    }

    if (isLoading) {
        return <></>
    }

    return (
        <SimpleForm record={record}
                    onSubmit={(record) => overrideSave(record)}>
            <ReferenceField label="Lesson Type" source="lesson_type"
                            reference="lessons/types">
                <FunctionField className="w-100 mb-4"
                               render={(record) =>
                                   <div style={{
                                       color: "rgb(170, 170, 170)",
                                       paddingLeft: 12,
                                       paddingRight: 12,
                                       paddingBottom: 4,
                                       background: "#e0e0e0",
                                   }}>
                                       <div style={{
                                           fontSize: 12,
                                           lineHeight: "23px"
                                       }}>
                                           Lesson Type
                                       </div>
                                       <div style={{fontSize: 16,}}>
                                           {record.label}
                                       </div>
                                   </div>
                               }/>
            </ReferenceField>
            <NumberInput source="serial_number" min={1} step={1}/>
            <ReferenceField label="Parent" source="parent" reference="lessons">
                <FunctionField className="w-100 mb-4"
                               render={(record) =>
                                   <div style={{
                                       color: "rgb(170, 170, 170)",
                                       paddingLeft: 12,
                                       paddingRight: 12,
                                       paddingBottom: 4,
                                       background: "#e0e0e0",
                                   }}>
                                       <div style={{
                                           fontSize: 12,
                                           lineHeight: "23px"
                                       }}>
                                           Parent
                                       </div>
                                       <div style={{fontSize: 16,}}>
                                           {record.title}
                                       </div>
                                   </div>
                               }/>
            </ReferenceField>
            <TextInput source="title" fullWidth/>
            <FormDataConsumer>
                {({formData, ...rest}) =>
                    <>
                        {
                            formData.lesson_type === 2 &&
                            <RichTextInput
                                source="body"
                                toolbar={<RichTextToolbar/>}
                                validate={required()}/>
                        }
                        {
                            formData.lesson_type === 3 &&
                            <>
                                <Button
                                    variant="raised"
                                    onClick={refresh}
                                >
                                    <RefreshIcon/>
                                </Button>
                                <ReferenceManyField label="Questions"
                                                    reference="lessons/questions"
                                                    target="lesson_id"
                                                    pagination={
                                                        <Pagination/>}>
                                    <Datagrid title="Questions"
                                              rowClick={(id, resource, record) => {
                                                  openEditQuestion(id);
                                                  return false;
                                              }}>
                                        <RichTextField source="body"
                                                       stripTags/>
                                        <ReferenceField
                                            source="question_type"
                                            reference="lessons/questions/types">
                                            <TextField source="label"/>
                                        </ReferenceField>
                                    </Datagrid>
                                </ReferenceManyField>
                                <CreateQuestion data={formData.id}/>
                            </>
                        }
                    </>
                }
            </FormDataConsumer>
            <Modal show={selectedQuestionId !== null}
                   onHide={closeEditQuestion}
                   size="lg" fullscreen="lg-down">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Question</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        {
                            selectedQuestionId !== null &&
                            <EditQuestion
                                data={{selectedQuestionId: selectedQuestionId,}}
                                func={closeEditQuestion}/>
                        }
                    </>
                </Modal.Body>
            </Modal>
        </SimpleForm>
    );
};

export default EditLesson;