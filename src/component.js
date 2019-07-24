import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Visibility from '@material-ui/icons/Visibility'
import Close from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';

/**
 * Composants d'affichage des différentes section de la page et Highlight sur la sidebar (/!\ Sortir la logique d'highlight de la sidebar de ces composants -- SoC)
 * InputMultipleTest : Tuile Simple
 * InputStaticDouble : Tuile Double Rebond
 * InputDouble : Tuile Double
 */

 
 /**
  * Composant Tuile Simple 
  */
function InputMultipleTest(props){
    //Affichage des différents champs par nombre d'élèments dans le tableau des données "Single"
    return (
        <div className="tuilesSimple contentManage">
            <h2>Tuiles simples</h2>
            <Card  className="card">
                <CardContent className="inputLilTuile">
                {
                props.single.map((field, index) => {
                    return (
                        <TextField className="fieldSingle" key={index} fullWidth onChange={(e) => {
                            props.handleChangeInput(e, index)
                        }} label={"Course_id: " + parseInt(index + 1)} onFocus={()=>{
                            document.getElementsByClassName('simpleTulletIcon')[index].style.backgroundColor = "rgb(92, 183, 216)"
                        }} onBlur={(e)=>{
                            document.getElementsByClassName('simpleTulletIcon')[index].style.backgroundColor = ""
                        }
                        } value={field}></TextField>
                    )
                })
                }
                </CardContent>
            </Card>
        </div>
    )
}

/**
 * Composant Tuile Double Rebond
 */

function InputStaticDouble(props) {
    //Gestion de l'affichage "preview" dans une popin
    const [open, setOpen] = React.useState(false);
    let idOfTullet = 'tuileDoubleRebondOri'; 
    let highlightHelper = 'doubleRebondTulletIcon'; 
    let keyId = props.keyId;
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    //Affichage des deux champs : Image - Link
    if (props.keyId){
        idOfTullet = 'tuileDoubleRebond' + props.keyId
        highlightHelper = 'doubleRebondTulletIcon' + props.keyId; 
    }else{
        keyId = 'original'
    }
        return (
            <div className="tuileDoubleRebond contentManage">
                <h2>{props.title}</h2>
                <Card>
                    <CardContent>
                        <TextField fullWidth className={idOfTullet + ' fieldTuileDoubleRebond'} keyid={props.keyId} onChange={(e) => {
                                props.handleChangeInput(e, false, "image")
                            }} onFocus={() => {
                                document.getElementsByClassName(highlightHelper)[0].style.backgroundColor = "rgb(92, 183, 216)"
                            }} onBlur={(e) => {
                                document.getElementsByClassName(highlightHelper)[0].style.backgroundColor = ""
                            }
                            } label="Image" value={props.static_double.image}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment  position="end">
                                        <IconButton
                                            edge="end"
                                            aria-label="Toggle Image"
                                            onClick={handleOpen}
                                        >
                                            <Visibility size="small" />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            
                        ></TextField>
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={open}
                            onClose={handleClose}
                        >
                            <Grid
                                container
                                spacing={0}
                                direction="row"
                                alignItems="center"
                                justify="center"
                                style={{ minHeight: '100vh', maxHeight: '100%',overflow : 'auto' }}
                        >
                                <Grid className="displayPreviewImage" item sm={9} xs={10}>
                                    <img src={props.static_double.image} alt={props.static_double.image} />
                                    <div className='closeButton'>
                                        <Fab color='secondary' onClick={handleClose} size="small" className='fabWrapperCloseButton'>
                                            <Close  className="closeColor"/>    
                                        </Fab>
                                    </div>
                                </Grid>
                               
                            </Grid> 
                        </Modal>

                        <TextField fullWidth className={idOfTullet + ' fieldTuileDoubleRebond'} keyid={props.keyId} onChange={(e) => {
                            props.handleChangeInput(e, false, "link")
                        }} onFocus={() => {
                            document.getElementsByClassName(highlightHelper)[0].style.backgroundColor = "rgb(92, 183, 216)"
                        }} onBlur={(e) => {
                            document.getElementsByClassName(highlightHelper)[0].style.backgroundColor = ""
                        }
                        } label="Lien" onClick={handleClose} value={props.static_double.link}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Checkbox
                                            checked={props.static_double.target_blank}
                                            onChange={() => { props.handleTargetBlank(keyId) }}
                                            value="target_blank"
                                            inputProps={{
                                                'aria-label': 'primary checkbox',
                                            }}
                                        />

                                    </InputAdornment>
                                ),
                            }}
                        ></TextField>

                    </CardContent>
                </Card>
            </div>
        )
}


/**
 * Composant Tuile Double
 */
function InputDouble(props){
    //Affichage du champ
    return (
        <div className="tuileDouble contentManage">
            <h2>Tuile double</h2>
            <Card>
                <CardContent>
                    <TextField className="fieldTuileDouble" fullWidth onChange={(e) => {
                        props.handleChangeInput(e)
                    }} onFocus={() => {
                        document.getElementsByClassName('doublesimpleTulletIcon')[0].style.backgroundColor = "rgb(92, 183, 216)"
                    }} onBlur={(e) => {
                        document.getElementsByClassName('doublesimpleTulletIcon')[0].style.backgroundColor = ""
                    }
                        } label="Course_id: 9" value={props.double}></TextField>
                </CardContent>
            </Card>
        </div>
    )
}



export default {
    StaticDouble: InputStaticDouble,
    InputDouble: InputDouble,
    InputMultipleTest: InputMultipleTest
}