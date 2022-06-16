import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useChild from '../.';

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

const App = () => {
  return (
    <div>
      <Car>
        <Wheel />
        <Engine />
      </Car>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
