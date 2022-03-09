export const VisibilityControl = props => {
    return (
        <div className="form-check" >
            <input 
            type="checkbox"
            className="form-check-input"
            checked={props.isChecked}
            onChange={e => props.llamando(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                Mostrar {props.description}
            </label>
        </div>
    )
}