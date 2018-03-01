import React from 'react';

function Card(props) {
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const cardStyle = {
    backgroundColor: props.funMode ? generateRandomColor() : 'white',
  };

  return (
    <div className="Card" style={cardStyle}>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div className="body">{props.children}</div>
    </div>
  );
}

export default Card;
