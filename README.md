# Sistema de Gestión de Estudiantes

Este es un sistema de gestión de estudiantes que permite a los usuarios cargar, visualizar, actualizar y eliminar información sobre estudiantes, períodos y cursos. El sistema está construido con React y utiliza Firebase Firestore como base de datos.

## Características

- **Gestión de Estudiantes**: Agregar, eliminar y actualizar información sobre estudiantes.
- **Gestión de Períodos**: Asignar períodos a los estudiantes y gestionar su información.
- **Gestión de Cursos**: Asignar cursos a los períodos y gestionar las asignaciones.
- **Carga de Datos**: Cargar datos desde archivos Excel para agregar múltiples estudiantes a la vez.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **Firebase**: Plataforma para el backend, incluyendo Firestore para la base de datos.
- **XLSX**: Biblioteca para manejar archivos Excel.

## Instalación

1. Clona el repositorio:


2. Navega al directorio del proyecto:


3. Instala las dependencias:


4. Configura Firebase:
- Crea un proyecto en [Firebase](https://firebase.google.com/).
- Agrega la configuración de Firebase en tu proyecto.

5. Inicia la aplicación:
```npm run dev```


## Uso

### Gestión de Estudiantes

Para gestionar estudiantes, utiliza el componente `StudentModule`. Aquí puedes agregar nuevos estudiantes, eliminar estudiantes existentes o actualizar su información.

### Gestión de Períodos

El componente `PeriodsManager` permite asignar períodos a los estudiantes y gestionar los cursos asociados.

### Gestión de Cursos

El componente `CoursesManager` se utiliza para asignar cursos a los períodos específicos y gestionar las asignaciones.

### Carga de Estudiantes

Utiliza el componente `UploadStudents` para cargar múltiples estudiantes desde un archivo Excel. Asegúrate de que el archivo tenga las columnas adecuadas (Nombre completo, Número de identificación, Correo electrónico).

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Envía tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
