import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    suggestionsList: this.props,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearch = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSug =>
      // const search =
      eachSug.suggestion.toLowerCase().includes(searchInput),
    )
    // const suggestion = this.onSearch
    return (
      <div className="google-container-box">
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="google-search-field">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-field"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <div>
              <ul className="list-container">
                {searchResults.map(eachSuggestion => (
                  <SuggestionItem
                    suggestionsList={eachSuggestion}
                    key={eachSuggestion.id}
                    updateSearch={this.updateSearch}
                  />
                ))}
              </ul>
            </div>
          </div>
        </>
      </div>
    )
  }
}

export default GoogleSuggestions
