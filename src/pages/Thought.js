import React from 'react';

class Thought extends React.Component {
  render() {
    let newText = this.props.message.split('\n').map((item, i) => {
      return <p key={i}>{item}</p>
    });
    return(
      <div className="row">
        <div className="col-sm-3">
          <h2>{this.props.name}</h2>
          <hr />
        </div>
        <div className="col-sm-9">
          <p>{newText}</p>
        </div>
      </div>
    );
  }
}
  
  export default Thought;