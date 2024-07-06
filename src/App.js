import './App.css'
import {Component} from 'react'
import ListItem from './ListItem'
// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {searchInput: '', list: initialHistoryList}

  deleteApp = unique => {
    const {list} = this.state
    const newList = list.filter(each => each.id !== unique)
    this.setState({list: newList})
  }

  searchApp = event => {
    const newText = event.target.value
    this.setState({searchInput: newText.toLowerCase()})
  }

  render() {
    const {searchInput, list} = this.state
    const searchBased = list.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="banner_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="brand_logo"
            alt="app logo"
          />
          <div className="search_bar_container">
            <div className="search_icon_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search_icon"
                alt="search"
              />
            </div>
          </div>
          <input
            type="search"
            className="search_bar"
            placeholder="Search History"
            onChange={this.searchApp}
            value={searchInput}
          />
        </div>
        <div className="history_space">
          <ul className="history_container">
            {searchBased.length === 0 ? <p>There is no history to show</p> : ''}
            {searchBased.map(each => (
              <ListItem
                ItemDetails={each}
                key={each.id}
                deleteApp={this.deleteApp}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
// Replace your code here

export default App
