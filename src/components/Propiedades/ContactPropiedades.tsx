import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import './propiedades.css'
import fieldBackground from '../../assets/fieldBackground.jpg'

export default function ContactPropiedades() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const serviceId = 'service_5vw2t4a';
        const templateId = 'template_whezjtj';
        const publicKey = '4rrNmxoenTf-hATTF';

        const templateParams = {
            form_name: name,
            form_email: email,
            form_message: message,            
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent succesfully', response)
            setName('')
            setEmail('')
            setMessage('')
        })
        .catch((error) => {
            console.log('Error sending email', error)
        })
    }

    return (
      <div className="contact-form-container" style={{backgroundImage: `url(${fieldBackground})`}}>
        <h2 className="contact-form-title">
        Si está insteresado en alguna propiedad, no dude en contactarnos
        </h2>
        <form action="" className="contact-form-props" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Nombre y apellido"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              value={message}
              placeholder="Ingrese su mensaje o consulta"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    );
}