import './label.estilos.css'

export function Label({ children, htmlForm }) {
    return (
        <label htmlFor={htmlForm} className='label'>
            {children}
        </label>
    )
}