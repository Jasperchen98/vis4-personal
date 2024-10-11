import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);

  function handleAddOne() {
    setTotal(total +1);
    setHistory([...history, '+1']);
  }

  function handleAddTwo() {
    setTotal(total +2);
    setHistory([...history, '+2']);
  }

  function handleRemoveOne() {
    setTotal(total -1);
    setHistory([...history, '-1']);
  }

  function handleRemoveTwo() {
    setTotal(total -2);
    setHistory([...history, '-2']);
  }

  function handleReset() {
    setTotal(0);
    setHistory([...history, 'Reset']);
  }

  function handleClearAll() {
        setTotal(0);
        setHistory([]);
    }

  function handleRemoveHistoryItem(index) {
      const newHistory = history.filter((_, i) => i !== index);
      setHistory(newHistory);
    }

  function handleRemoveHistoryItem(index) {
    const operation = history[index];  

    
    if (operation === '+1') {
      setTotal(total - 1);
    } else if (operation === '+2') {
      setTotal(total - 2);
    } else if (operation === '-1') {
      setTotal(total + 1);
    } else if (operation === '-2') {
      setTotal(total + 2);
    }

    
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
  }



  return (
    <div className="App">
      <Header />

        <div id="main-content">

          <Sidebar 
            total={total}
            history={history}
            onRemoveHistoryItem={handleRemoveHistoryItem}
          />
          <MainContent
            onAddOne={handleAddOne}
            onAddTwo={handleAddTwo}
            onRemoveOne={handleRemoveOne}
            onRemoveTwo={handleRemoveTwo}
            onReset={handleReset}
            onClearAll={handleClearAll}
          />

        </div>

    </div>
  );
}

export default App;
