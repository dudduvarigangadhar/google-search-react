import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    const {searchInput} = this.state
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
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
              onChange={this.onSearch}
            />
            <div>
              <ul>
                {/* <SuggestionItem suggestionsList={suggestionsList} /> */}
                {suggestionsList.map(eachSuggestion => (
                  <SuggestionItem
                    suggestionsList={eachSuggestion}
                    key={eachSuggestion.id}
                    // onSearch={this.onSearch}
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
