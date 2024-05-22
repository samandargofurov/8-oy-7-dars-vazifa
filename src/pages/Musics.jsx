import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Musics() {
  const [playlistUser, setPlaylistUser] = useState(null);
  const params = useParams();
  const token = useSelector((state) => state.auth.token);
  console.log("token", token);

  useEffect(() => {
    if (params.id) {
      fetch(`${import.meta.env.VITE_API_MUSIC}${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPlaylistUser(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const Div = styled.div`
    width: 64%;
    background-color: #121212;
  `;

  const HeaderColor = styled.div`
    background-color: #ddf628;
    width: 100%;
    height: 40px;
  `;

  const HeroInfo = styled.div`
    background: linear-gradient(rgb(206, 228, 37), rgba(18, 18, 18, 0.984));
    width: 100%;
    height: 250px;
    padding: 25px 40px; 
  `;

  const Div2 = styled.div`
    display: flex;
    gap: 20px;
  `

  const H3 = styled.h3`
    font-size: 42px;
    color: #fff;
  `

   const Description = styled.p`
   font-size: 14px;
   color: #fff;
   width: 270px;
   line-height: 26px;
 `

  const Span = styled.h3`
    color: #fff;
  `

  const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
  `


  return (
    <Div>
      <div>
        <HeaderColor></HeaderColor>
        <HeroInfo>
          {playlistUser ? <Div2>
            <img
              src={playlistUser.images[0].url}
              alt=""
              width={200}
              height={200}
            />
            <Info>
              <Span>{playlistUser.type}</Span>
              <H3>{playlistUser.name}</H3>
              <Description>{playlistUser.description}</Description>
            </Info>
          </Div2>
           : (
            "Loading..."
          )}
        </HeroInfo>
      </div>
    </Div>
  );
}

export default Musics;
