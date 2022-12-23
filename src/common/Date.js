export function Dateform(props) {
    return (
        <>
            <div className="date-wrap">
                <label className="d-flex">{props.titlelabel}</label>
                <div className="main-label">
                    <label className="form-label">{props.formlabel}</label>
                    <input type="date" />
                </div>
            </div>
        </>
    )
}