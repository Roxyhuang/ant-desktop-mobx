import React from 'react';
import { inject, observer } from 'mobx-react';
import CSSModules from 'react-css-modules';
import s from './check.less';

@inject('CheckModel')
@observer
class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    // TODO
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div>{this.props.CheckModel.number}</div>
        <div>{this.props.CheckModel.total}</div>
        <button onClick={()=> {
          this.props.CheckModel.addNumber(1);
          console.log(this.props.CheckModel.number);
        }}>+</button>
      </div>
    );
  }
}

export default Check;
