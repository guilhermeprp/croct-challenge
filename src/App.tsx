import "./App.scss";
import Menu from "./layout/menu";
import Router from "./routes";

function App(): JSX.Element {
	return (
		<>
			<Menu />
			<Router />
		</>
	);
}

export default App;
