import styled from "@emotion/styled";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";

function Layout({ children }) {

    const Pages = styled.div`
        display: flex;
        justify-content: space-between;
    `

  return (
    <>
      <Pages>
        <LeftSidebar></LeftSidebar>
        {children}
        <RightSidebar></RightSidebar>
      </Pages>
    </>
  );
}

export default Layout;
