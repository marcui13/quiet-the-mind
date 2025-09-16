# Quiet the Mind 🧘‍♂️

Una plataforma web educativa para ayudar a las personas a comprender y gestionar los pensamientos intrusivos de manera saludable.

## 📖 Descripción

**Quiet the Mind** es un sitio web informativo diseñado para proporcionar recursos, estrategias y apoyo a personas que experimentan pensamientos intrusivos. El objetivo es desmitificar este fenómeno común y ofrecer herramientas prácticas para una mejor gestión emocional.

### 🎯 Propósito

- **Educar** sobre la naturaleza normal de los pensamientos intrusivos
- **Desmitificar** creencias erróneas y reducir el estigma
- **Proveer** estrategias prácticas de manejo saludable
- **Conectar** a usuarios con recursos profesionales cuando sea necesario

## ✨ Características

- 🎨 **Diseño empático y calmante** con paleta de colores serenos
- 📱 **Totalmente responsive** optimizado para todos los dispositivos
- ♿ **Accesible** cumpliendo estándares de usabilidad
- 🚀 **Rápido** construido con Astro para máximo rendimiento
- 🎪 **Animaciones suaves** que mejoran la experiencia del usuario
- 📚 **Contenido basado en evidencia** desarrollado con sensibilidad

## 🏗️ Estructura del Sitio

### Páginas Principales

1. **Inicio** (`/`) - Introducción y bienvenida
2. **Tipos** (`/tipos`) - Diferentes tipos de pensamientos intrusivos
3. **Causas** (`/causas`) - Por qué aparecen estos pensamientos
4. **Estrategias** (`/estrategias`) - Técnicas de manejo saludable
5. **Mitos** (`/mitos`) - Desmitificación de creencias erróneas
6. **Recursos** (`/recursos`) - Libros, profesionales y ayuda adicional
7. **Cierre** (`/cierre`) - Mensaje inspirador final

## 🛠️ Tecnologías

- **[Astro](https://astro.build/)** - Framework web moderno
- **[TypeScript](https://www.typescriptlang.org/)** - Desarrollo con tipos
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[Google Fonts](https://fonts.google.com/)** - Tipografías (Poppins, Inter)

## 🎨 Sistema de Diseño

### Paleta de Colores

```css
:root {
  --color-cream: #FDFBF7;        /* Fondo principal */
  --color-serene-blue: #4A90E2;  /* Color primario */
  --color-calm-green: #7BC47F;   /* Color secundario */
  --color-soft-yellow: #F5D76E;  /* Acento suave */
  --color-light-coral: #FF6B6B;  /* Acento cálido */
}
```

### Tipografía

- **Títulos**: Poppins (600-700 weight)
- **Cuerpo**: Inter (400-500 weight)
- **Responsive**: Escalado fluido con `clamp()`

### Animaciones

- **Fade-in al scroll** con Intersection Observer
- **Hover effects** suaves en componentes interactivos
- **Staggered animations** para listas de elementos
- **Smooth scrolling** nativo

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos de Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/quiet-the-mind.git

# Navegar al directorio
cd quiet-the-mind

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construir para producción |
| `npm run preview` | Previsualizar build de producción |
| `npm run astro` | Comandos CLI de Astro |

## 📁 Estructura del Proyecto

```
quiet-the-mind/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Hero.astro
│   │   └── Section.astro
│   ├── layouts/            # Layouts base
│   │   └── Layout.astro
│   ├── pages/              # Páginas del sitio
│   │   ├── index.astro     # Página de inicio
│   │   ├── tipos.astro
│   │   ├── causas.astro
│   │   ├── estrategias.astro
│   │   ├── mitos.astro
│   │   ├── recursos.astro
│   │   └── cierre.astro
│   └── styles/             # Estilos globales
│       └── global.css
├── tailwind.config.js      # Configuración de Tailwind
├── astro.config.mjs        # Configuración de Astro
└── package.json
```

## 🎨 Componentes

### Card
Componente versátil para mostrar información con diferentes variantes:
- `default` - Estilo estándar
- `highlighted` - Resaltado con bordes
- `minimal` - Versión simplificada

### Button
Botones con múltiples estilos:
- `primary` - Acción principal
- `secondary` - Acción secundaria
- `outline` - Estilo de contorno

### Hero
Sección de encabezado con título, subtítulo y CTA opcional.

### Section
Contenedor principal con opciones de background y centrado.

## 🚀 Despliegue

### Netlify (Recomendado)

```bash
# Build para producción
npm run build

# El directorio ./dist/ está listo para desplegar
```

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 🤝 Contribución

### Guías de Contribución

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -am 'Añadir nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre** un Pull Request

### Estándares de Código

- Usa **TypeScript** para nuevos componentes
- Sigue las convenciones de **Tailwind CSS**
- Asegúrate de que el código sea **accesible**
- Incluye **animaciones suaves** para mejorar UX
- Mantén **consistencia** con el sistema de diseño

## 📝 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 💖 Reconocimientos

- Diseñado con sensibilidad hacia las personas que experimentan pensamientos intrusivos
- Contenido desarrollado con enfoque en bienestar mental
- Inspirado en principios de psicología clínica y mindfulness

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto:
- 📧 Email: [tu-email@ejemplo.com]
- 🐛 Issues: [GitHub Issues](https://github.com/tu-usuario/quiet-the-mind/issues)

---

**Nota importante**: Este sitio web es solo informativo y no sustituye la consulta con profesionales de la salud mental. Si experimentas dificultades significativas, busca ayuda profesional.

*Construido con ❤️ para el bienestar mental*