# HeaderUserMenu

<!-- example -->
```jsx
import { HeaderUserMenu } from 'ui-kit-lite/components/HeaderUserMenu';
import { HeaderUserSubMenu } from 'ui-kit-lite/components/HeaderUserSubMenu';
import { HeaderUserMenuElement } from 'ui-kit-lite/components/HeaderUserMenuElement';

const TestComponent = () => (
  <div>
      <HeaderUserMenu userName="Some name">
          <HeaderUserSubMenu label="Sub Menu" onClick={() => console.log('onClick')} >
              <HeaderUserMenuElement label="Sub Menu 1" />
              <HeaderUserMenuElement label="Sub Menu 2" />
          </HeaderUserSubMenu>

          <HeaderUserMenuElement label="Menu 1" />
          <HeaderUserMenuElement
              label="Menu 2"
              icon="folder"
          />
          <HeaderUserMenuElement
              label="Menu 3"
              href="https://github.com/"
          />
          <HeaderUserMenuElement label="Menu 4" >
              -text
          </HeaderUserMenuElement>
      </HeaderUserMenu>
  </div>
);
```

## Import
```jsx
import { HeaderUserMenu } from 'ui-kit-lite';
// or
import { HeaderUserMenu } from 'ui-kit-lite/components/HeaderUserMenu';
```

## Properties

| Name       | Type     | Default | Description                                                                      |
|:-----------|:---------|:--------|:---------------------------------------------------------------------------------|
| `userName` | `String` | `''`    | Header user menu title.                                                          |
| `children` | `Node`   | -       | Header user menu content. Usually `HeaderUserMenuElement` or `HeaderUserSubMenu` |

___

# HeaderUserSubMenu

## Import
```jsx
import { HeaderUserSubMenu } from 'ui-kit-lite';
// or
import { HeaderUserSubMenu } from 'ui-kit-lite/components/HeaderUserSubMenu';
```

## Properties

| Name        | Type       | Default | Description                                                   |
|:------------|:-----------|:--------|:--------------------------------------------------------------|
| `className` | `String`   | -       | Set a class to style the children wrapper component.          |
| `label`     | `String`   | -       | Header user sub-menu label.                                   |
| `children`  | `Node`     | -       | Header user sub menu content. Usually `HeaderUserMenuElement` |
| `onClick`   | `Function` | -       | Callback fired when the sub-menu label clicked.               |

___

# HeaderUserMenuElement

## Import
```jsx
import { HeaderUserMenuElement } from 'ui-kit-lite';
// or
import { HeaderUserMenuElement } from 'ui-kit-lite/components/HeaderUserMenuElement';
```

## Properties

| Name        | Type       | Default | Description                                                                                                    |
|:------------|:-----------|:--------|:---------------------------------------------------------------------------------------------------------------|
| `className` | `String`   | -       | Set a class to style the component                                                                             |
| `label`     | `String`   | -       | Header user menu element label.                                                                                |
| `icon`      | `String`   | -       | Value of the icon (See Font Icon Component).                                                                   |
| `href`      | `String`   | -       | The URL to link to when the menu element is clicked. If defined, an `a` element will be used as the root node. |
| `children`  | `Node`     | -       | The content of the menu element.                                                                               |
| `onClick`   | `Function` | -       | Callback fired when the component clicked.                                                                     |