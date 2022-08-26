import React from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Loading from '../components/Loading';
import Title from '../components/Title';

class Home extends React.Component {
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
      <div>
        {loading ? (
          <Loading />
        ) : (
          <BackgroundAnimation>
            <Title />
          </BackgroundAnimation>
        )}
      </div>
    );
  }
}

export default Home;
