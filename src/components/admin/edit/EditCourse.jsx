import React, {useState} from 'react';
import {
    Edit,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TextInput,
    ImageInput,
    ImageField,
    required,
    TabbedForm,
    Pagination,
    Datagrid,
    TextField,
    RichTextField,
    ReferenceField,
    ReferenceManyField, Button, useRefresh,
} from 'react-admin';
import {RichTextInput} from 'ra-input-rich-text';
import RichTextToolbar from "../toolbars/RichTextToolbar";
import CreateLesson from "../create/CreateLesson";
import {useParams} from "react-router-dom";
import {Modal} from "react-bootstrap";
import EditLesson from "./EditLesson";
import RefreshIcon from "@mui/icons-material/Refresh";
import {formatImage} from "../../../http/dataProviders/functions";

const EditCourse = (props) => {
    const {id: selectedCourseId} = useParams();
    const [selectedLessonId, setSelectedLessonId] = useState(null);
    const refresh = useRefresh();

    const openEditLesson = (id) => {
        setSelectedLessonId(id);
    }

    const closeEditLesson = () => {
        setSelectedLessonId(null);
    }

    return (
        <>
            <Edit {...props}>
                <TabbedForm>
                    <TabbedForm.Tab label="Main">
                        <NumberInput source="count_lectures" disabled/>
                        <NumberInput source="count_independents" disabled/>
                        <ReferenceInput source="category" label="category"
                                        reference="courses/category">
                            <SelectInput optionText="title" optionValue="id"
                                         validate={required()}/>
                        </ReferenceInput>
                        <ReferenceInput source="learning_format"
                                        label="learning_format"
                                        reference="courses/formats">
                            <SelectInput optionText="label" optionValue="id"
                                         validate={required()}/>
                        </ReferenceInput>
                        <ReferenceInput source="teacher"
                                        label="teacher"
                                        reference="user/teachers">
                            <SelectInput optionText="id" optionValue="id"
                                         validate={required()}/>
                        </ReferenceInput>
                        <TextInput source="title"
                                   fullWidth
                                   validate={required()}/>
                        <TextInput source="price"
                                   validate={required()}/>
                    </TabbedForm.Tab>
                    <TabbedForm.Tab label="Body">
                        <ImageInput format={formatImage}
                                    minSize={5000}
                                    maxSize={5000000}
                                    source="preview"
                                    accept="image/*"
                                    validate={required()}>
                            <ImageField source="src"/>
                        </ImageInput>
                        <TextInput label="short_description"
                                   source="short_description"
                                   validate={required()}
                                   fullWidth multiline rows={3}/>
                        <RichTextInput
                            source="body"
                            toolbar={<RichTextToolbar/>}
                            validate={required()}/>
                    </TabbedForm.Tab>
                    <TabbedForm.Tab label="Lessons">
                        <Button
                            variant="raised"
                            onClick={refresh}
                        >
                            <RefreshIcon/>
                        </Button>
                        <ReferenceManyField label="Lessons"
                                            reference="lessons"
                                            target="course"
                                            pagination={<Pagination/>}>
                            <Datagrid title="Questions"
                                      rowClick={(id, resource, record) => {
                                          openEditLesson(id);
                                          return false;
                                      }}>
                                <TextField source="serial_number"/>
                                <TextField source="title"/>
                                <ReferenceField source="lesson_type"
                                                reference="lessons/types">
                                    <TextField source="label"/>
                                </ReferenceField>
                            </Datagrid>
                        </ReferenceManyField>
                        <CreateLesson data={selectedCourseId}/>
                        <Modal show={selectedLessonId !== null}
                               onHide={closeEditLesson}
                               size="lg" fullscreen="lg-down">
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Lesson</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    selectedLessonId !== null &&
                                    <EditLesson data={selectedLessonId} func={closeEditLesson}/>
                                }
                            </Modal.Body>
                        </Modal>
                    </TabbedForm.Tab>
                </TabbedForm>
            </Edit>
        </>
    );
};

export default EditCourse;