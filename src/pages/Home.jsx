import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../components/utils";
import { create } from "../redux/authSlice";
import PlaylistCard from "../components/PlaylistCard";

function Home() {
  const [featured, setFeatured] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_API_HOME}browse/featured-playlists`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setFeatured(data.playlists.items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getToken()
        .then((res) => {
          dispatch(create(res));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  const HomeWrapper = styled.div`
    width: 64%;
    padding: 15px;
    background-color: #181818;
    color: #fff;
  `;

  const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  `;

  const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
  `;

  return (
    <>
      <HomeWrapper>
        <Container>
          <CardContainer>
            {featured?.length > 0 &&
              featured?.map((el, index) => {
                return <PlaylistCard key={index} data={el}></PlaylistCard>;
              })}
          </CardContainer>
        </Container>
      </HomeWrapper>
    </>
  );
}

export default Home;
