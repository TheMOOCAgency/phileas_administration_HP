import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


/**
 * Composant Sidebar
 * Affichage d'une petite section sur le coté lié au différent champs, hightlight lors d'un focus et permet de cliquer pour rejoindre directement  un champs
 * Affichage des boutons "VALIDER" et "ANNULER"
 */
export default class Sidebar extends React.Component {
    render() {
        return (
            <Card id="cardSidebar">
                <CardContent  >
                    
                    <Grid className="sidebarTulletWrapper" container direction="row" justify="space-between" alignItems="stretch">
                        <Grid item xs={4}>
                            <Paper className=" doubleRebondTulletIcon1 sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('tuileDoubleRebond1')[0].getElementsByTagName('input')[0].focus()
                            }}>Tuile Top 1</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className="doubleRebondTulletIcon2 sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('tuileDoubleRebond2')[0].getElementsByTagName('input')[0].focus()
                            }}>Tuile Top 2</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className="doubleRebondTulletIcon3 sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('tuileDoubleRebond3')[0].getElementsByTagName('input')[0].focus()
                            }}>Tuile Top 3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className="simpleTulletIcon sidebarTullet noselect" onClick={(e)=>{
                                document.getElementsByClassName('fieldSingle')[0].getElementsByTagName('input')[0].focus()
                            }}>Tuile 1</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className="simpleTulletIcon sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('fieldSingle')[1].getElementsByTagName('input')[0].focus()
                            }} >Tuile 2</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className="doubleRebondTulletIcon sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('tuileDoubleRebondOri')[0].getElementsByTagName('input')[0].focus()
                            }}>Double rebond</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className="simpleTulletIcon sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('fieldSingle')[2].getElementsByTagName('input')[0].focus()
                            }} >Tuile  3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className="simpleTulletIcon sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('fieldSingle')[3].getElementsByTagName('input')[0].focus()
                            }} >Tuile 4</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className="doublesimpleTulletIcon sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('fieldTuileDouble')[0].getElementsByTagName('input')[0].focus()
                            }}>Double</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className="simpleTulletIcon sidebarTullet noselect"  onClick={(e) => {
                                document.getElementsByClassName('fieldSingle')[4].getElementsByTagName('input')[0].focus()
                            }} >Tuile 5</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className="simpleTulletIcon sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('fieldSingle')[5].getElementsByTagName('input')[0].focus()
                            }} >Tuile 6</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className="simpleTulletIcon sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('fieldSingle')[6].getElementsByTagName('input')[0].focus()
                            }} >Tuile 7</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className="simpleTulletIcon sidebarTullet noselect" onClick={(e) => {
                                document.getElementsByClassName('fieldSingle')[7].getElementsByTagName('input')[0].focus()
                            }} >Tuile 8</Paper>
                        </Grid>
                    </Grid>
                </CardContent>
                <div id="buttonWrapper">
                    <Button className="submitJson" color="primary" size="small" variant="outlined" onClick={(e) => {
                        this.props.handleSubmit(e)
                    }} > Valider </Button>
                    <div id="cancel">
                        <Button className="reinitJson" color="secondary" size="small" variant="outlined" onClick={(e) => {
                            this.props.handleCancel(this.props.handleInputLang)
                        }} > Annuler </Button>
                        <p id='warningChange'>Des Changements sont en cours</p>
                    
                    </div>
                </div>
            </Card>
        )
    }
}


