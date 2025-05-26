
import { Document, Page, pdfjs } from "react-pdf";
import Modal from "react-modal";
import PdfFile from "../../../assets/naveen_resume.pdf";
import PdfCertificate from "../../../assets/FITA-certificate.pdf";
import { Icon } from "@iconify/react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useEffect, useState } from "react";


function PdfDownloader() {
    


    const [numPages, setNumPages] = useState(null);
    const [modelIsOpen, setModelIsOpen] = useState(false);
    const [modelIs, setModelIs] = useState(false);

    function onDocumentSuccess() {
        setNumPages(numPages);
    }
    function openModel() {
        setModelIsOpen(true);
    }

    function closeModel() {
        setModelIsOpen(false);
    }
    function openModelC() {
        setModelIs(true);
    }

    function closeModelC() {
        setModelIs(false);
    }
    function downloadResume() {
        var link1 = document.createElement("a");
        link1.href = PdfFile;
        link1.download = "Naveen-Resume.pdf";
        document.body.appendChild(link1);
        link1.click();
        document.body.removeChild(link1);
    }

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, []);


    return (
        <div className="naveen-resume">
            <div className="naveen-resume-newadjust">
                <button className="naveen-resume-button new-one slide-in-text" onClick={openModel}>
                    <Icon icon="lets-icons:view" width="20" height="20" />
                    <span></span>
                    Resume
                </button>
                <button className="naveen-resume-button slide-in-text" onClick={openModelC}>
                    <Icon icon="lets-icons:view" width="20" height="20" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Certificate
                </button>
            </div>
            <Modal
                className={"naveen-adjust-resume"}
                isOpen={modelIsOpen}
                onRequestClose={closeModel}
                contentLabel="PDF Modal"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                        width: "80%",
                        height: "80%",
                        margin: "auto",
                    },
                }}
            >
                <Document className={"naveentextlayer"} renderMode={"canvas"} renderTextLayer={false} file={PdfFile} onLoadSuccess={onDocumentSuccess}>
                    <Page className={"naveen-page-pdf"} pageNumber={1} renderAnnotationLayer={false} />
                </Document>
                <button className="naveen-resume-close" onClick={closeModel}><Icon icon="zondicons:close-outline" /></button>
                <button className="naveen-resume-download" onClick={downloadResume}>
                    <Icon icon="uil:download-alt" width="20" height="20" />
                    Download
                </button>
            </Modal>
            <Modal
                className={"naveen-adjust-resume"}
                isOpen={modelIs}
                onRequestClose={openModelC}
                contentLabel="PDF Modal"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                        width: "80%",
                        height: "80%",
                        margin: "auto",
                    },
                }}
            >
                <Document className={"naveentextlayer"} renderMode={"canvas"} renderTextLayer={false} file={PdfCertificate} onLoadSuccess={onDocumentSuccess}>
                    <Page className={"naveen-page-pdf"} pageNumber={1} renderAnnotationLayer={false} />
                </Document>
                <button className="naveen-resume-close" onClick={closeModelC}><Icon icon="zondicons:close-outline" /></button>
            </Modal>
        </div>
    )
}

export default PdfDownloader