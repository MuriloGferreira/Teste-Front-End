import { useState } from 'react';
import axios from 'axios';
import './Newsletter.scss';

const Newsletter = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({ name: false, email: false });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {
            name: !/^\s*[^\s]+(\s+[^\s]+)+\s*$/.test(formData.name),
            email: !/^\S+@\S+\.\S+$/.test(formData.email),
        };
        setErrors(newErrors);
        return !newErrors.name && !newErrors.email;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await axios.post('https://corebiz-test-server.onrender.com/api/v1/newsletter', formData);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const resetForm = () => {
        setFormData({ name: '', email: '' });
        setErrors({ name: false, email: false });
        setIsSubmitted(false);
    };

    return (
        <section className="newsletter">
            {isSubmitted ? (
                <div className="success-message">
                    <h1>Seu e-mail foi cadastrado com sucesso!</h1>
                    <p>A partir de agora você receberá as novidades e ofertas exclusivas.</p>
                    <button className="black-button" onClick={resetForm}>Cadastrar novo e-mail</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="form">
                    <h1>Participe de nossas news com promoções e novidades!</h1>

                    <div className="form-horizontal">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Digite seu nome"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <small>Preencha com seu nome completo</small>}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <small>Preencha com um e-mail válido</small>}
                        </div>
                        <button type="submit" className="black-button">Eu quero!</button>
                    </div>
                </form>
            )}
        </section>
    );
};

export default Newsletter;
