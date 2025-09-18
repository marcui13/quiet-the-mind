# Quiet the Mind 🧘‍♂️

Una plataforma integral de bienestar mental y emocional que ofrece recursos, información y herramientas para diversos aspectos de la salud mental.

## 📖 Descripción

**Quiet the Mind** es un hub de bienestar mental diseñado para proporcionar contenido educativo, recursos prácticos y apoyo a personas que buscan mejorar su salud mental y emocional. La plataforma aborda múltiples temas de bienestar mental con un enfoque holístico y basado en evidencia.

### 🎯 Propósito

- **Educar** sobre diversos aspectos del bienestar mental y emocional
- **Empoderar** a las personas con herramientas prácticas y estrategias efectivas
- **Desmitificar** temas de salud mental y reducir el estigma
- **Conectar** a usuarios con recursos profesionales cuando sea necesario
- **Fomentar** un enfoque holístico del bienestar personal

## ✨ Características

- 🎨 **Diseño empático y calmante** con paleta de colores serenos
- 📱 **Totalmente responsive** optimizado para todos los dispositivos
- ♿ **Accesible** cumpliendo estándares de usabilidad
- 🚀 **Rápido** construido con Astro para máximo rendimiento
- 🎪 **Animaciones suaves** que mejoran la experiencia del usuario
- 📚 **Contenido basado en evidencia** desarrollado con sensibilidad

## 🏗️ Estructura del Sitio

### Páginas Principales

1. **Inicio** (`/`) - Hub principal de bienestar mental y emocional
2. **Tópicos** (`/topics`) - Exploración de temas de bienestar mental
3. **Recursos** (`/recursos`) - Libros, profesionales y ayuda adicional

### Tópicos Disponibles

#### 🌪️ **Pensamientos Intrusivos** (`/types`)
- Tipos y patrones de pensamientos intrusivos
- Causas y factores desencadenantes
- Estrategias de manejo saludable
- Desmitificación de creencias erróneas

#### ✨ **Autoestima** (`/topics/self-esteem`)
- Conexión entre autoestima y calidad de vida
- Desarrollar la autoestima en otros
- Habilidades de aceptación y apreciación
- Técnicas de escucha activa

### Estructura Escalable

La plataforma está diseñada para expandirse fácilmente con nuevos tópicos:
- **Próximamente**: Mindfulness y Meditación, Manejo de Ansiedad, Inteligencia Emocional
- Cada tópico mantiene una estructura consistente y navegación intuitiva
- Sistema de URLs organizadas: `/topics/<nombre-del-topico>`

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
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Section.astro
│   ├── layouts/            # Layouts base
│   │   ├── Layout.astro
│   │   └── MainLayout.astro
│   ├── pages/              # Páginas del sitio
│   │   ├── index.astro     # Hub principal
│   │   ├── topics/         # Tópicos de bienestar mental
│   │   │   ├── index.astro # Página de tópicos
│   │   │   └── self-esteem/
│   │   │       └── index.astro
│   │   ├── es/             # Versión en español
│   │   │   └── topics/
│   │   ├── types.astro     # Pensamientos intrusivos
│   │   ├── strategies.astro
│   │   ├── myths.astro
│   │   └── resources.astro
│   ├── i18n/               # Internacionalización
│   │   ├── ui.ts           # Traducciones
│   │   └── utils.ts
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

- Diseñado con sensibilidad hacia las personas que buscan mejorar su bienestar mental
- Contenido desarrollado con enfoque holístico en salud mental y emocional
- Inspirado en principios de psicología clínica, mindfulness y desarrollo personal
- Estructura escalable para abordar diversos aspectos del bienestar mental

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto:
- 📧 Email: [tu-email@ejemplo.com]
- 🐛 Issues: [GitHub Issues](https://github.com/tu-usuario/quiet-the-mind/issues)

---

**Nota importante**: Este sitio web es solo informativo y educativo, no sustituye la consulta con profesionales de la salud mental. Si experimentas dificultades significativas con tu bienestar mental o emocional, busca ayuda profesional.

*Construido con ❤️ para el bienestar mental y emocional*