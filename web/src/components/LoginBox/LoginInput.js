import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";

const LoginInput = (props) => {
    const { value, handleChange, handleClickShowPassword, showPassword, label, handleOnBlur } = props;

    return (
        <FormControl sx={{ m: 1.5, width: '35ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
                type={!showPassword ? 'text' : 'password'}
                value={value}
                onChange={handleChange}
                onBlur={handleOnBlur}
                endAdornment={
                    handleClickShowPassword && <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>}
                label={label}
            />
        </FormControl>
    )
}

export default LoginInput;