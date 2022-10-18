const Input = ({name,type,value,onchange,error,label}) => {
    return ( 
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input 
                name={name} 
                onChange={onchange} 
                id={name} 
                type={type} 
                className="form-control" 
                value={value}/>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;