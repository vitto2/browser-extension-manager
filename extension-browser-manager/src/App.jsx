import "./App.css";
import Header from "./components/Header";
import Extensions from "./components/Extensions";
import Card from "./components/Card";
import iconsMap from "./data/iconsMap";
import extensions from "./data/extensions.json";

function App() {
	return (
		<div className="w-full h-full flex justify-center items-center bg-[#D6E2F5]">
			<div className="bg-[#D6E2F5] h-full pl-[2rem] pr-[2rem] pt-[1.5rem ] font-noto flex flex-col items-center pt-[2.5rem]">
				<Header />
				<Extensions />

				<main className="grid grid-cols-1 md:grid-cols-2 md:gap-[.75rem] lg:grid-cols-3 lg:items-center pb-[4rem]">
					{extensions.map((item) => (
						<div key={item.title}>
							<Card
								icon={iconsMap[item.icon]}
								title={item.title}
								text={item.text}
							/>
						</div>
					))}
				</main>
			</div>
		</div>
	);
}

export default App;
