import React from 'react';

import SearchForm from './search-form';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
constructor(props){
    super(props);
    this.state = {
        searchItem: ''
    };
}
    render() {
        const characters = characters.filter(character =>
            character.name.toLowerCase().includes(this.state.searchItem.toLowerCase())
        );
        return (
            <div className="live-search">
                <SearchForm onChange={searchItem => this.setState({searchItem})}/>
                <CharacterList characters={characters} />
            </div>
        );
    }
}
