import React, {useCallback, useState} from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    useCreate,
    useNotify,
    ImageInput,
    ImageField,
} from 'react-admin';
import {Modal} from 'react-bootstrap';
import {ToggleButton} from "@mui/material";
import {useTiptapEditor} from "ra-input-rich-text";
import ImageIcon from "@mui/icons-material/Image";
import {imageToBase64} from "../../../http/dataProviders/functions";

const CreateResource = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [create,] = useCreate();
    const notify = useNotify();
    const editor = useTiptapEditor();

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const handleSubmit = useCallback(async (values) => {
        if (values.url !== undefined) {
            addImage(values.url);
            return;
        }

        if (values.file !== undefined) {
            const convertedImage = await imageToBase64(values.file.rawFile);

            create(
                'resources',
                {
                    data: {
                        name: values.file.title,
                        file: convertedImage,
                    },
                },
                {
                    onSuccess: (data) => {
                        addImage(data.file);
                    },
                    onFailure: ({error}) => {
                        notify(error.message, 'error');
                    },
                }
            );
        }
    });

    const addImage = (url) => {
        editor.chain().focus().setImage({src: url}).run();
        handleCloseClick();
    }

    return (
        <>
            <ToggleButton
                title="Image"
                value="left"
                onClick={handleClick}
            >
                <ImageIcon fontSize="inherit"/>
            </ToggleButton>
            <Modal show={showDialog} onHide={handleCloseClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Create>
                        <SimpleForm onSubmit={handleSubmit}>
                            <TextInput source="url" fullWidth/>
                            <ImageInput minSize={5000}
                                        maxSize={5000000}
                                        source="file"
                                        accept="image/*">
                                <ImageField source="src"/>
                            </ImageInput>
                        </SimpleForm>
                    </Create>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CreateResource;