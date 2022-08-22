import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';

class ImgMediaCard extends React.Component {
  render() {
    const {
      description, title, image, path, href,
    } = this.props;
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a href={href} target="_blank" rel="noreferrer">View the Code</a></Button>
          <Button size="small"><Link to={path}>View the App</Link></Button>
        </CardActions>
      </Card>
    );
  }
}

ImgMediaCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
export default ImgMediaCard;
