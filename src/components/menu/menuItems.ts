// src/components/menuItems.ts

export const menuItems = [
    { label: "Dashboard", to: "/dashboard" },
    { 
        label: "Students", 
        to: "", // Un enlace vacío si se usa como encabezado de dropdown
        children: [
            { label: "Estudiantes", to: "/students" },
            { label: "Calificaciones", to: "/grades" },
        ]
    },
    { 
        label: "Params", 
        to: "", // Un enlace vacío si se usa como encabezado de dropdown
        children: [
            { label: "Periods", to: "/periods" },
            { label: "Courses", to: "/courses" },
            { label: "Profesores", to: "/teachers" },
        ]
    },
    { 
        label: "User", 
        to: "", // Un enlace vacío si se usa como encabezado de dropdown
        children: [
            { label: "Login", to: "/login" },
            { label: "Register", to: "/register" },
        ]
    }
];
