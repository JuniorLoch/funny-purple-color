### Vscode color theme based on shades of purple, for those who really like deep purple shades, now with neon!

## Installation

### Basic instalation

-   Install this theme from the [vscode
    marketplace](https://marketplace.visualstudio.com/items?itemName=GilbertoGaspar.funny-purple-color)
-   Thats it, you are good to go

### Enabling Neon effects

-   First you need to install the [custom css and js
    loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)
    from the vscode marketplace
-   Add the following commands to your `settings.json` file replacing {your username} by the
    username you have on your computer

```json
"vscode_custom_css.imports": [
        "file:///C:/Users/{your username}/.vscode/extensions/gilbertogaspar.funny-purple-color-0.1.2/neon-css/funny-purple.css",
        "file:///C:/Users/{your username}/.vscode/extensions/gilbertogaspar.funny-purple-color-0.1.2/neon-css/epic-80s-transitions.css"
    ],
```

> Tip: to open your `settings.json` file, open the command pallete ( `ctrl` + `shift` +
> `p` ) and type `Preferences: Open User Settings (JSON)`

-   Open your command pallete ( `ctrl` + `shift` + `p` ) and run the command `Reload Custom
CSS and JS`

-   If everything went alright the commmand will prompt you to restart the editor in the
    **bottom right** corner, click the button and it should be working!

# Screenshots

## Regular

![Example](https://github.com/JuniorLoch/funny-purple-color/blob/main/assets/example.png?raw=true)

![Example2](https://github.com/JuniorLoch/funny-purple-color/blob/main/assets/example2.png?raw=true)

## Neon enabled

![Example](https://github.com/JuniorLoch/funny-purple-color/blob/main/assets/exampleneon.png?raw=true)

![Example2](https://github.com/JuniorLoch/funny-purple-color/blob/main/assets/exampleneon2.png?raw=true)
