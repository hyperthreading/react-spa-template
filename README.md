# Introduction

+ React-Router

React + Redux + Redux Thunk + Immutable.js + CSS Modules를 사용하는 프로젝트 템플릿입니다.
Create React App을 eject해 만들었습니다. (locally installed eslint@4와 충돌하기 때문에 주의해주세요. 후에 변경할 수 있음. 아마 webpack + babel + serve 사용할듯)

## Index
설치/실행/빌드는 **Development Cycle**
라이브러리에 대한 정보는 **Libraries**
프로젝트 구조, 코딩 스타일은 **Guides**를 참조해 주세요

# Development Cycle

Tested on **Node v8.9.4**, macOS High Sierra
[nodejs website](https://nodejs.org/en/)에서 LTS v8로 깔면 됩니다.

## Installation
쉘에서 다음을 실행해 주세요
`git clone`
`cd zeta`
`npm i`

## Development/
Development mode에서는 optimization이 적고 Redux Devtool을 사용할 수 있으며 코드를 수정하면 페이지가 업데이트 되며 CSS Modules의 className이 읽기 쉬운 형태로 되어 있습니다.
포트 충돌이 없을 경우 localhost:3000으로 접속할 수 있습니다.
`npm run start`

## Production

`npm run build`

# Libraries
각 라이브러리의 rationale 정도는 읽어보시면 좋습니다.

### redux [https://redux.js.org/](https://redux.js.org/)
app state management, debugging 단순화를 위한 라이브러리입니다
**redux-devtool**을 사용하면 action을 감시하고 time travel 기능을 사용할 수 있습니다.

### redux-thunk [https://github.com/gaearon/redux-thunk](https://github.com/gaearon/redux-thunk)
액션이 함수를 리턴할 수 있습니다. 해당 함수는 dispatch되면 실행됩니다.
API콜과 같이 좀 더 복잡한 action을 쉽게 만들게 해줍니다.

### immutable.js [https://facebook.github.io/immutable-js/](https://facebook.github.io/immutable-js/)
persistent data structure support for javascript by facebook
불변성을 잘 지키도록 도와주는 data structure 확장입니다.
shouldComponentUpdate를 통한 퍼포먼스 최적화와 reducer에 사용합니다.
Immutable Object, Array 등을 변경하면 레퍼런스가 다른 새로운 오브젝트가 생성되며
기존 오브젝트는 값이 변하지 않습니다.

### classnames [https://github.com/JedWatson/classnames](https://github.com/JedWatson/classnames)
classname들을 쉽게 조합해주는 가벼운 라이브러리입니다.
[예제]
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
"[name] _ _ [local] _ _ [hash:base64:5]"
로 설정되어 있습니다.

# Guide

## Project structures

### Root structures
```
src/ - 소스 폴더입니다.
config/ - webpack, babel, 컴파일 경로, 환경 변수등을 설정합니다.
scripts/ - CRA에 들어있던 스크립트입니다. start, build에 필요한 스크립트가 들어있습니다.
public/ - npm run start에서 static hosting의 root입니다. 리액트 컴포넌트가 마운트되는 index.html을 포함합니다.
build/ - npm run build에서 빌드 결과물이 저장되는 폴더입니다.
```


### Source File structures
Plain Javascript(ES6든 뭐든)이라면 확장자를 js로
JSX Syntax를 사용하면 확장자를 jsx로 할 것

```
src/
    index.js **mount react component**
    configureStore.js - **redux store**
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
```

## Code Style
[Airbnb Style Guide](https://github.com/airbnb/javascript#the-javascript-style-guide-guide)를 참고해주세요!! (한국어도 있어용)
eslint@4는 globally install 해주셔야 Create React App과 충돌이 없습니다.
현재 locally installed eslint@3를 airbnb extension을 제거하고 사용하고 있습니다.

### Please use semicolon

### `var`이 아닌 `let`과 `const` 사용
var은 function scope, let const는 block (curly bracket) 단위입니다.
Hoisting, Scope로 인한 에러를 피하기 위함입니다.

### Indentation: 2 Spaces

### Writing names for variable: use **camelCase**

### Writing names for instances of component: use **PascalCase**

for instance,

```Javascript
// PascalCase for Component names and its instances
const Comp = <MyComp />; 
// camelCase for normal variables
const numberZero = 0; 
```



### Javascript Object

Object curly bracket과 내용은 한 칸 띄어 씁니다.

```Jsx
let name = { first: "john", last: "doe" }; // one space
let NameComp = <NameView name={name} />;   // no spacing for jsx bracket
```



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

