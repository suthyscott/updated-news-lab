import { Link } from 'react-router-dom';
import './SideBar.css';

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <img className="sidebar-img" src="../../assets/newspaper.png" alt="" />
      <h3>News Today</h3>
      <hr />
      <p>
        <Link to="/hacker-news">Hacker News</Link>
      </p>
      <p>
        <Link to="/medium">Medium</Link>
      </p>
      <p>
        <Link to="/reddit">Reddit</Link>
      </p>
    </div>
  );
}
