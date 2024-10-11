import React from 'react';

function Sidebar({ total, history, onRemoveHistoryItem }) {  // Destructure onRemoveHistoryItem

  return (
    <div className="sidebar">
      <h3>Result</h3>
      <p>Total: {total}</p>
      <h3>History</h3>
      <ul id="historyList">
        {history.map((entry, index) => (
          <li key={index} onClick={() => onRemoveHistoryItem(index)}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;