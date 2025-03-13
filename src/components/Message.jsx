import React, { useState, useEffect } from 'react';

const Message = () => {
    const [message, setMessage] = useState("Cargando mensaje...");

    useEffect(() => {
        setTimeout(() => {
            setMessage("¡Bienvenido a mi app de React!");
        }, 2000);
    }, []);

    return <p>{message}</p>;
};

export default Message;
