import React from 'react';
import './App.css';
import LifecycleEx from './R008_LifecycleEx'   // R008_LifecycleEx.js 임포트

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx
        prop_value = 'FromApp.js'   // R008_LifecycleEx 컴포넌트로 prop_value 라는 변수 전달
      />
    </div>
  );
}

export default App;

