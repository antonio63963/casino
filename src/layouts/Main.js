import MainHeader from "./main/MainHeader";

const Main = ({children}) => {

  return (
    <>
    <div>
      <MainHeader />
    </div>
      <div>
        {children}
      </div>
    </>
  )
}

export default Main;