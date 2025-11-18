# @dockcodes/accessibility-widget-react

Check our [Accessibility Widget](https://wcag.dock.codes/#wcag-open).

### Installation

```bash
npm install @dockcodes/accessibility-widget-react
```
or
```bash
yarn add @dockcodes/accessibility-widget-react
```

### Usage
Wrap your app with the provider
```tsx
import React, { useEffect } from "react"
import { AccessibilityProvider, useAccessibility } from "@dockcodes/accessibility-widget-react"

const Demo = () => {
    const { accessibility, ready } = useAccessibility()

    useEffect(() => {
        if (!ready) return

        accessibility.onMenuOpen(() => console.log('Menu opened!'))
    }, [ready])

    if (!ready) return <p>Widget loading…</p>

    return (
        <div style={{ padding: 20 }}>
        <h1>Demo Accessibility Widget</h1>
    
        <button onClick={() => accessibility.setContrast(true)}>Enable contrast</button>
        <button onClick={() => accessibility.toggleInvertColors()}>Invert colors</button>
        <button onClick={() => accessibility.setFontSize(4)}>Large font</button>
        <button onClick={() => accessibility.setLanguage("en")}>EN</button>
        <button onClick={() => accessibility.resetAll()}>Reset</button>
        </div>
    )
}

export default function App() {
    return (
        <AccessibilityProvider token="YOUR_TOKEN">
            <Demo />
        </AccessibilityProvider>
    )
}
```

### Base package
👉  [@dockcodes/accessibility-widget](https://www.npmjs.com/package/@dockcodes/accessibility-widget)

### 🔑 Get Your Free Widget Token
👉 https://wcag.dock.codes/my-account/tokens/

### 🤝 Contributing
Contributions are welcome!
If you find a bug or want to improve the library, please open an issue or pull request on
👉 [GitHub](https://github.com/dockcodes/accessibility-widget-react/issues)
