# Duck Media

### https://dynamic-lokum-e8d2a1.netlify.app/


Структура проекта:

* public - исходные изображения 
	- favicon - изобрадение для вкладки в браузере
	- logo - логотип компании
	- portfolio - изображения для портфолио, сортированные по категориям
* src:
	- components
		- layout - структура документа
			- header - компонент шапки приложения
			- layout - компонент для создания общей струткры документа
			- seo - компнент для создания SEO оптимизации
		- screens - компоненты страниц приложения
	- data - контент на страницах
		- types - описание типов для данных
		- [about.json](#about)
		- [clients.json](#clients)
		- [seo.json](#seo)
		- [works.json](#works)
	- features - уникальные компоненты
		- contacts - фича старницы контактов
		- portfolio - фича страницы портфолио
	- pages - страницы приложения
	- services - взаимодействие с api сторонних сервисов
		- telegram - telegram api
		- utils - утилиты
	- styles - глобальные стили
		- globals.scss - глобальные стили приложения


<a id="#about">about.json</a>
---
\- контент на странице /about
| Свойство   | Тип данных   | Описание                                         |
|:---------: | :----------: | ------------------------------------------------ |
|    src     | string       | Путь к изображению "О Нас"                       |
|    text    | string       | Текст "О Нас"                                    |
---

<a id="#clients">clients.json</a>
---
\- массив клиентов, разделенный по столбцам списка на странице /clients

| Свойство   | Тип данных   | Описание                                         |
|:---------: | :----------: | ------------------------------------------------ |
|    id      | number       | id для рендеринга                                |
| name       | string       | Имя клиента                                      |


| Свойство | Тип данных | Описание                                                |
| :--------: | :----------: | --------------------------------------------------- |
|    id    | number     | id для рендеринга столбца клиентов                      |
| list     | Client[]   | Массив клиентов в солбце                                |

---

<a id="#seo">seo.json</a>
---
\- объект, содержащий в себе мета иформацию страницы

Key - uri страницы, value - объект типа MetaData

Тип MetaData: 
| Свойство      | Тип данных   | Описание                                                |
| :-----------: | :----------: | ------------------------------------------------------- |
|  title        | string       | Title страницы                                          |
|  dedscription | string       | Описание страницы                                       |

---

<a id="#works">works.json</a>
---
\- массив проектов 

| Свойство   | Тип данных   | Описание                                            |
| :--------: | :----------: | --------------------------------------------------- |
|    id      | number       | id проекта (для отрисовки)                          |
| category   | string       | Категория проекта (для осуществления фильтрации)    |
| src        | string       | Путь к превью проекта (отсонсительно корня проекта) |
| name       | string       | Название проекта                                    |

-----
Переменные окружения:

`TELEGRAM_BOT_TOKEN` - токен телеграмм бота

`TELEGRAM_BOT_CHAT_ID` - id чата телеграм бота