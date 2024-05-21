# CheckBox

<!-- example -->
```jsx
import { CheckBox } from 'ui-kit-lite/components/CheckBox';

const TestComponent = () => {
    const [checked, setChecked] = useState(false)

    return (
      <div>
          <CheckBox checked /> 
          <CheckBox /> 
          <CheckBox disabled /> 
          <CheckBox disabled checked /> 
          <CheckBox checked label="Label" /> 
          <CheckBox disabled label="Disabled" /> 
          <CheckBox label="Tooltip" tooltipLabel="Text" /> 
          <CheckBox label="Controlled" checked={checked} onChange={(isChecked) => setChecked(isChecked)} />
      </div>
    );
  
}
```
## Import
```jsx
import { CheckBox } from 'ui-kit-lite';
// or
import { CheckBox } from 'ui-kit-lite/components/CheckBox';
```

## Properties

| Name                 | Type               | Default    | Description                                                                                                                                            |
|:---------------------|:-------------------|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `children`           | `String` or `Node` | -          | The content of the component.                                                                                                                          |
| `className`          | `String`           | `''`       | Sets a class to give customized styles to the CheckBox field.                                                                                          |
| `theme`              | `Object`           | -          | Theme object with classnames that will be used to style the component.                                                                                 |
| `style`              | `Object`           | -          | Custom component styles.                                                                                                                               |
| `label`              | `String` or `Node` | -          | The text or node to use for the label element.                                                                                                         |
| `name`               | `String`           | `''`       | Value for `name` input attribute.                                                                                                                      |
| `checked`            | `Boolean`          | `false`    | If `true`, the component is checked.                                                                                                                   |
| `disabled`           | `Boolean`          | `false`    | If `true`, the CheckBox is disabled.                                                                                                                   | |
| `onClick`            | `Function`         | -          | Callback called when the CheckBox is clicked.                                                                                                          |
| `onChange`           | `Function`         | -          | Callback called when the CheckBox value is changed.                                                                                                    |
| `onMouseEnter`       | `Function`         | -          | Callback called when the mouse enters the Component.                                                                                                   |
| `onMouseLeave`       | `Function`         | -          | Callback called when the mouse leaves the Component.                                                                                                   |
| `tooltipLabel`       | `String`           | -          | The text string to use for the tooltip.                                                                                                                |
| `tooltipDelay`       | `Number`           | `0`        | Amount of time in milliseconds spent before the tooltip is visible.                                                                                    |
| `tooltipOffset`      | `Number`           | `0`        | If `tooltipPosition` - `vertical`, `bottom` or `top`, the tooltip moves relative to its axis.                                                          |
| `tooltipHideOnClick` | `Boolean`          | `true`     | If `true`, the Tooltip hides after a click in the host component.                                                                                      |
| `tooltipPosition`    | `String`           | `vertical` | Determines the position of the tooltip. It can be automatic with `vertical` and `horizontal` values or forced with `bottom`, `top`, `left` or `right`. |
| `tooltipShowOnClick` | `Boolean`          | `false`    | If `true`, the tooltip also toggled when clicked. This is useful for mobile where there is no mouse enter.                                             |

## Theme

| Name            | Description                                   |
|:----------------|:----------------------------------------------|
| `check`         | Used as root in the check element.            |
| `checked`       | Used for the check element when it's checked. |
| `disabled`      | Used when the component is disabled.          |
| `field`         | Used as the root class of the component.      |
| `input`         | Used for the input element.                   |
| `text`          | Used for the text label.                      |
| `tooltip`       | Added to the tooltip element wrapper.         |
| `tooltipActive` | Added to the root when the tooltip is active. |