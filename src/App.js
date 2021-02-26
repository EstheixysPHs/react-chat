//import { db } from "./config/firebase";
import Button from "./components/Button";
import { signInWithGoogle, signOut } from "./login";
import { useAuthState } from "./hooks";
import { firebase } from "./config/firebase";

function App() {
  const { user, itializing } = useAuthState(firebase.auth());
  const renderLoading = () => {
    if (itializing)
      return (
        <div>
          <h3>Loadinng...</h3>
        </div>
      );
  };

  return (
    <div>
      {renderLoading()}
      {user ? (
        <>
          <Button onClick={signOut}> Logout</Button>
          <p> Bienvenidos al CHAT!</p>
        </>
      ) : (
        <Button onClick={signInWithGoogle}> Sing in with Google </Button>
      )}
    </div>
  );
}

export default App;
