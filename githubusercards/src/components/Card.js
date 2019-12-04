import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { loadCSS } from "fg-loadcss";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    width: "100%",
    height: "auto",
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  console.log(props.userObj);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
  }, []);

  if (!props.userObj.login) return <h2>Loading...</h2>;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.userObj.login.charAt(6)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.userObj.name}
        subheader={props.userObj.login}
      />
      <CardMedia
        className={classes.media}
        image={props.userObj.avatar_url}
        title={props.userObj.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Location: {props.userObj.location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a href={props.userObj.html_url}>
          <IconButton aria-label="Github">
            <Icon className="fab fa-github fa-2x" color="secondary" />
          </IconButton>
        </a>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.userObj.bio}</Typography>
          <Typography paragraph>Followers: {props.userObj.followers}</Typography>
          <Typography paragraph>Following: {props.userObj.following}</Typography>
          <Typography paragraph>Public Repos: {props.userObj.public_repos}</Typography>
          <Typography paragraph>Public Gist: {props.userObj.public_gists}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
