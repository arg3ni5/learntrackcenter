import React from 'react';
import Select from 'react-select';
import './SelectInput.css'; // Import the CSS file

interface SelectInputProps {
    options: { value: string; label: string }[]; // Opciones para el select
    onChange: (selectedOption: any) => void; // Callback para manejar el cambio
    placeholder?: string; // Placeholder opcional
    isMulti?: boolean; // Permitir selección múltiple
    defaultValue?: any; // Valor por defecto
    label?: string; // Etiqueta opcional
    value: string | number; // Cambiar a string | number
}

const SelectInput: React.FC<SelectInputProps> = ({
    options,
    onChange,
    placeholder,
    isMulti = false,
    defaultValue,
    label,
    value
}) => {
    return (
        <div className="select-input">
            {label && <label>{label}</label>}
            <Select
                value={options.find(option => option.value === value)}
                options={options}
                onChange={onChange}
                placeholder={placeholder}
                isMulti={isMulti}
                defaultValue={defaultValue}
                className="select-input"
                classNamePrefix="react-select"
            />
        </div>
    );
};

export default SelectInput;
