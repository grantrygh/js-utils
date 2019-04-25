**Install**: `yarn add -D @audentio/utils`

(vscode should auto-import most things)

```jsx
import { classy } from '@audentio/utils/src/classy';

return <div className={classy('one', 4 < 5 && 'two')}>Hello world</div>;
```
