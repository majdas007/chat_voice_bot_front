import React, { Component } from 'react';

import ChatBot from 'react-simple-chatbot';
const steps=[
    {
        id: '1',
        message: 'C\'est quoi votre nom?',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: 'Bonjour {previousValue}, bienvenu ! , Quel est votre âge ? ',
        trigger: '4',
    },
    {
        id: '4',
        user: true,
        validator: (value) => {
            if (isNaN(value)) {
                return 'Valeur doit être un nombre';
            }
            return true;
        },
        trigger: '5',
    },
    {
        id: '5',
        message: 'Votre âge est  {previousValue} ans ! Où habitez-vous ?',
        trigger: '6',
    },
    {
        id: '6',
        options: [
            { value: 'Ariana', label: 'Ariana', trigger: '7' },
            { value: 'Ghazela', label: 'Ghazela', trigger: '7' },
            { value: 'Tunis' , label: 'Tunis', trigger: '7' },
        ]
    },
    {
        id: '7',
        message: 'Vous habitez à {previousValue}',
        end: true,
    }

];
class Chat extends Component {


    render() {
        return (


            <ChatBot steps={steps}  />





        );
    }
}

export default Chat;
