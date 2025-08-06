# 🚀 ResendAstro

¡Bienvenido! Este proyecto demuestra cómo enviar emails desde un formulario usando **Astro**, **React Email** y **Resend**, aprovechando las nuevas `actions` de Astro y rutas API.  

---

## 🛠️ Tecnologías principales

- **Astro** ⚡ — Framework web ultrarrápido.
- **React** ⚛️ — Para componentes de email reutilizables.
- **@react-email/components** — Construcción de emails con React.
- **Resend** ✉️ — Servicio para enviar emails fácilmente.
- **astro:actions** — Nueva API para manejar formularios y lógica backend.
- **TypeScript** — Tipado estático para mayor seguridad.

---

## 📦 Instalación rápida

1. **Clona el repo y entra a la carpeta:**
   ```sh
   git clone https://github.com/tuusuario/ApiRouteEmailAstro.git
   cd ApiRouteEmailAstro
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Agrega tu clave de Resend en `.env`:**
   ```env
   RESEND_API_KEY=tu_clave_de_resend
   ```

4. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

5. **Abre** [http://localhost:4321](http://localhost:4321) **en tu navegador.**

---

## 📝 ¿Cómo funciona?

### Formulario en la web:
El usuario completa un formulario en la página principal.

### Envío seguro:
Al enviar, se ejecuta una action de Astro que valida los datos y genera el email usando un componente React.

### Email personalizado:
El email se renderiza a HTML y texto plano, y se envía usando la API de Resend.

### Respuesta al usuario:
Si todo sale bien, el usuario recibe feedback inmediato. Si hay errores, se muestran en el formulario.

---

## 💌 Personaliza tu email

Edita el archivo `src/emails/sampleEmail.tsx` para cambiar el contenido, estilos o props del email.

---

## 🧪 Prueba la API

Puedes probar el envío de emails directamente visitando:  
[http://localhost:4321/api/send](http://localhost:4321/api/send)

---

## 📁 Archivos clave

- `src/pages/index.astro` — Página principal con el formulario.
- `src/actions/index.ts` — Lógica de validación y envío.
- `src/emails/sampleEmail.tsx` — Componente React para el email.
- `src/pages/api/send.ts` — Ruta API para pruebas.
- `.env` — Tu clave de Resend (**¡no la subas a GitHub!**).

---

## ⚠️ Notas importantes

- Cambia el campo `from` en los archivos de envío por una dirección verificada en Resend.
- El formulario valida el email y el nombre antes de enviar.
