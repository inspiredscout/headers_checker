FROM node:16-alpine

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY server.js ./

# Экспонируем порт (по умолчанию 3000)
EXPOSE 3000

# Запуск приложения
CMD ["npm", "start"]
