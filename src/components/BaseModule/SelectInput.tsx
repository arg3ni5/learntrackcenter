// src/components/SelectInput.tsx

import React from 'react';
import Select from 'react-select';

interface SelectInputProps {
    options: { value: string; label: string }[]; // Opciones para el select
    onChange: (selectedOption: any) => void; // Callback para manejar el cambio
    placeholder?: string; // Placeholder opcional
    isMulti?: boolean; // Permitir selección múltiple
    defaultValue?: any; // Valor por defecto
    label?: string; // Etiqueta opcional
}

const SelectInput: React.FC<SelectInputProps> = ({
    options,
    onChange,
    placeholder,
    isMulti = false,
    defaultValue,
    label,
}) => {
    return (
        <div className="select-input">
            {label && <label>{label}</label>}
            <Select
                options={options}
                onChange={onChange}
                placeholder={placeholder}
                isMulti={isMulti}
                defaultValue={defaultValue}
                className="basic-single"
                classNamePrefix="select"
            />
        </div>
    );
};

export default SelectInput;
