import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { get } from "../services/service";
import ModalPokemon from "./modal";
const CardPokemon = ({ pokemon }) => {
    const [poke, setPokemon] = useState({})
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getInfoPokemon = async (url="https://pokeapi.co/api/v2/pokemon/6/") => {
        const idPokemon = url.split("/")[6]
        const pokemon = await get(`pokemon/${idPokemon}`)
        console.log(pokemon)
        setPokemon(pokemon)
    }
    useEffect(() => {
        getInfoPokemon();
    },[])
  return (
    <>
    <Grid container spacing={2} sx={{ padding: 8 }}>
      {pokemon.map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card sx={{ maxWidth: 345 }} key={item.pokemon.name} xs={8}>
            <CardMedia
              component="img"
              height="240"
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                item.pokemon.url.split("/")[6]
              }.svg`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.pokemon.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => {getInfoPokemon(item.pokemon.url); handleOpen()}}>Detalles</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      
    </Grid>
    <ModalPokemon handleClose={handleClose} open={open} pokemon={poke}/>
    </>
  );
};
export default CardPokemon;
