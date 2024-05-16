# Menu

<!-- example -->
```jsx
import { Menu } from 'ui-kit-lite/components/Menu';

const TestComponent = () => (
  <div>
      <Menu>
          <MenuItem>Menu item 1</MenuItem>
          <SubMenu title="Sub menu 1">
              <MenuItem>MenuItem 1</MenuItem>
              <MenuItem disabled>MenuItem 2 disabled</MenuItem>
              <MenuItem title="MenuItem 3" />
          </SubMenu>
          <SubMenu title="Sub menu 2" disabled >
              <MenuItem>MenuItem 1</MenuItem>
          </SubMenu>
      </Menu>
  </div>
);
```

## Import
```jsx
import { Menu } from 'ui-kit-lite';
// or
import { Menu } from 'ui-kit-lite/components/Menu';
```

## Properties

| Name        | Type      | Default | Description                                             |
|:------------|:----------|:--------|:--------------------------------------------------------|
| `className` | `String`  | `''`    | Override or extend the styles applied to the component. |
| `children`  | `Node`    | -       | Menu contents. Usually `SubMenu` or `MenuItem`.         |


Ui-kit use rc-menu library for Menu. Other props can be viewed at the [link](https://react-component.github.io/menu/)
___

# SubMenu

## Import
```jsx
import { SubMenu } from 'ui-kit-lite';
// or
import { SubMenu } from 'ui-kit-lite/components/SubMenu';
```

## Properties

| Name         | Type               | Default | Description                                             |
|:-------------|:-------------------|:--------|:--------------------------------------------------------|
| `className`  | `String`           | `''`    | Override or extend the styles applied to the component. |
| `children`   | `Node`             | -       | Sub menu's contents. Usually `MenuItem`.                |
| `title`      | `String` or `Node` | -       | Sub menu's title.                                       |
| `disabled`   | `Boolean`          | `false` | If `true`, component will be disabled.                  |

Ui-kit use rc-menu library for SubMenu. Other props can be viewed at the [link](https://react-component.github.io/menu/)
___


# MenuItem

## Import
```jsx
import { MenuItem } from 'ui-kit-lite';
// or
import { MenuItem } from 'ui-kit-lite/components/MenuItem';
```

## Properties

| Name        | Type               | Default | Description                                             |
|:------------|:-------------------|:--------|:--------------------------------------------------------|
| `className` | `String`           | `''`    | Override or extend the styles applied to the component. |
| `children`  | `Node`             | -       | Menu item title.                                        |
| `title`     | `String` or `Node` | -       | Menu item title.                                        |
| `disabled`  | `Boolean`          | `false` | If `true`, component will be disabled.                  |
| `onClick`   | `Function`         | -       | Callback fired when the menu item clicked.              |


Ui-kit use rc-menu library for MenuItem. Other props can be viewed at the [link](https://react-component.github.io/menu/)

