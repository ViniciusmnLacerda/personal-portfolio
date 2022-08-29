import React from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import EmailSideBar from '../components/EmailSideBar';
import Loading from '../components/Loading';
import Navbar from '../components/NavBar';
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

  fakeLoading() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { loading } = this.state;
    const navItems = ['HOME', 'PROJECTS', 'SKILLS', 'CONTACT'];
    const pathNavItens = ['/', '/projects', '/skills', '/contact'];
    return (
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <BackgroundAnimation>
            <div className="home-container">
              <Navbar
                navItems={navItems}
                pathNavItens={pathNavItens}
              />
              <Title>
                <SocialSideBar />
                <EmailSideBar />
              </Title>
            </div>
          </BackgroundAnimation>
        )}
      </div>
    );
  }
}

export default Home;
