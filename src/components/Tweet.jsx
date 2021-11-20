import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function Tweet({ tweet }) {
  const avatar = tweet.author[0].toUpperCase();
  return (
    <Card sx={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}>
      <CardHeader
        sx={{ textAlign: 'left' }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatar}
          </Avatar>
        }
        title={tweet.author}
        subheader={tweet.date}
      />
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography variant="body2" color="text.secondary">{tweet.text}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
