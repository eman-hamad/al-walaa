import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import useStyles from '../../container/Auth/Styles'

const Input = ({ name, handleChange, label, half, autoFocus, type, icon  }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={half ? 6 : 12} >
                <TextField
               
                    name={name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    label={label}
                    autoFocus={autoFocus}
                    type={type}
                    InputProps={{className: classes.input, endAdornment: (
                                <InputAdornment  >
                                    <IconButton>
                                        {icon}
                                    </IconButton>
                                </InputAdornment>
                                )}}
                    inputProps ={{ style: { textAlign: 'right'  }}}
                InputLabelProps={{style: {fontSize: 17}}}
                />
        </Grid>
    )
}

export default Input
