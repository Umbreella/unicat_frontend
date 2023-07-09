import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {downloadUserCertificate} from "../../http/api/UserCertificateApi";

const LargeCertiicates = (props) => {
    const {node: data, className} = props.data;

    const downloadFile = async () => {
        const response = await downloadUserCertificate(data.course);

        if (response.status !== 200) {
            return null;
        }

        const url = window.URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${data.title}.pdf`); //or any other extension
        link.click();
    }

    return (
        <Col className={className}>
            <Card className="mb-4">
                <Card.Img variant="top" src={data.preview}/>
                <Card.Body>
                    <Card.Title>
                        {data.title}
                    </Card.Title>
                    <div className="mt-2 mb-2">
                        Дата получения: {data.createdAt}
                    </div>
                    <Button
                        className="col-12"
                        style={{
                            background: "#14bdee",
                            borderColor: "#14bdee",
                        }}
                        onClick={() => downloadFile()}>
                        Скачать
                        <FontAwesomeIcon icon={faDownload}
                                         style={{paddingLeft: 10}}/>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default LargeCertiicates;