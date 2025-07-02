# 🧪 JsonPlaceholder API Testing (Playwright)

Este proyecto contiene una colección de pruebas automatizadas utilizando **Playwright** sobre la API pública **JsonPlaceholder**, simulando operaciones típicas de un sistema CRUD.

---

## 📦 Contenido

Se testean las siguientes funcionalidades de la API:

- Listado de posts (`GET /posts`)
- Creación de post (`POST /posts`)
- Actualización de post (`PUT /posts/:id`)
- Eliminación de post (`DELETE /posts/:id`)

---

## 🔍 Validaciones realizadas

Los tests incluyen validaciones sobre:

- Código de estado HTTP
- Contenido y estructura del JSON
- Campos obligatorios (como `title`, `body`, `userId`)
- ID generado correctamente al crear un recurso
- Persistencia simulada de cambios (limitada por la naturaleza de JsonPlaceholder)

---

### 🧪 Tecnologías utilizadas
- [Playwright](https://playwright.dev/)
- TypeScript
- [JsonPlaceholder](https://jsonplaceholder.typicode.com/) (API gratuita para testing)
- POM para manejo de endpoints

---

### 🚀 Cómo ejecutar

```bash
git clone https://github.com/alejandro-amoza/jsonPlaceholderAPI.git
cd jsonPlaceholderAPI
npm install
npx playwright test
npx playwright show-report
```

---

## 🙌 Autor
Alejandro Amoza – QA Tester
- [LinkedIn](https://www.linkedin.com/in/alejandro-amoza)
- [Portfolio](https://alejandro-amoza.github.io/portfolio)
