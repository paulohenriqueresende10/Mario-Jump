'use strict';

const e = React.createElement;

class reset extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reset: false };
  }

  render() {
    if (this.state.reset) {
      return window.location.reload();
    }

    return e(
      'button',
      {id:"reset", onClick: () => this.setState({ reset: true }) },
      'RECOMEÇAR'
    );

    
  }
}

const domContainer = document.getElementById('container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(reset));