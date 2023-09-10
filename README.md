# Date Filtered TodoList

This todolist was done as an attempt to a frontend dev task
Note: the todo data isn't persisted to storage, if you refresh it's all gone. 💨

Belows a link to hosted todo:

- [todolist](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)

## Setting up the environment

- Clone the repository, repo link `https://github.com/kejiahp/date-filtered-todo-list.git` or download the zip
- Run the script below in your terminal to install needed dependencies:

```bash
npm install
```

- Run the script below in your terminal to open the development environment

```bash
npm run dev
#or
yarn dev
```

- For my `start script` i'm using [serve](https://www.npmjs.com/package/serve) from vercel. You can check it out local by following the steps below:

1. Replace the $PORT with 3000 in the package.json file

```js
    start: "serve dist -s -n -L -p 3000",
```

2. Then run the scripts below:

```bash
npm run build
#then
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
