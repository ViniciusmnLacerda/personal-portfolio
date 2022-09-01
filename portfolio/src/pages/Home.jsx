import PropTypes from 'prop-types';
import React from 'react';
import EmailSideBar from '../components/EmailSideBar';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import SocialSideBar from '../components/SocialSideBar';
import Title from '../components/Title';
import '../styles/Home.css';

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

  handleClick = () => {
    const { history } = this.props;
    history.push('/projects');
  };

  fakeLoading() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { loading } = this.state;
    const navItems = ['ABOUT', 'PROJECTS', 'SKILLS', 'CONTACT'];
    const pathNavItens = ['/about', '/projects', '/skills', '/contact'];
    return (
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <div className="home-container">
            <Navbar
              navItems={navItems}
              pathNavItens={pathNavItens}
            />
            <Title />
            <button onClick={this.handleClick} className="home-button" type="button">
              My work
            </button>
            <EmailSideBar />
            <SocialSideBar />
          </div>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
