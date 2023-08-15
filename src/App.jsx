import "./App.scss";
import CardForm from "./components/CardForm";
import CardView from "./components/CardView";
import ConfirmationView from "./components/ConfirmationView";

function App() {
  // toggle for confirm/card form to test before I've implemented state & validation
  const testConfirm = true;
  return (
    <main className="page-container">
      <h1 className="visually-hidden">Add New Credit Card</h1>
      <CardView />
      {testConfirm ? <ConfirmationView /> : <CardForm />}
    </main>
  );
}

export default App;
