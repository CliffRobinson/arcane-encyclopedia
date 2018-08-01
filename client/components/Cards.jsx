import React from 'react'
import request from 'superagent'
import Card from './Card'

class Cards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            desc: "A component for showing cards.",
            cards:[],
            num: 0,
        }
        this.getCardsFromScryfall = this.getCardsFromScryfall.bind(this);
    }

    componentDidMount() {
        let set = 'DOM' // 'm19' || 'DOM || 'RIX' || 'XLN' || 'HOU' || 'AKH' || 'AER' || 'KLD'
        let setQuery = `e%3a${set}` // e:{set}
        let tricks = `+%28o%3Aflash+OR+t%3Ainstant%29` // (o:flash OR t:instant)

        let queryString = `https://api.scryfall.com/cards/search?q=${setQuery}${tricks}`
        this.getCardsFromScryfall(queryString)
        //'http://api.scryfall.com/cards/search?format=json&include_extras=false&order=name&page=2&q=e%3Adom&unique=cards'
    }

    getCardsFromScryfall(queryString) {
        
        request.get(queryString)
            .then( (res) =>{
                console.log(res.body)
                let currentCards = this.state.cards.concat(res.body.data)

                this.setState({
                    num:res.body.total_cards,
                    cards: currentCards,
                })
                if (res.body.has_more)  {
                    this.getCardsFromScryfall(res.body.next_page)
                }
            })
    }

    render() {
        return (
            <div className="cards" >
                <h1> {this.state.desc} </h1>
                <p> There are {this.state.num} cards </p>
                <p> There are {this.state.cards.length} cards in state </p>
                {this.state.cards.length && this.state.cards.map( (card, i) => <Card key={i} card={card} />)}
            </div >
        )
    }

}

export default Cards;