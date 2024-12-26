// src/BaseModule/BaseModule.tsx
import { useEffect, useState } from "react";
import FormBase from "./FormBase";
import ListBase from "./ListBase";
import "./BaseModule.css"; // Importar el archivo CSS
import { useNotification } from "../notification/NotificationContext";

interface BaseModuleProps<T> {
  collectionName: string;
  title?: string;
  fields: { name: string; placeholder: string }[];
  fetchItems: () => Promise<T[]>; // Función para obtener los elementos
  onItemAdded: (newItem: T) => Promise<void>; // Callback para manejar la adición de un item
  onItemDeleted?: (id: string) => Promise<void>; // Callback opcional para manejar la eliminación
  importItem?: T | null;
  initialFormData?: T | null; // Datos iniciales para el formulario
  loading?: boolean;
  children?: React.ReactNode;
}

const BaseModule = <T extends { id?: string }>({ title, fields, fetchItems, onItemAdded, onItemDeleted, importItem, initialFormData, loading, children }: BaseModuleProps<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const { showNotification } = useNotification();

  const loadItems = async () => {
    const itemList = await fetchItems(); // Llama a la función proporcionada para obtener los elementos
    setItems(itemList);
  };

  const handleItemAdded = async (newItem: T) => {
    await onItemAdded(newItem); // Llama al callback para manejar la adición
    loadItems(); // Refresca la lista después de agregar
    showNotification("Elemento Importado", "info"); // Muestra la notificación
  };

  const handleItemAddImport = async (newItem: T) => {
    await onItemAdded(newItem); // Llama al callback para manejar la adición
    loadItems(); // Refresca la lista después de agregar
    showNotification("Elemento importado", "info"); // Muestra la notificación
  };

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    if (importItem) {
        console.log("Importing item", importItem);
        initialFormData = importItem;     
        handleItemAddImport(importItem);
    }
}, [importItem]);

  return (
    <div>
      {title && <h2>{title}</h2>}
      <div className="module-container">
        <div className="form-container">
          <FormBase
            onItemAdded={handleItemAdded}
            fields={fields}
            initialData={initialFormData ?? importItem}
          />
          <ListBase
            items={items}
            fields={fields}
            onItemDeleted={async (id) => {
              if (onItemDeleted) {
                await onItemDeleted(id); // Llama al callback si está definido
              }
              loadItems(); // Refresca la lista después de eliminar
            }}
            loading={loading || false}
          />
        </div>
        <div className="upload-container">{children}</div>
      </div>
    </div>
  );
};

export default BaseModule;
