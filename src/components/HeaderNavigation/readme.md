# HeaderNavigation

<!-- example -->
```jsx
import { HeaderNavigation } from 'ui-kit-lite/components/HeaderNavigation';

const TestComponent = () => (
  <div>
      <HeaderNavigation
          title="Menu"
          onClick={() => console.log('onClick')}
      />
  </div>
);
```

## Import
```jsx
import { HeaderNavigation } from 'ui-kit-lite';
// or
import { HeaderNavigation } from 'ui-kit-lite/components/HeaderNavigation';
```

## Properties

| Name      | Type       | Default | Description                                |
|:----------|:-----------|:--------|:-------------------------------------------|
| `title`   | `String`   | -       | Header navigation title.                   |
| `onClick` | `Function` | -       | Callback fired when the component clicked. |