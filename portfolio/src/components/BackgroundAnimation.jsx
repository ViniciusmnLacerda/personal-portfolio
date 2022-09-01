import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/BackgroundAnimation.css';

class BackgroundAnimation extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
    this.fakeLoading = this.fakeLoading.bind(this);
  }

  componentDidMount() {
    this.fakeLoading();
  }

  fakeLoading() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { children } = this.props;
    const { loading } = this.state;
    return (
      <div id="nc-main" className="nc-main bg-cover bg-cc">
        <div className="full-wh">
          <div className="bg-animation">
            {children}
            <div id={!loading ? 'stars1' : undefined} />
            <div id={!loading ? 'stars2' : undefined} />
            <div id={!loading ? 'stars3' : undefined} />
            <div id={!loading ? 'stars4' : undefined} />
          </div>
        </div>
      </div>
    );
  }
}

BackgroundAnimation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BackgroundAnimation;
