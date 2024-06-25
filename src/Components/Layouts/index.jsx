import Header from "../Shared/Header";
import SideMenu from "../Shared/SideMenu";

function Layouts({ children }) {
  return (
    <div className=" h-screen flex flex-col">
      <div className="h-[100px] ">
        <Header />
      </div>
      <div className="h-full flex">
        <div className=" w-[20%] p-2">
          <SideMenu />
        </div>
        <div className="m-2 rounded-md w-full p-4 bg-blue-500">{children}</div>
      </div>
    </div>
  );
}

export default Layouts;
