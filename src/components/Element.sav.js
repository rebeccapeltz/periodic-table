import React from 'react';
import '../styles/Element.scss';

class Element extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleClick() {
    this.props.handleElementClick(this.props.data);
  }

  handleMouseOver(group) {
    this.props.handleMouseOver(group);
  }

  handleMouseOut() {
    this.props.handleMouseOut();
  }

  render() {
    if (this.props.data.name === 'Number') {
      return <div className='Element number'>{this.props.data.number}</div>;
    } else if (this.props.data.name === 'Blank') {
      return <div className='Element blank'></div>;
    } else {
      let classes = ['Element'];
      if (this.props.highlight) {
        classes.push('highlight');
      }
      return (
        <div
          className={classes.join(' ')}
          onClick={this.handleClick}
          data-category={this.props.data.category}
        >
          <div className='number'>{this.props.data.number}</div>
          <div className='symbol'>{this.props.data.symbol}</div>
          <div className='name'>{this.props.data.name}</div>
          <div className='mass'>
            {Math.round(this.props.data.atomic_mass * 1000) / 1000}
          </div>
        </div>
      );
    }
  }
}

export default Element;
