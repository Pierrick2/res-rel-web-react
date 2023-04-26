import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import "../../styles/Filtres.scss";

export default function Filtres() {
    return (

        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                id="size-small-outlined"
                size="small"
                options={categorie.map((option) => option.label)}
                renderInput={(params) => <TextField {...params} label="Catégories" />}
            />
        </Stack>
    );

};

const categorie = [
    { value: 0, label: "Toutes les catégories" },
    { value: 1, label: "Communication" },
    { value: 2, label: "Exercices" },
    { value: 3, label: "Travaux pratiques" },
    { value: 4, label: "Travaux dirigés" },

];
