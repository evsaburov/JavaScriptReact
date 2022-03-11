import EmployersListItem from '../employers-list-items/employers-list-items'
import './employers-list.css';

const EmployersList = () => {
  return (
    <ul className="app-list list-group">
      <EmployersListItem />
      <EmployersListItem />
      <EmployersListItem />
    </ul>
  )
}

export default EmployersList;