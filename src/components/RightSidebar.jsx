import styled from "@emotion/styled"

function RightSidebar() {

  const Right = styled.div`
  width: 18%;
  background-color: black;
  color: white;
  padding: 14px;
  min-height: 100vh;
`

  return (
    <>      
      <Right className="right-sidebar">right-sidebar</Right>
    </>
  )
}

export default RightSidebar