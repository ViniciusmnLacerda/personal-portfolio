import React, { Component } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import infoProjects from '../services/infoProjects';
import '../styles/Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      cardToRender: 0,
    };
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.dotsNavigation = this.dotsNavigation.bind(this);
  }

  nextCard() {
    const { cardToRender } = this.state;
    if (cardToRender === infoProjects.length - 1) {
      this.setState({ cardToRender: 0 });
    } else {
      this.setState((prevState) => ({
        cardToRender: prevState.cardToRender + 1,
      }));
    }
  }

  previousCard() {
    const { cardToRender } = this.state;
    if (cardToRender === 0) {
      this.setState({ cardToRender: infoProjects.length - 1 });
    } else {
      this.setState((prevState) => ({
        cardToRender: prevState.cardToRender - 1,
      }));
    }
  }

  dotsNavigation(index) {
    this.setState({
      cardToRender: index,
    });
  }

  render() {
    const { cardToRender } = this.state;
    const {
      title,
      description,
      techlist,
      pathToApp,
      pathToGitHub,
      image,
    } = infoProjects[cardToRender];
    return (
      <div className="card-container">
        <div className="content-slide">
          <h1>
            <span>{`0${cardToRender + 1}.`}</span>
            {title}
          </h1>
          <div className="slide">
            <div className="card">
              <div className="project-content">
                <div className="content-container">
                  <h2>Some title</h2>
                  <div className="project-description">
                    <p>{description}</p>
                  </div>
                  <ul className="project-tech-list">
                    {techlist.map((tech) => (
                      <li>
                        {' '}
                        {tech
                          .split('')
                          // eslint-disable-next-line react/no-array-index-key
                          .map((letter, index) => (<span key={(index + 10)} className="letter-techlist">{letter}</span>))}

                      </li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      href={pathToGitHub}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <VscGithubAlt />
                    </a>
                    <a
                      href={pathToApp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-image">
                <a href={pathToApp} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={title} />
                </a>
              </div>
            </div>
          </div>
          <div className="card-dots-line">
            <div
              className="left-arrow"
              onClick={this.previousCard}
              role="button"
              tabIndex="0"
              aria-label="previous-project"
              onKeyPress={this.handleKeyPress}
            />
            {infoProjects.map((card, index) => (
              <div
                key={card.title}
                className={cardToRender === index ? 'card-dot active' : 'card-dot'}
                role="button"
                tabIndex="0"
                aria-label="previous-project"
                onClick={() => this.dotsNavigation(index)}
                onKeyPress={this.handleKeyPress}
              />
            ))}
            <div
              className="right-arrow"
              onClick={this.nextCard}
              role="button"
              tabIndex="0"
              aria-label="next-project"
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
