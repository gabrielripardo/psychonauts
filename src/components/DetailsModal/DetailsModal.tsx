import { Link } from "react-router-dom";
import { Psychonaut } from "../../models/psychonaut.model";
import { PsyPowers } from "../../models/psyPowers.model";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
  height: "80vh",
  overflow: "scroll",
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
  boxContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: "#fff",
    border: "2px solid #000",
    padding: "14px 6px",
    height: "80vh",
    overflow: "scroll",
  },
  boxPower: {
    display: "flex",
    alignItems: "center",
  },
});

export default function DetailsModal(props: any) {
  const { data, open, handleClose } = props;
  console.log(data);
  const classes = useStyles(props);

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
          <Box className={classes.boxContent}>
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
                  Powers
                </Typography>
              </Box>
              {data.length > 0 ? (
                data.map((power: PsyPowers) => (
                  <Box key={power._id} className={classes.boxPower}>
                    <img className={classes.image} src={power.img}></img>
                    <Box>
                      <p>
                        <strong>Name: </strong>
                        {power.name}
                      </p>
                      <p>
                        <strong>Description: </strong>
                        <span>{power.description}</span>
                      </p>
                    </Box>
                  </Box>
                ))
              ) : (
                <Box component="div" className={classes.root}>
                  <Typography id="transition-modal-title" component="h3">
                    Esse Psyconauta não possui poderes.
                  </Typography>
                </Box>
              )}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
