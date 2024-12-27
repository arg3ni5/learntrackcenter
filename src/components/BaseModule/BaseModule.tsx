// src/BaseModule/BaseModule.tsx

import { useEffect, useState } from "react";
import FormBase from "./FormBase";
import ListBase from "./ListBase";
import "./BaseModule.css"; // Importar el archivo CSS
import { useNotification } from "../notification/NotificationContext";

export interface Field {
  name: string; // Nombre del campo
  placeholder: string; // Placeholder del campo
  label?: string; // Etiqueta opcional del campo
  type?: "input" | "select"; // Tipo del campo (input o select)
  options?: { value: string; label: string }[]; // Opciones para el select
}

interface BaseModuleProps<T> {
  title?: string;
  fields: Field[];
  fetchItems: () => Promise<T[]>; // Función para obtener los elementos
  onItemAdded: (newItem: T) => Promise<void>; // Callback para manejar la adición de un item
  onItemUpdated?: (id: string, updatedItem: T) => Promise<void>; // Callback opcional para manejar la actualización
  onItemDeleted?: (id: string) => Promise<void>; // Callback opcional para manejar la eliminación
  importItem?: T | null; // Item a importar
  initialFormData?: T | null; // Datos iniciales para el formulario
  loading?: boolean;
  children?: React.ReactNode;
}

const BaseModule = <T extends { id?: string }>({
  title,
  fields,
  fetchItems,
  onItemAdded,
  onItemUpdated,
  onItemDeleted,
  importItem,
  initialFormData,
  loading,
  children,
}: BaseModuleProps<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const { showNotification } = useNotification();

  const [isEditing, setIsEditing] = useState<boolean>(false); // Estado para manejar el modo de edición
  const [currentItemId, setCurrentItemId] = useState<string | null>(null); // ID del item actualmente en edición

  const loadItems = async () => {
    const itemList = await fetchItems(); // Llama a la función proporcionada para obtener los elementos
    setItems(itemList);
  };

  const handleItemAdded = async (newItem: T) => {
    await onItemAdded(newItem); // Llama al callback para manejar la adición
    loadItems(); // Refresca la lista después de agregar
    showNotification("Elemento agregado", "success"); // Muestra la notificación
    resetEditing(); // Resetea el modo de edición después de agregar
  };

  const handleItemAddImport = async (newItem: T) => {
    await onItemAdded(newItem); // Llama al callback para manejar la adición
  };

  const handleItemUpdated = async (updatedItem: T) => {
    if (currentItemId && onItemUpdated) {
      await onItemUpdated(currentItemId, updatedItem); // Llama al callback para manejar la actualización
      loadItems(); // Refresca la lista después de actualizar
      showNotification("Elemento actualizado", "success"); // Muestra la notificación
      resetEditing(); // Resetea el modo de edición después de actualizar
    }
    if (!onItemUpdated) {
      showNotification("Error al actualizar el elemento", "error"); // Muestra la notificación
    }
  };

  const resetEditing = () => {
    setIsEditing(false);
    setCurrentItemId(null);
  };

  useEffect(() => {    
    if (importItem) {
      handleItemAddImport(importItem); // Manejar importación si hay un item importado
    }    
    loadItems();
  }, [importItem]);

  return (
    <div>
      {title && <h2>{title}</h2>}
      <div className="module-container">
        <div className="form-container">
          <FormBase
            onItemAdded={handleItemAdded}
            onItemUpdated={handleItemUpdated} // Pasar función de actualización al formulario
            fields={fields}
            isEditing={isEditing}
            initialData={isEditing ? items.find((item) => item.id === currentItemId) : initialFormData} // Cargar datos iniciales o del item en edición
          />
          <ListBase
            items={items}
            fields={fields}
            onItemDeleted={async (id) => {
              if (onItemDeleted) {
                await onItemDeleted(id); // Llama al callback si está definido
              }
              loadItems(); // Refresca la lista después de eliminar
              showNotification("Elemento eliminado", "success"); // Muestra la notificación
            }}
            editable={onItemUpdated !== undefined} // Habilitar edición si la función de actualización está definida
            loading={loading || false}
            onEdit={(id) => {
              setIsEditing(true);
              setCurrentItemId(id); // Establecer el ID del item a editar
            }}
          />
        </div>
        <div className="upload-container">{children}</div>
      </div>
    </div>
  );
};

export default BaseModule;
