import React, { Component } from 'react';

class NameComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name_displayed: 'First Name'
    };
  }

  componentDidMount() {
    console.log('componentDidMount - component mounted')
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'component receive props')
    if(this.props.user_name !== nextProps.user_name) {
      if (nextProps.user_name.indexOf(' ')>-1) {
        this.setState({
          name_displayed: 'Full Name'
        })
      } else {
        this.setState({
          name_displayed: 'First name'
        })
      }
    }
  }

  componentDidUpdate() {
    console.log('componentDidUpdate - component state changed')
  }

  render() {
    console.log('Render - component rendered')
    const { name_displayed } = this.state;
    const { user_name } = this.props;

    return (
      <div className="App">
        <p>{name_displayed}</p>
        <p>{user_name ? user_name : 'No username'}</p>
      </div>
    );
  }
}

export default NameComponent;
