import './App.css'

const ListItem = props => {
  const {ItemDetails, deleteApp} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = ItemDetails
  const onDelete = () => {
    deleteApp(id)
  }
  return (
    <li className="history_item_container">
      <div className="left_container">
        <div className="time_container">
          <p className="time">{timeAccessed}</p>
        </div>
        <div className="app_details_container">
          <img src={logoUrl} alt="domain logo" className="app_icon" />
          <div className="domain_details_container">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        data-testid="delete"
        onClick={onDelete}
        className="delete_button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete_icon"
        />
      </button>
    </li>
  )
}

export default ListItem
