import React from 'react';
import CSSModules from 'react-css-modules';
import s from './list.less';
// import backend from '../../../backend/Backend';

class ListA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    // TODO
    // backend.getInstance().getProductList({ method: 'POST' }).then((res) => {
    //   console.log(res);
    // });
  }

  render() {
    return (
      <span>23</span>

    );
  }
}

export default CSSModules(ListA, s);
