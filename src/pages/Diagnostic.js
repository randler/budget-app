import React from 'react';
import Menu from '../components/menu/Menu';
import ChartCanvas from '../components/chart/ChartCanvas';

function Diagnostic() {
  return (
    <div className="Diagnostic">
        <Menu />
        <ChartCanvas />
    </div>
  );
}

export default Diagnostic