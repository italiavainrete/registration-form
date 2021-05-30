import * as React from 'react'
import './styles.scss'

export type IRegistrationFormProps = {
    sourceType: string,
    sourceId: string
}

export type IInputData = {
    name: string,
    value: string
}

export type IFormData = {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    privacy: boolean
}

const { useState, useReducer } = React

const formReducer = (state, event: IInputData) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

const RegistrationForm: React.FC<IRegistrationFormProps> = ({ sourceType, sourceId }) => {
    const [ formData , setFormData] = useReducer(formReducer, {})
    const [ submitting, setSubmitting ] = useState(false);
    
    const handleSubmit = event => {
        event.preventDefault()
        
        setSubmitting(true)
        console.log(formData)

        setTimeout(() => {
            setSubmitting(false)
        }, 3000)
    }

    const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setFormData({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value,
        })
    }

    return (
        <div className="wrapper">
            { submitting && <p>Invio dati in corso ...</p>}
            { !submitting &&
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="source_type" value={sourceType} />
                <input type="hidden" name="source_id" value={sourceId} />
                <fieldset disabled={submitting}>
                    <label>
                        <p>Nome</p>
                        <input name="firstname" onChange={handleChange} value={formData.firstname || ''}/>
                    </label>
                    <label>
                        <p>Cognome</p>
                        <input name="lastname" onChange={handleChange} value={formData.lastname || ''} />
                    </label>

                    <label>
                        <p>Email</p>
                        <input name="email" onChange={handleChange} value={formData.email || ''} />
                    </label>

                    <label>
                        <p>Cellulare</p>
                        <input name="phone" onChange={handleChange} value={formData.phone || ''} />
                    </label>
                </fieldset>

                <fieldset disabled={submitting}>
                <label>
                    <p>Indirizzo</p>
                    <input name="address" onChange={handleChange} value={formData.address || ''} />
                </label>

                <label>
                    <p>Città</p>
                    <input name="city" onChange={handleChange} value={formData.city || ''} />
                </label>
                </fieldset>

                <label>
                    <p>Ho letto e accetto l'<a href="">Informativa Privacy</a> </p>
                    <input type="checkbox" name="privacy" onChange={handleChange} checked={formData['privacy'] || false} />
                </label>

                <button disabled={submitting} type="submit">Registrati</button>
            </form>
            }
        </div>
    )
}

export default RegistrationForm