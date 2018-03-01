import React, { Fragment } from 'react';

import Card from './Card';

function Container(props) {
  // destructuring. this would be the same...
  // const funMode = props.funMode;
  // destructuring is cleaner and more concise.
  const { funMode } = props;
  const btnText = funMode ? 'Turn Off Fun' : 'Turn On Fun';
  // change the styling based on props
  const btnStyle = {
    padding: '10px',
    backgroundColor: funMode ? 'white' : 'red',
    color: funMode ? 'black' : 'white',
    border: 'none',
    borderRadius: '2px',
    fontSize: '20px',
    outline: 'none',
    cursor: 'pointer',
  };

  return (
    <Fragment>
      <div className="container">
        <Card title="Card 1" funMode={props.funMode}>
          {/* This is where the children go */}
          <div>
            <p>This is the body of a card.</p>
          </div>
        </Card>
        <Card title="Card 2" funMode={props.funMode}>
          <div>
            <p>Here is another card</p>
          </div>
        </Card>
        <Card title="Card 3" funMode={props.funMode}>
          <div>
            <p>This is the body of a card.</p>
          </div>
        </Card>
        <Card title="Card 4" funMode={props.funMode}>
          <div>
            <p>Here is another card</p>
          </div>
        </Card>
        <Card title="Card 5" funMode={props.funMode}>
          <div>
            <p>This is the body of a card.</p>
          </div>
        </Card>
        <Card title="Card 6" funMode={props.funMode}>
          <div>
            <p>Here is another card</p>
          </div>
        </Card>
        <Card title="Card 7" funMode={props.funMode}>
          <div>
            <p>This is the body of a card.</p>
          </div>
        </Card>
        <Card title="Card 8" funMode={props.funMode}>
          <div>
            <p>Here is another card</p>
          </div>
        </Card>
      </div>
      {/* this toggleFun function is passed in through props */}
      <button onClick={props.toggleFun} style={btnStyle}>
        {btnText}
      </button>
    </Fragment>
  );
}

export default Container;
