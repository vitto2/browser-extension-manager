import "./App.css";
import Header from "./components/Header";
import Extensions from "./components/Extensions";

function App() {
	return (
		<div className="bg-[#D6E2F5] h-screen w-screen pl-4 pr-4 pt-[1rem] font-noto flex flex-col items-center">
			<Header />
			<Extensions />
		</div>
	);
}

export default App;
