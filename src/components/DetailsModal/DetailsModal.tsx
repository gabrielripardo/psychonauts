import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Psychonaut } from "../../models/psychonaut.model";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: 100,
    margin: 20,
    borderRadius: 100,
    border: "solid #eee 5px",
  },
});

export default function DetailsModal(props: any) {
  const { data, open, handleClose } = props;
  console.log(data);
  const classes = useStyles(props);
  const baseUrl = window.location.protocol + window.location.host + "/";

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-description"
              component={"span"}
              sx={{ mt: 2 }}
            >
              <Box component="div" className={classes.root}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Patient Details
                </Typography>
                <img className={classes.image} src={data.picture.medium}></img>
              </Box>
              <p>
                <strong>Name: </strong>
                <span>{`${data.name.title} ${data.name.first} ${data.name.last}`}</span>
              </p>
              <p>
                <strong>Email: </strong>
                <span>{data.email}</span>{" "}
              </p>
              <p>
                <strong>Gender: </strong>
                <span>{data.gender}</span>
              </p>
              <p>
                <strong>Birth date: </strong>
                <span>{data.dob.date}</span>
              </p>
              <p>
                <strong>Tellphone:</strong> <span>{data.phone}</span>{" "}
              </p>
              <p>
                <strong>Nationality: </strong>
                <span>{data.location.country}</span>{" "}
              </p>
              <p>
                <strong>Address: </strong>
                <span>{`${data.location.state} - ${data.location.city} - ${data.location.street.name} - ${data.location.street.number}`}</span>{" "}
              </p>
              <p>
                <strong>ID: </strong>
                <span>{data.login.uuid}</span>
              </p>
              <p>
                <strong>Share URL: </strong>
                <Link
                  to={`details/${data.login.uuid}`}
                >{`${baseUrl}details/${data.login.uuid}`}</Link>{" "}
              </p>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
