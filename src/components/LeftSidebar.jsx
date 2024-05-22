import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import home from '../assets/home.svg'

function LeftSidebar() {
  const Div = styled.div`
    width: 18%;
    background-color: black;
    color: white;
    padding: 18px;
    min-height: 100vh;
  `;

  const Link = styled.div`
    display: flex;
    align-items: end;
  `

  const Span = styled.span`
    color: #b3b3b3;
    text-decoration: none;
  `


  return (
    <>
      <Div>
        <Link>
          <img src={home} alt="" width={18} height={18} /><NavLink to='/'><Span>Home</Span></NavLink>
        </Link>
        <Link>
          <Span>Search</Span>
        </Link>
      </Div>
    </>
  );
}

export default LeftSidebar;
