import { Dateform } from "./Date";
import { Textarea } from "./textarea";

export const PopupModal = ({ schema, show, onClose }) => {
    const { titleModal, customBody } = schema
    if (!show) {
        return null
    }
    const renderHeader = () => {
        return (
            <>
                <div className="modal-header">
                    <h4 className="modal-title">{titleModal}</h4>
                    <button onClick={onClose} className="btn-close"></button>
                </div>
            </>
        );
    }

    const renderButton = () => {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='d-flex common-btn'>
                                <a href="#" className='main-cancel-btn' onClick={onClose}>Cancel</a>
                                <a href="#" className='main-btn'>Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="modal-wrapper">
                <div className="modal-content">
                    {renderHeader()}
                    {customBody}
                    {renderButton()}
                </div>
            </div>
        </>
    );
}