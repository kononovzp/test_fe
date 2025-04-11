import { Theme } from '@mui/material/styles';

import Button from './Button';
import FormHelperText from './FormHelperText';
import IconButton from './IconButton';
import Typography from './Typography';
import TextField from './TextField';
import Pagination from './Pagination';
import MuiCssBaseline from './MuiCssBaseline';
import InputBase from './InputBase';
import FormLabel from './FormLabel';
import FormControlLabel from './FormControlLabel';
import InputLabel from './InputLabel';
import MenuItem from './MenuItem';
import ListItem from './ListItem';

export default function ComponentsOverrides(theme: Theme) {
  return {
    ...FormHelperText(),
    ...IconButton(theme),
    ...Typography(),
    ...Pagination(theme),
    ...MuiCssBaseline(theme),
    ...InputBase(theme),
    ...TextField(theme),
    ...FormLabel(),
    ...FormControlLabel(theme),
    ...InputLabel(),
    ...MenuItem(theme),
    ...ListItem(theme),
    ...Button(theme),
  };
}
