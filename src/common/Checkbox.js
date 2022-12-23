import Form from 'react-bootstrap/Form'
export function Checkbox({ id, ...props }) {
    return (
        <>
            <div className='check-input'>
                <input type="checkbox" id={id} />
                <label for={id}>{props.office}</label>
            </div>
        </>
    );
}