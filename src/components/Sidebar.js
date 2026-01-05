import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;
  return (
    <div className='shadow-lg col-span-1'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
      </ul>
      <h1 className='font-bold pt-2'>Subscriptions</h1>
      <ul>
        <li>Akshay Saini</li>
        <li>Harkirat Singh</li>
        <li>Hitesh Choudhary</li>
        <li>Love Babbar</li>
        <li>Code With Harry</li>
        <li>JavaScript Mastery</li>
      </ul>
      <h1 className='font-bold pt-2'>You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li>Downloads</li>
      </ul>
    </div>
  )
}

export default Sidebar