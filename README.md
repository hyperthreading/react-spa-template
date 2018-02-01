# Introduction

React + Redux + Redux Thunk + Immutable.js + CSS Modules를 사용하는 프로젝트 템플릿입니다.

# Libraries
각 라이브러리의 rationale 정도는 읽어보시면 좋습니다.

### redux
[](https://redux.js.org/)
app state management, debugging 단순화를 위한 라이브러리입니다
**redux-devtool**을 사용하면 action을 감시하고 time machine 기능을 사용할 수 있습니다.

### redux-thunk
[](https://github.com/gaearon/redux-thunk)
액션이 함수를 리턴할 수 있습니다. 해당 함수는 dispatch되면 실행됩니다.
API콜과 같이 좀 더 복잡한 action을 쉽게 만들게 해줍니다.

### immutable.js
[](https://facebook.github.io/immutable-js/)
persistent data structure support for javascript by facebook
불변성을 잘 지키도록 도와주는 data structure 확장입니다.
shouldComponentUpdate를 통한 퍼포먼스 최적화와 reducer에 사용합니다.
Immutable Object, Array 등을 변경하면 레퍼런스가 다른 새로운 오브젝트가 생성되며
기존 오브젝트는 값이 변하지 않습니다.

### classnames
[](https://github.com/JedWatson/classnames)
classname들을 쉽게 조합해주는 가벼운 라이브러리입니다.

```javascript
import cn from 'classnames'
cn('foo', 'bar') // => 'foo bar'

// lots of arguments of various types
cn('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
cn(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

CSS Modules
[](https://github.com/css-modules/css-modules)
import 구문으로 css classnames를 import 할 수 있습니다.
```jsx
import styles from './App.css'

<App className={styles.someClassName} />
```

development version에서는 이름이
"[name]__[local]__[hash:base64:5]"
로 설정되어 있습니다.

# Guide

## Project structures

### File structures
Plain Javascript(ES6든 뭐든)이라면 확장자를 js로
JSX Syntax를 사용하면 확장자를 jsx로 할 것

src/
    index.js **mount react component**
    store.js - **redux store**
    reducers/ - **redux reducers**
        index.js
    actions/ - **redux actions**
        index.js
    containers/ - **smart components, redux store와 connect된 것들**
        App.jsx
        BottomBar.jsx
        CourseMaterials.jsx
    components/ - **dumb components, stateless**
        ComplexComp/
            index.jsx
            SmallButton.jsx
            SmallButton.css
        SimpleComp.jsx
    apis/ - **ajax call로 state를 바꾸는 것들 모음 (redux-thunk)**
    constants/ - **상수 (api endpoint등)**
        

## Code Style
[Airbnb Style Guide](https://github.com/airbnb/javascript#the-javascript-style-guide-guide)를 참고해주세요!! (한국어도 있어용)

### Please use semicolon

### `var`이 아닌 `let`과 `const` 사용
var은 function scope, let const는 block (curly bracket) 단위입니다.
Hoisting, Scope로 인한 에러를 피하기 위함입니다.

### Indentation: 2 Spaces

### Writing names for variable: use **camelCase**

### Writing names for instances of component: use **PascalCase**
for instance,
```
const Comp = <MyComp />;
const num = 0;
```

### Javascript Object
Object curly bracket과 내용은 한 칸 띄어 씁니다.

### Writing JSX 
1. true인 prop은 prop 이름만 씁니다.
2. jsx curly bracket은 띄어 쓰지 않습니다.
3. attribute는 "double quote"를 사용합니다.
4. 컴포넌트를 한 줄로 쓰거나 여러 줄에 걸쳐 쓸 수 있습니다.
5. prop이 많은 경우 아래와 같이 쓸 수도 있습니다.

```jsx
<ComponentTwoLine
  prop1={1}
  prop2={2}
>
  <Component oneLine two={3} three="attribute string"/>
</ComponentTwoLine>
```

