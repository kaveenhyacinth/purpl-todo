# Purpl Todo - Minimalist Todo Application

[![Netlify Status](https://api.netlify.com/api/v1/badges/f1016973-e749-4953-a71d-237964173d0c/deploy-status)](https://app.netlify.com/sites/purpl/deploys)
![Kaveen Hyacinth](https://img.shields.io/badge/Kaveen%20Hyacinth-2021-blueviolet?style=flat)

## Installation

- Clone the repo and run `npm install` to install the dependencies.
- Run `npm start` to open the Purpl Todo application.

## User Guide

- Enter a task to the text input given
- Hit `Enter` or click `ADD` button to add a task
- Click the `Todo Tile` to mark a task as complete
- Click the `Bin` icon to delete a task
- When the list gets longer, the `back-to-top` button can be used to jump to the top
- New `todo` items are stacked to the top

## Architecture

- Project is developed in `Typescript`
- Uses `Ant Design` as the theme
- Uses `Tailwindcss` along with `SASS`
- Integrated with `Storybook`

### Storybook Components

Run `npm run storybook` to open the Storybook Graphical User Interface.

Available Components

- TodoForm
- TodoTile

## Other Scripts

- `npm build:tailwind` -> compile tailwincss
- `npm watch:tailwind` -> watching for the changes in `src/styles/scss` dir
- `npm run start:react` -> run project without compiling tailwindcss

## Testing

- Snapshot testings are done by `Jest` and `Enzyme`

[Figma design file](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJkCKaVef5Dqhhq2sPTYALD%2FPurpl-Todo%3Fnode-id%3D0%253A1)

---

Made with 💗 to make you 😄
