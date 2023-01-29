import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core/";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core/";
import { CardMedia } from "@material-ui/core/";
import { Button } from "@material-ui/core/";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "animate.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <h1
        style={{ fontFamily: "Alata", paddingTop: "1rem" }}
        className="animate__animated animate__fadeIn"
      >
        Made with <FavoriteIcon style={{ color: "red" }} /> in India{" "}
        <img
          src={require("../images/icons8-india-48.png")}
          style={{ height: "2rem" }}
        />{" "}
        By
      </h1>

      <div className="contact_container">
        <div className="contact_item animate__animated animate__fadeInLeft">
          <Card className={classes.root} variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Nandhini Umesh"
                height="300"
                image={require("../images/nandhini.jpeg")}
                title="Nandhini Umesh"
              />
              <CardContent className="contact_card">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ fontFamily: "Mulish" }}
                >
                  Nandhini Umesh
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontFamily: "Poppins" }}
                >
                  Aspiring Developer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                textAlign: "right",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "10vh",
                paddingRight: "10vh",
              }}
            >
              <div>
                <a target="_blank" href="https://github.com/numesh06">
                  <img
                    src={require("../images/icons8-github.svg")}
                    alt="linkedin"
                    style={{ height: "5vh", width: "5vh" }}
                  />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/nandhini-umesh-938b06263"
                >
                  <img
                    src={require("../images/icons8-linkedin.svg")}
                    alt="linkedin"
                    style={{ height: "5vh", width: "5vh" }}
                  />
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;