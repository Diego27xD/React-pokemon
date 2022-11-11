import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia, Grid } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 600,
};

const ModalPokemon = ({ handleClose, open, pokemon }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color={"black"}
          >
            {pokemon.name}
          </Typography>
          <CardMedia
            component="img"
            height="280"
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt="green iguana"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography color={"black"} sx={{ fontWeight: 800, mt: 2 }}>
                {" "}
                Habilidades
              </Typography>
              {pokemon.abilities?.map((item) => (
                <Typography sx={{ mt: 2 }} color={"black"}>
                  {item.ability.name}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography color={"black"} sx={{ fontWeight: 800, mt: 2 }}>
                {" "}
                Stats
              </Typography>
              {pokemon.stats?.map((item) => (
                <Typography sx={{ mt: 2 }} color={"black"}>
                  {item.stat.name}:{item.base_stat}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalPokemon;
