import "./styles.css";
import PostList from "./components/PostList/post.component";

export default function App() {
  return (
    <div className="App">
      <div className="bg-warning p-5 text-center">
        <h1>KOO Posts 🐤</h1>

        {/* <img src={"../logo.jpg"} alt="Girl in a jacket" /> */}
      </div>
      <PostList />
    </div>
  );
}
