import React from 'react';
import Component from './component.js';
import Sidebar from './sidebar.js';
import _ from 'lodash';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
/**
 * Main App, Gestion de la logique des entrées et sorties utilisateurs
 */

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeLang = this.handleChangeLang.bind(this)
        this.hightlight = this.hightlight.bind(this)
        this.handleTargetBlank = this.handleTargetBlank.bind(this)
        this.state = {
            lang: 'fr',
            static_double_top: [
                { ...this.props.data.fr.static_double_top[0] },  
                { ...this.props.data.fr.static_double_top[1] },  
                { ...this.props.data.fr.static_double_top[2] }  
            ],
            single: [...this.props.data.fr.single],
            double: this.props.data.fr.double,
            static_double: { ...this.props.data.fr.static_double }
        }
    }
    /**
     * Gestion des entrés dans les champs
     * @param {element cible, objet HTML e.target lors d'un event 'change'} e 
     * @param {*Gestion de l'index des tuiles simples} i 
     * @param {*Définition du type (image ou link) pour les champs tuiles doubles} type 
     */
    handleChangeInput(e, i, type) { 
        if (i || i === 0) {
            let temp = this.state.single
            temp[i] = e.target.value;
            this.setState({ single: temp })
        } else if (type) {
            let temp = [...e.target.parentNode.parentNode.classList];
            if (temp.includes('tuileDoubleRebondOri')){
                let static_double = this.state.static_double
                let value = e.target.value;
                this.setState(prevState => {
                    Object.assign({}, prevState.static_double);
                    static_double[type] = value;
                    return { static_double }
                })
            }else{
                let temp = [...e.target.parentNode.parentNode.attributes][1].value;
                let value = e.target.value;
                let static_double_top = this.state.static_double_top
                this.setState(prevState => {
                    Object.assign(static_double_top, prevState.static_double_top)
                    static_double_top[parseInt(temp) - 1][type] = value;
                    return { static_double_top}
                })
            }
        } else {
            this.setState({ double: e.target.value })
        }
    }
    /**
     * Gestion de l'envoie de données selon un format bien précis et le state du composant App
     * Pour le moment juste un log dans la console
     */
    handleSubmit(){
        let jsonCode = `
        {${this.state.lang}:{
                "static_double_top":[
                    {
                        "image": ${this.state.static_double_top[0].image},
                        "link":  ${this.state.static_double_top[0].link},
                        "target_blank" : ${this.state.static_double_top.target_blank}
                    },{
                        "image": ${this.state.static_double_top[1].image},
                        "link":  ${this.state.static_double_top[1].link},
                        "target_blank" : ${this.state.static_double_top.target_blank}
                    },{
                        "image": ${this.state.static_double_top[2].image},
                        "link":  ${this.state.static_double_top[2].link},
                        "target_blank" : ${this.state.static_double_top.target_blank}
                    }
                ],
                "single" : ${this.state.single},
                "double" : ${this.state.double},
                "static_double" : {
                    "image" : ${this.state.static_double.image},
                    "link" : ${this.state.static_double.link},
                        "target_blank" : ${this.state.static_double.target_blank}
                    }   
                }
            }`
        console.log(_.omit(this.state, ['lang', 'lang']))
    }
    /**
     * Gestion de l'annulation d'un champ en récuperant les information à travers les props
     */
    handleCancel(){
        this.setState(()=>{
            return {
                static_double_top: [
                    { ...this.props.data[this.state.lang].static_double_top[0] },
                    { ...this.props.data[this.state.lang].static_double_top[1] },
                    { ...this.props.data[this.state.lang].static_double_top[2] }
                ],
                single: [...this.props.data[this.state.lang].single],
                double: this.props.data[this.state.lang].double,
                static_double: { ...this.props.data[this.state.lang].static_double }
            }
        })
    }
    handleChangeLang (event,newValue){
        let language = '';
        if (newValue === 'en') {
            language = 'en'
        } else if (newValue === 'fr') {
            language = 'fr'
        } else {
            return
        }
        this.setState({
            lang: language,
            static_double_top: [
                { ...this.props.data[language].static_double_top[0] },
                { ...this.props.data[language].static_double_top[1] },
                { ...this.props.data[language].static_double_top[2] }
            ],
            single: [...this.props.data[language].single],
            double: this.props.data[language].double,
            static_double: { ...this.props.data[language].static_double }
        })
    };
    handleTargetBlank(keyId){
        if (keyId === "original") {
            let static_double = this.state.static_double
            this.setState(prevState => {
                Object.assign({}, prevState.static_double);
                if (prevState.static_double.target_blank) {
                    static_double.target_blank = false;
                } else {
                    static_double.target_blank = true;
                }
                return { static_double }
            })
        }else{
            
            let static_double_top = this.state.static_double_top
            this.setState(prevState => {
                Object.assign({}, prevState.static_double_top[keyId - 1]);
                if (prevState.static_double_top[keyId - 1].target_blank) {
                    static_double_top[keyId - 1].target_blank = false;
                } else {
                    static_double_top[keyId - 1].target_blank = true;
                }
                return { static_double_top }
            })
        }
    };
    /**
     *Gestion de la mise à jour des champs et comparaison de state et props, vérification de chaque donnée entré par rapport aux données d'origine et changement de couleur  
     *
     */

    //Gestion de changement et comparaison des champs tuile simples
    hightlight(oldData,newData){
        this.state.single.filter((word, i) => {
            if (this.props.data[this.state.lang].single[i] === word) {
                document.getElementsByClassName('fieldSingle')[i].getElementsByTagName('input')[0].style.color = ''
                return null;
            } else {
                document.getElementsByClassName('fieldSingle')[i].getElementsByTagName('input')[0].style.color = 'orange'
                return null;
            }
        }
        );

        //Gestion de changement et comparaison des champs tuile double rebond et tuile double  /!\ A améliorer en priorités /!\

        if (this.state.double !== this.props.data[this.state.lang].double) {
            document.getElementsByClassName('fieldTuileDouble')[0].getElementsByTagName('input')[0].style.color = 'orange'
        } else {
            document.getElementsByClassName('fieldTuileDouble')[0].getElementsByTagName('input')[0].style.color = ''
        }

        if (this.state.static_double.image !== this.props.data[this.state.lang].static_double.image) {
            document.getElementsByClassName('tuileDoubleRebondOri')[0].getElementsByTagName('input')[0].style.color = 'orange'
        } else {
            document.getElementsByClassName('tuileDoubleRebondOri')[0].getElementsByTagName('input')[0].style.color = ''
        }

        if (this.state.static_double.link !== this.props.data[this.state.lang].static_double.link) {
            document.getElementsByClassName('tuileDoubleRebondOri')[1].getElementsByTagName('input')[0].style.color = 'orange'
        } else {
            document.getElementsByClassName('tuileDoubleRebondOri')[1].getElementsByTagName('input')[0].style.color = ''
        }

        for (var property in this.state.static_double_top) {
            if (this.state.static_double_top[property].image !== this.props.data[this.state.lang].static_double_top[property].image) {
                document.getElementById('tuileTop').getElementsByClassName('tuileDoubleRebond')[property].getElementsByTagName('input')[0].style.color = 'orange'
            } else {
                document.getElementById('tuileTop').getElementsByClassName('tuileDoubleRebond')[property].getElementsByTagName('input')[0].style.color = ''
            }

            if (this.state.static_double_top[property].link !== this.props.data[this.state.lang].static_double_top[property].link) {
                document.getElementById('tuileTop').getElementsByClassName('tuileDoubleRebond')[property].getElementsByTagName('input')[1].style.color = 'orange'
            } else {
                document.getElementById('tuileTop').getElementsByClassName('tuileDoubleRebond')[property].getElementsByTagName('input')[1].style.color = ''
            }
        }
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        //Comparaison de state et de props
        if (!_.isEqual(_.omit(this.state, ['lang']), this.props.data[this.state.lang])){
            document.getElementById('cancel').style.display = "block"
        }else{
            document.getElementById('cancel').style.display = "none"
        }

        this.hightlight(this.props.data[this.state.lang], _.omit(prevState, ['lang', 'lang']))

    }
    render(){
        //Rendu des composants des différents champs : 1-Tuile Simple 2-Tuile double rebond 3-Tuiles Double
        return(
            <div className="wrapper">
                <div id='mainWrapper'>
                    <Tabs
                        value={this.state.lang}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChangeLang}
                    >
                        <Tab label="Fr" value={'fr'}/>
                        <Tab label="En" value={'en'}/>
                    </Tabs>
                    {/* Fichier component.js */}
                    <div id="tuileTop" >
                        {<Component.StaticDouble handleTargetBlank={this.handleTargetBlank} handleChangeInput={this.handleChangeInput} keyId={1} static_double={this.state.static_double_top[0]} title="Tuile Top 1"/>}
                        {<Component.StaticDouble handleTargetBlank={this.handleTargetBlank} handleChangeInput={this.handleChangeInput} keyId={2} static_double={this.state.static_double_top[1]} title="Tuile Top 2"/>}
                        {<Component.StaticDouble handleTargetBlank={this.handleTargetBlank} handleChangeInput={this.handleChangeInput} keyId={3} static_double={this.state.static_double_top[2]} title="Tuile Top 3"/>}
                    </div>
                    {<Component.InputMultipleTest handleChangeInput={this.handleChangeInput} single={this.state.single} />}
                    {<Component.StaticDouble handleTargetBlank={this.handleTargetBlank} handleChangeInput={this.handleChangeInput} static_double={this.state.static_double} title="Tuile double rebond" />}
                    {<Component.InputDouble handleChangeInput={this.handleChangeInput} double={this.state.double} />}
                </div>
                <Sidebar handleSubmit={this.handleSubmit} handleCancel={this.handleCancel} handleInputLang={this.state.lang}/>{/* Fichier sidebar.js */}
            </div>
        )
    }
}

export default App