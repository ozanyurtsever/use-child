# `use-child`

> React hook for getting the type of any nested child component

A component may want to make assumptions about its children to satisfy layout
constraints. This custom hook helps you to determine if there is any nested child with a specific type, and returns you the nested child itself to apply any layout constraints to it while rendering.

## Install

```sh
npm install use-child
```

## Usage

```js
import useChild from 'use-child';

const Car = props => {
  const [wheelExists, WheelComponent] = useChild(props.children, Wheel);
  const [engineExists, EngineComponent] = useChild(props.children, Engine);

  return (
    <div>
      {wheelExists && WheelComponent}
      {engineExists && EngineComponent}
    </div>
  );
};

const Wheel = () => {
  return <div>I am a wheel</div>;
};

const Engine = () => {
  return <div>I am an engine</div>;
};
```
