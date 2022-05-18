import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, CircularProgress } from "@mui/material";

// Components
import Layout from "../components/Layout";
import Posts from "../components/Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout navbar footer>
      <Container maxWidth="xl" sx={{ py: 3 }}>
        {posts?.length > 0 ? (
          <Posts posts={posts} />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export default Home;
