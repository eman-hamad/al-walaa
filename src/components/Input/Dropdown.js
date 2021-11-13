import React from 'react'
import { InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import useStyles from '../../container/Auth/Styles'

export default function Dropdown(props) {
    const classes = useStyles();

    const styles={
        menuStyle:{
            fontSize: '17px',
            marginRight: '5px',
            marginLeft: '5px',
            textAlign: 'center'
        },
        }
     const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(age)
    };
    return (
        <div>
            <FormControl fullWidth >        
                <InputLabel id="demo-simple-select-label" style={styles.menuStyle}>{props.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.value}
                    onChange={props.valueChange}
                    style={styles.menuStyle}
                    >
                        {props.children}
                    {/* <MenuItem name ="country" value={1} style={styles.menuStyle}>مصر</MenuItem>
                    <MenuItem name ="country" value={2} style={styles.menuStyle}>مصر</MenuItem>
                    <MenuItem name ="country" value={3} style={styles.menuStyle}>مصر</MenuItem> */}
                </Select>
        
            </FormControl>
        </div>
    )
}
