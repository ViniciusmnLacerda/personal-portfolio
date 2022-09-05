import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import '../styles/Thanks.css';

class Thanks extends Component {
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
    const { loading } = this.state;
    return (
      <div className="thanks-container">
        {loading ? (
          <Loading />
        ) : (
          <div className="thanks-card">
            <h1>Thanks!</h1>
            <p>{'I\'ll get back to you ass soon as I can'}</p>
            <Link to="/">Go back</Link>
          </div>
        )}
      </div>
    );
  }
}

export default Thanks;
