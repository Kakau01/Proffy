import React, {TextareaHTMLAttributes} from 'react';

import './styles.css';

//dando todasas propriedades que um Textarea pode receber
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea name="" id={name} {...rest} />
        </div>
    );
}

export default Textarea;