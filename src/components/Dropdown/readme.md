# Dropdown

<!-- example -->
```jsx 
import { Dropdown } from 'ui-kit-lite/components/Dropdown';

const OverlayComponent = () => {
    return <div><div>item1</div><div>item2</div></div>
}

const TestComponent = () => (
    <div>
        <Dropdown trigger="click" closeOnSelect overlay={OverlayComponent} overlayStyle={{ background: 'gray' }} > 
            <Button label="Users"/> 
        </Dropdown>

        <Dropdown overlay={OverlayComponent} visible overlayStyle={{ border: '1px solid gray' }} > 
            <Button label="Visible"/> 
        </Dropdown>

        <Dropdown trigger="click" disabled > 
            <Button label="Disabled"/> 
        </Dropdown>

        <Dropdown trigger="click" overlay={OverlayComponent} minOverlayWidthMatchTrigger={false} align={{ points: ['tc', 'bc'], }} overlayStyle={{ border: '1px solid gray' }} > 
            <Button label="Overlay width less"/> 
        </Dropdown>

        <Dropdown trigger="click" overlay={OverlayComponent} alignPoint overlayStyle={{ background: 'gray' }} > 
            <Button label="Point overlay"/> 
        </Dropdown>
    </div>
);
```

## Import
```jsx
import { Dropdown } from 'ui-kit-lite';
// or
import { Dropdown } from 'ui-kit-lite/components/Dropdown';
```

## Properties

| Name                          | Type                               | Default                           | Description                                                                                 |
|:------------------------------|:-----------------------------------|:----------------------------------|:--------------------------------------------------------------------------------------------|
| `children`                    | `Node`                             | -                                 | The content of the component.                                                               |
| `className`                   | `String`                           | `''`                              | Dropdown button wrapper class name.                                                         |
| `disabled`                    | `Boolean`                          | `false`                           | If `true`, component will be disabled.                                                      |
| `closeOnSelect`               | `Boolean`                          | `true`                            | If `true`, overlay close after select.                                                      |
| `overlayClassName`            | `String`                           | -                                 | Overlay class name.                                                                         |
| `openClassName`               | `String`                           | `${prefixCls}-open`               | Overlay class name when dropdown is opened.                                                 |
| `overlayStyle`                | `Object`                           | -                                 | Overlay styles.                                                                             |
| `prefixCls`                   | `String`                           | `rc-dropdown`                     | Dropdown prefix class name.                                                                 |
| `transitionName`              | `String`                           | -                                 | Dropdown menu's animation css class name.                                                   |
| `minOverlayWidthMatchTrigger` | `Boolean`                          | `true(false when set alignPoint)` | Whether overlay's width must not be less than trigger's.                                    |
| `arrow`                       | `Boolean`                          | `false`                           |                                                                                             |
| `alignPoint`                  | `Boolean`                          | `false`                           | Popup will align with mouse position (support action of `click`, `hover` and `contextMenu`) |
| `autoFocus`                   | `Boolean`                          | -                                 |                                                                                             |
| `visible`                     | `Boolean`                          | `false`                           | If `true`, overlay will be visible by default.                                              |
| `overlay`                     | `Node`                             | -                                 | Popup component, which is shown by trigger.                                                 |
| `onVisibleChange`             | `Function(visible: boolean)`       | -                                 | Call when overlay visibility is changed.                                                    |
| `onOverlayClick`              | `Function(e: event)`               | -                                 | Call when overlay is clicked.                                                               |
| `autoDestroy`                 | `Boolean`                          | -                                 |                                                                                             |
| `animation`                   | `String`                           | -                                 | Part of dropdown menu's animation css class name.                                           |
| `align`                       | `AlignType`                        | -                                 | Popup's align config.                                                                       |
| `placement`                   | `keyof typeof Placements`          | -                                 |                                                                                             |
| `placements`                  | `BuildInPlacements`                | -                                 |                                                                                             |
| `trigger`                     | `ActionType`  `ActionType[]`       | `hover`                           | Which actions cause popup shown. Enum of `hover`,`click`,`focus`,`contextMenu`.             |
| `showAction`                  | `ActionType[]`                     | -                                 | Which actions cause popup shown. Enum of `hover`,`click`,`focus`,`contextMenu`.             |
| `hideAction`                  | `ActionType[]`                     | -                                 | Which actions cause popup hide. Enum of `hover`,`click`,`focus`,`contextMenu`.              |
| `builtinPlacements`           | `BuiltinPlacements`                | -                                 | Builtin placement align map. Used by placement prop.                                        |
| `getPopupContainer`           | `getPopupContainer(): HTMLElement` | -                                 | Function returning html node which will act as popup container.                             |
| `mouseEnterDelay`             | `Number`                           | `0`                               | Delay time to show when mouse enter. Unit: s.                                               |
| `mouseLeaveDelay`             | `Number`                           | `0.1`                             | Delay time to hide when mouse leave. Unit: s.                                               |
| `onPopupAlign`                | `function(popupDomNode, align)`    | -                                 | Callback when popup node is aligned.                                                        |

Dropdown use `rc-dropdown`. You can read more at the [link](https://github.com/react-component/dropdown).'