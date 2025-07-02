# Playwright API Testing con JsonPlaceholder

Este proyecto demuestra cómo automatizar pruebas de API utilizando [Playwright](https://playwright.dev/) 
en combinación con el patrón **POM (Page Object Model)** aplicado a endpoints.

### 🧪 Tecnologías utilizadas
- [Playwright](https://playwright.dev/)
- TypeScript
- [JsonPlaceholder](https://jsonplaceholder.typicode.com/) (API gratuita para testing)
- POM para manejo de endpoints

---

### 🔍 Casos de prueba incluidos

- ✅ Obtener lista de posts
- ✅ Crear un nuevo post (`title: QA`, `body: Testing`)
- ✅ Actualizar un post existente
- ✅ Eliminar un post

---

### 🚀 Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Ejecutar tests
npx playwright test

# Ver reporte
npx playwright show-report
```

---

### 🙋‍♂️ Autor
Alejandro Amoza
LinkedIn | GitHub