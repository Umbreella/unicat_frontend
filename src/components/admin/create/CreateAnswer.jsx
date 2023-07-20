import React, {useCallback, useState} from 'react';
import {
    BooleanInput,
    Button,
    Create,
    SimpleForm,
    TextInput,
    useCreate,
    useNotify,
} from "react-admin";
import AddIcon from "@mui/icons-material/Add";
import {Modal} from "react-bootstrap";

const CreateAnswer = (props) => {
    const selectedQuestionId = props.data;
    const addAnswer = props.func;
    const [showDialog, setShowDialog] = useState(false);
    const [create,] = useCreate();
    const notify = useNotify();

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const handleSubmit = useCallback(async (values) => {
        const answerEmpty = {
            value: values.value,
            is_true: values.is_true,
        }

        if (addAnswer !== undefined) {
            addAnswer(answerEmpty);
            handleCloseClick();
            return null;
        }

        create(
            'lessons/questions/answers',
            {
                data: {
                    ...answerEmpty,
                    question: selectedQuestionId,
                },
            },
            {
                onSuccess: (data) => {
                    handleCloseClick();
                },
                onFailure: ({error}) => {
                    notify(error.message, 'error');
                },
            }
        );
    });

    return (
        <>
            <Button
                variant="raised"
                label="Add answer"
                onClick={handleClick}
            >
                <AddIcon/>
            </Button>
            <Modal show={showDialog} onHide={handleCloseClick}
                   size="lg" fullscreen="lg-down">
                <Modal.Header closeButton>
                    <Modal.Title>Add Answer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Create>
                        <SimpleForm onSubmit={handleSubmit}>
                            <TextInput source="value" fullWidth/>
                            <BooleanInput source="is_true"/>
                        </SimpleForm>
                    </Create>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CreateAnswer;