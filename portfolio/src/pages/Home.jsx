import React from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import DrawerAppBar from '../components/DrawerAppBar';
import Loading from '../components/Loading';
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
    const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'SKILLS'];
    const pathNavItens = ['/', '/about', '/projects', '/skills'];
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <BackgroundAnimation>
            <div className="home-container">
              <DrawerAppBar
                navItems={navItems}
                pathNavItens={pathNavItens}
              />
              <Title />
            </div>
          </BackgroundAnimation>
        )}
      </div>
    );
  }
}

export default Home;
