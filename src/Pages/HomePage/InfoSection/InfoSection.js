import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const InfoSection = () => {
    return (

        <div className="container" style={{
            backgroundImage: `url('https://i.postimg.cc/NGVtGjj8/465739-1.jpg')`, backgroundColor: "rgba(45,58,74,0.6)", backgroundBlendMode: 'darken, luminosity', marginTop: '100px',
            backgroundRepeat: 'no-repeat',
            backgroundPositon: 'center', width: '80%'
        }}>
            <div style={{ width: '100%', height: '400px', paddingTop: '200px', color: 'white' }}>
                <h4>Wanna be a good rider with us</h4>
                <p>We are very much concern about our client riding exprience.we try to guid them with best equipment (bike,tips and parts also)</p>
                <Button variant="contained" endIcon={<SendIcon />}>
                    learn more
                </Button>
            </div>
        </div>

    );
};

export default InfoSection;