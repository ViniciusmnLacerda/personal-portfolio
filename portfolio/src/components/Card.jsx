import React, { Component } from 'react';
import infoProjects from '../services/infoProjects';
import '../styles/Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      cardToRender: 2,
    };
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
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

  render() {
    const { cardToRender } = this.state;
    const { title, description } = infoProjects[cardToRender];
    return (
      <div className="card-container">
        <div className="content-slide">
          <div className="slide">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="cards" />
          </div>
          <div className="card-dots-line">
            {infoProjects.map((card) => (
              <div
                key={card.title}
                className="card-dot"
              />
            ))}
          </div>
          <div
            className="left-arrow"
            onClick={this.previousCard}
            role="button"
            tabIndex="0"
            aria-label="previous-project"
            onKeyPress={this.handleKeyPress}
          />
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
    );
  }
}
export default Card;
