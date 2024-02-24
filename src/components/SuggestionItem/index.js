import './index.css'

const SuggestionItem = props => {
  const {suggestionsList} = props
  const onclickSearch = () => {
    console.log('onclick search')
  }

  return (
    <div className="search-suggestions">
      <p>{suggestionsList.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-search-logo"
        alt="arrow"
        onClick={onclickSearch}
      />
    </div>
  )
}

export default SuggestionItem
