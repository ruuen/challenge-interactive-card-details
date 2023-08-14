import "./App.scss";
import CardForm from "./components/CardForm";
import CardView from "./components/CardView";
import ConfirmationView from "./components/ConfirmationView";

function App() {
  return (
    <main className="page-container">
      <h1 className="visually-hidden">Add New Credit Card</h1>
      <CardView />
      <CardForm />
      <ConfirmationView />
    </main>
  );
}

export default App;
