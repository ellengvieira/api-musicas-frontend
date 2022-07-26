function CampoEntrada({ id, label, tipo, readonly, requerido,
    name, value, onchange, msgvalido, msginvalido, maximocaracteres }) {
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input type={tipo}
                readOnly={readonly}
                required={requerido}
                className="form-control"
                id={id}
                name={name}
                value={value}
                onChange={onchange}
                maxLength={maximocaracteres}
            />
            <div className="valid-feedback">
                {msgvalido}
            </div>
            <div className="invalid-feedback">
                {msginvalido}
            </div>
        </div>
    );
}

export default CampoEntrada;