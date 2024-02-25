import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, updateSearch} = props
  const {suggestion} = suggestionsList
  const onclickSearch = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="search-suggestions">
      <p>{suggestionsList.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-search-logo"
        alt="arrow"
        onClick={onclickSearch}
      />
    </li>
  )
}

export default SuggestionItem
