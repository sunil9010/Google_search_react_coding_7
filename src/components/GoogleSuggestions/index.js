// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  UpdatedSearchInput = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="google-suggestion">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="google-logo"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input-search"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestion-list">
              {searchResults.map(everyItem => (
                <SuggestionItem
                  key={everyItem.id}
                  suggestionDetails={everyItem}
                  UpdatedSearchInput={this.UpdatedSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
