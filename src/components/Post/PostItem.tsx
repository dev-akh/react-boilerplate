
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { PostData } from '../../pages/Post/Post';

const PostItem = (post: PostData) =>{
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={post.title} secondary={post.body} />
    </ListItem>
  )
}

export default PostItem;
