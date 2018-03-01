import React from 'react';

function Card(props) {
  // generate random rgb value
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // if funMode, randomize background color of card
  const cardStyle = {
    backgroundColor: props.funMode ? generateRandomColor() : 'white',
  };

  return (
    <div className="Card" style={cardStyle}>
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      {/* whatever goes in between the opening and closing tags of the Card component will take the place of props.children */}
      <div className="body">{props.children}</div>
    </div>
  );
}

export default Card;
