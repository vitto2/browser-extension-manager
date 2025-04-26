import "./App.css";
import Header from "./components/Header";
import Extensions from "./components/Extensions";
import Card from "./components/Card";
import devLens from "./assets/imgs/icon-dev-lens.svg";

function App() {
	return (
		<div className="bg-[#D6E2F5] h-screen w-screen pl-4 pr-4 pt-[1rem] font-noto flex flex-col items-center">
			<Header />
			<Extensions />

			<main>
				<Card
					title="DevLens"
					icon={devLens}
					text="Quickly inspect page layouts and visualize element boundaries."
					image={devLens}
				/>
			</main>
		</div>
	);
}

export default App;
