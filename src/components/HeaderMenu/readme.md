# HeaderMenu

<!-- example -->
```jsx
import { HeaderMenu } from 'ui-kit-lite/components/HeaderMenu';

const menu = [{ id: '1', title: 'Menu 1' }, { id: '2', title: 'Menu 2' }]
const nestingMenu = [
    { id: '1', title: 'Menu 1', children: [{ id: '3', title: 'Menu 1.1' }, { id: '3', title: 'Menu 1.2' }] },
    { id: '2', title: 'Menu 2' },
]

const TestComponent = () => (
  <div>
      <HeaderMenu elements={menu} />
      <HeaderMenu elements={nestingMenu} />
  </div>
);
```

## Import
```jsx
import { HeaderMenu } from 'ui-kit-lite';
// or
import { HeaderMenu } from 'ui-kit-lite/components/HeaderMenu';
```

## Properties

| Name       | Type                                                                                                                                                                                       | Default | Description                |
|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------|:---------------------------|
| `elements` | `Array<{ id: string; title: string; open?: () => void; icon?: string; hidden?: boolean; disabled?: boolean; isChild?: boolean; isParent?: boolean; children?: element[]; type?: string;}>` | -       | List of elements for menu. |