# Sidebar — Test Assignment for Makves Group

Автор: [Дмитрий Червочкин](https://github.com/chrvdevelop)  
Telegram [@chrvdevelor](t.me/chrvdevelop)  
Репозиторий: [GitHub ↗](https://github.com/dmitrychervochkin/sidebar_makves_group.git)  

---

## 📌 Описание

Интерактивный компонент сайдбара с возможностью сворачивания, адаптивной версткой, темизацией и динамической отрисовкой маршрутов.  
Разработан в рамках тестового задания для Makves Group.

---

## 🚀 Технологический стек

- **React 18+**
- **styled-components**
- **FontAwesome (via `@fortawesome/react-fontawesome`)**
- CSS переменные (через кастомные темы)

---

## 🧩 Основной функционал

- Сайдбар с возможностью сворачивания и анимированной кнопкой переключения
- Темизация через `props.color` и CSS custom properties
- Динамическая отрисовка `routes` и `bottomRoutes`
- Стилизация с полной адаптацией под темные/светлые схемы
- Поддержка анимации "волны" при первом монтировании *(опционально)*

---

## ⚙️ Установка и запуск

```bash
git clone https://github.com/dmitrychervochkin/sidebar_makves_group.git
cd sidebar_makves_group
npm install
npm run dev
```

🎨 Темизация

Цветовая схема задаётся через проп color, который влияет на все переменные:
```bash
<Sidebar color="light/dark" />
```
