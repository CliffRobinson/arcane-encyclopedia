import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'

import Card from './Card'
import {addCards} from '../actions/cards'

class Cards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            desc: "A component for showing cards.",
            cards:[],
            num: 0,
        }
        this.getCardsFromScryfall = this.getCardsFromScryfall.bind(this);
        this.getSampleMana = this.getSampleMana.bind(this);
        this.filterCardByManaCost = this.filterCardByManaCost.bind(this);
        this.filterAllCardsByMana = this.filterAllCardsByMana.bind(this);
        this.translateMana = this.translateMana.bind(this);
    }

    componentDidMount() {
        let set = 'DOM' // 'm19' || 'DOM || 'RIX' || 'XLN' || 'HOU' || 'AKH' || 'AER' || 'KLD'
        let setQuery = `e%3a${set}` // e:{set}
        let tricks = `+%28o%3Aflash+OR+t%3Ainstant%29` // (o:flash OR t:instant)

        let queryString = `https://api.scryfall.com/cards/search?q=${setQuery}${tricks}`
        this.getCardsFromScryfall(queryString)

        
    }

    getCardsFromScryfall(queryString) {
        
        request.get(queryString)
            .then( (res) =>{
                console.log(res.body)

                this.props.dispatch(  addCards(res.body.data)  )

                if (res.body.has_more)  {
                    this.getCardsFromScryfall(res.body.next_page)
                }
            })
    }

    getSampleMana(){
        return {
            w:1,
            u:1,
            b:1,
            r:1,
            g:1,
            total: 5
        }
            
    }

    filterAllCardsByMana() {
        return this.props.cards.filter( (card) => this.filterCardByManaCost(card))
    }

    filterCardByManaCost(card, mana = this.getSampleMana()) {
        if (card.cmc <= mana.total){
            return true //needs color specificity.
        } else {
            return false
        }
    }

    translateMana(card){
        let manaCost = {
            w:0,
            u:0,
            b:0,
            r:0,
            g:0,
        }
        let stringMana = card.mana_cost;
        stringMana = stringMana.replace(/[0-9{}]/g, '')
        const arrayMana = stringMana.split('')
        arrayMana.map((letter) => {
            if (letter == 'W') manaCost.w++;
            if (letter == 'U') manaCost.u++;
            if (letter == 'B') manaCost.b++;
            if (letter == 'R') manaCost.r++;
            if (letter == 'G') manaCost.g++;
        })
        return `W:${manaCost.w} U:${manaCost.u} B:${manaCost.b} R:${manaCost.r} G:${manaCost.g} `

    }

    checkColouredCost(card, mana = this.getSampleMana){
        
    }

    render() {
        return (
            <div className="cards" >
                <h1> {this.state.desc} </h1>
                <p> There are {this.state.num} cards </p>
                <p> There are {this.props.cards.length} cards in state </p>
                {this.props.cards.length && this.filterAllCardsByMana().map( (card, i) => <span><Card key={i} card={card} />Mana: {this.translateMana(card)}</span>)}
                
            </div >
        )
    }

}

function mapCrepesToHops(state){
    return state
}

export default connect(mapCrepesToHops)(Cards);