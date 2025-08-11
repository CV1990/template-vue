# Template Front VUE

---

## ❗️ Información importante

- 📄 [Documentación de Vuetify](https://vuetifyjs.com/)
- 🚨 [Reportar Issues](https://issues.vuetifyjs.com/)
- 💬 [Comunidad Vuetify en Discord](https://community.vuetifyjs.com/)

---

## 💿 Instalación

Este proyecto utiliza **npm** como gestor de paquetes y requiere las siguientes versiones:

- **Node.js** `22.9.0`
- **npm** `10.8.2`

Instala las dependencias con:

```bash
npm install
```

Una vez completada la instalación, tu entorno estará listo para desarrollo con **Vue 3 + Vuetify**.

---

## ✨ Características

- 🖼️ **Interfaz moderna y responsiva**: Construida con [Vue 3](https://vuejs.org/) y [Vuetify 3](https://vuetifyjs.com/en/) para un diseño adaptable.
- 🗃️ **Gestión de estado**: Integrada con [Pinia v3](https://pinia.vuejs.org/) para un manejo modular y reactivo de datos.
- 📄 **Generación de PDF**: Descarga de planes de dieta y recetas.
- 🚦 **Routing**: Navegación tipo SPA con [Vue Router](https://router.vuejs.org/).
- 💻 **TypeScript + ESLint**: Tipado estático y validaciones de código para mantener la calidad.
- 🧪 **Pruebas unitarias con Vitest**: Garantizando el correcto funcionamiento de los componentes y lógica.
- ⚡ **Desarrollo ágil con Vite**: Inicio rápido y HMR instantáneo.
- 🛠️ **Husky Hooks**: Validación automática con `lint` y aumento de versión en cada commit.

---

## 📂 Estructura del proyecto

```
eatfit-front/
├── public/                # Archivos públicos
├── src/
│   ├── assets/            # Recursos estáticos
│   ├── components/        # Componentes reutilizables
│   ├── layouts/           # Plantillas de layout
│   ├── pages/             # Vistas principales
│   ├── router/            # Configuración de rutas
│   ├── store/             # Módulos de Pinia
│   ├── styles/            # Estilos globales SCSS
│   ├── utils/             # Funciones y helpers
│   ├── App.vue
│   └── main.ts
├── tests/                 # Pruebas unitarias con Vitest
├── .husky/                # Hooks de Git configurados
├── .eslintrc.cjs          # Configuración de ESLint
├── package.json
└── vite.config.ts
```

---

## 💡 Uso

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

El servidor estará disponible en:  
[http://localhost:3000](http://localhost:3000)

### Ejecutar pruebas unitarias

```bash
npm run test
```

Modo watch:
```bash
npm run test:watch
```

Con cobertura:
```bash
npm run coverage
```

---

## 🪝 Husky Hooks

Configuración actual:

- **pre-commit**:
  1. Ejecuta `npm run lint` para validar el código.
  2. Incrementa automáticamente la versión del proyecto con `npm version patch`.
  3. Permite el commit solo si las validaciones pasan.

---

## 📏 Convenciones de código

- **Componentes**: PascalCase → `PatientForm.vue`
- **Stores**: camelCase + sufijo `Store` → `patientStore.ts`
- **Rutas**: kebab-case → `/patient-detail`
- **Estilos**: SCSS modular por componente
- **Imports**: Ordenar por librerías externas, alias y rutas relativas
- **Tipos**: Uso estricto de TypeScript