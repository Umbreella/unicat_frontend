import React, {useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {downloadUserCertificate} from "../../http/api/UserCertificateApi";
import HorizontalLoader from "../loader/HorizontalLoader";
import html2pdf from "html2pdf.js/src";

const LargeCertificate = (props) => {
    const {node: data, className} = props.data;
    const [Downloading, setDownloading] = useState(false);

    const downloadFile = async () => {
        setDownloading(true);

        const response = await downloadUserCertificate(data.course);
        setDownloading(false);

        if (response.status !== 200) {
            return null;
        }

        const html = await response.data.text();

        var opt = {
            margin: 20,
            filename: 'certificate.pdf',
            jsPDF: {
                orientation: "landscape",
                unit: 'pt',
                format: [842, 595],
            }
        };

        html2pdf().set(opt).from(html).save();
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
                    {
                        Downloading ?
                            <div className="p-3">
                                <HorizontalLoader/>
                            </div> :
                            <Button
                                className="col-12"
                                style={{
                                    borderRadius: 0,
                                    background: "#198654",
                                    borderColor: "#198654",
                                }}
                                onClick={() => downloadFile()}>
                                Скачать
                                <FontAwesomeIcon icon={faDownload}
                                                 style={{paddingLeft: 10}}/>
                            </Button>
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default LargeCertificate;