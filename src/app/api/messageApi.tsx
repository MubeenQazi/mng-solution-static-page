import * as React from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function MessageApi(formData: any) {    
    const [open, setOpen] = React.useState(false);
    const [alertMess, setAlertMess] = React.useState("success");
    
    console.log(formData.formData.subject, formData);
    const message = `<h1>${formData.formData.subject}</h1> <h1>${formData.formData.phone}</h1>`;

    const requestBody = {
        "source": "portal",
        "page": "landing",
        "message": message
    }

    console.log(requestBody);
    axios.post("https://api.msolcsptest.com/notify/v1", {requestBody})
    .then(function (response) {
        if (response) {
            setAlertMess("success");
        }
    })
    .catch(function (error) {
        setAlertMess("fail");
    });

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={"success"} sx={{ width: '100%' }}>
            This is a success message!
            </Alert>
        </Snackbar>
    )
}