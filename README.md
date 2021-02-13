# React protoype base for CodeSandbox using Tailwind

```bash
// Create the app
yarn create react-app prototype_base
cd prototype_base

// Install PostCSS-CLI, Tailwind & Autoprefixer
yarn add postcss-cli tailwindcss autoprefixer --dev

// Use tailwind CLI to generate the tailwind file
npx tailwindcss init
```

***WARNING!*** `postcss-cli` 8.*.* is currently not working in the lateast versionf of `CRA`, and `tailwind` 2.0.2 requires it. You can follow [https://tailwindcss.com/docs/installation#post-css-7-compatibility-build](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build) instead if you don't plan to use this with `CodeSandbox`, but using the `tailwindcss@npm:@tailwindcss/postcss7-compat` dependency will fail in csbx.

> `[PostCSS](https://github.com/postcss/postcss)` is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

`[Tailwind](https://tailwindcss.com/)` is a utility CSS framework to speed up creation of websites by bootstraping an API that can be used standalone or as a PostCSS plugin.

`[Autoprefixer](https://github.com/postcss/autoprefixer)` is a PostCSS plugin, it basically parses your CSS and adds/removes unnecessary vendor prefixes in your compiled CSS rules. It can help you add prefixes for animations, transition, transform, grid, flex, flexbox, etc.

Create `postcss.config.js` in the root of the project and fill with:

```jsx
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

Inside the `src` folder create a folder, name it `styles` , this is where all your styles would be stored. Inside that folder, create a `tailwind.css` and an `index.css` file.

Add the following to your `index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now go into `index.js` and delete any refferences of styles that are currently there, also the css files that are outside our newly created `styles` folder, and change them for:

```jsx
import './styles/tailwind.css';
```

Modify the `package.json` scripts with:

```json
"build:style":"tailwind build src/styles/index.css -o src/styles/tailwind.css",
"start": "npm run build:style && react-scripts start",
```

Now here's the tricky part, as stated in the warning above, we will need to edit the default configuration of `CRA`. First, to be able to access it we need to `eject`.

```bash
yarn run eject
```

This will expose all the configuration that CRA does behind the scenes, don't get scared.

First thing is to change the versions of `postcss` to the 8.x.x and `postcss-loader` to a compatible one `package.json` that work together like:

```json
"postcss": "^8.1.14",
"postcss-loader": "^4.1.0",
```

Then we need to go into the webpack config file at `config/webpack.config.js`, look for the `postcss-loader` section and modify it like so:

```js
{
  // Options for PostCSS as we reference these options twice
  // Adds vendor prefixing based on your specified browser support in
  // package.json
  loader: require.resolve('postcss-loader'),
  options: {
    // Necessary for external CSS imports to work
    // https://github.com/facebook/create-react-app/issues/2677
    postcssOptions: {
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
        // Adds PostCSS Normalize as the reset css with default options,
        // so that it honors browserslist config in package.json
        // which in turn let's users customize the target behavior as per their needs.
        postcssNormalize(),
      ]
    },
    sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
  },
}
```

We had to wrap the `plugins` section inside a `postcssOptions` object for it to work. The `ident` param is needed for [webpack](https://v4.webpack.js.org/loaders/postcss-loader/#plugins). This is the main reason why you need to use the compatibility build. The CRA project still has not agreed on how to proceed with the latest version of PostCSS and is currently WiP.
