import {useAccessibilityContext} from "./AccessibilityProvider"

export const useAccessibility = () => {
    const {accessibility, ready} = useAccessibilityContext()

    if (!accessibility) {
        throw new Error("Accessibility is not available. Wrap your app with <AccessibilityProvider>.")
    }

    return {...accessibility, ready}
}
