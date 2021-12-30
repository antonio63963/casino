import { useNavigate } from 'react-router-dom';

const MainHeader = () => {
  const menuData = [
    {
      title: "главная",
      route: '/'
    },
    {
      title: "Gampling",
      route: '/gambling'
    },
  ];

  const navigate = useNavigate();
  const handlerRoute = (route) => {
    navigate(route);
  };

  return (
    <>
      <div>
        {menuData.map((menu, index) => (
          <div onClick={() => handlerRoute(menu.route)} key={`menu${index}`} >{menu.title} </div>
        ))}
      </div>
    </>
  )
}

export default MainHeader;