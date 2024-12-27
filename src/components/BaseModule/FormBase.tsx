// src/components/FormBase.tsx

import React, { useState, useEffect } from 'react';
import './FormBase.css'; // Importing CSS styles 
import SelectInput from './SelectInput'; // Asegúrate de importar tu componente SelectInput

interface FormBaseProps<T> {
    onItemAdded: (newItem: T) => Promise<void>; // Callback para manejar la adición de un item
    fields: { label?: string; name: string; placeholder: string, type?: 'input' | 'select', options?: { value: string; label: string }[] }[]; // Agregar opciones para select
    initialData?: T | null; // Propiedad opcional para datos iniciales del formulario
}

const FormBase = <T extends {}>({ onItemAdded, fields, initialData }: FormBaseProps<T>) => {
    const [formData, setFormData] = useState<Record<string, string | null>>({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData as Record<string, string | null>); // Cargar datos iniciales en el formulario
        }
    }, [initialData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (selectedOption: any) => {
        setFormData({ ...formData, [selectedOption.name]: selectedOption.value }); // Actualiza el estado con la opción seleccionada
    };

    const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evitar el comportamiento por defecto del formulario
        await onItemAdded(formData as T); // Llama al callback para manejar la adición
        setFormData({}); // Resetea el formulario después de agregar
    };

    return (
        <form onSubmit={addItem}>
            {fields.map((field) => {
                const fieldType = field.type || 'input';
                if (fieldType === 'input') {
                    return (
                        <input 
                            key={field.name}
                            type="text" 
                            name={field.name} 
                            placeholder={field.placeholder} 
                            value={formData[field.name] || ''} 
                            onChange={handleInputChange} 
                            required 
                        />
                    );
                } else if (fieldType === 'select' && field.options) {
                    return (
                        <SelectInput
                            label={field.label}
                            key={field.name}
                            options={field.options}
                            onChange={(selectedOption) => handleSelectChange({ name: field.name, ...selectedOption })}
                            placeholder={field.placeholder}
                        />
                    );
                }
                return null; // En caso de que no haya un tipo válido
            })}
            <button type="submit">Agregar</button>
        </form>
    );
};

export default FormBase;
