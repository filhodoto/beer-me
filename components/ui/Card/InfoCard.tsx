import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: { marginTop: '1.5rem' },
  mediaImg: {
    height: 250,
  },
});

interface InfoCardProps {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string | null;
}
const InfoCard = ({ name, tagline, description, image_url }: InfoCardProps) => {
  const classes = useStyles();

  const defaultImgPath =
    'https://images.pexels.com/photos/237774/pexels-photo-237774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.mediaImg}
          component='img'
          alt={tagline}
          image={image_url === null ? defaultImgPath : image_url}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' color='primary' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(InfoCard);
