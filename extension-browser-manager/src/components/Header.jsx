import logo from "../assets/imgs/logo.svg";
import moon from "../assets/imgs/moon.svg";

export default function Header() {
	return (
		<header className="bg-white w-full flex rounded-xl py-2 px-3 items-center justify-between shadow-sm">
			<div className="flex justify-center items-center gap-[.75rem]">
				<img  src={logo} alt="" />
				<strong className="text-2xl">Extensions</strong>
			</div>

			<button className="h-[3.125rem] w-[3.125rem] bg-neutral-100 rounded-xl flex flex-col justify-center items-center cursor-pointer">
				<img className=" w-[1.5rem]" src={moon} alt="" />
			</button>
		</header>
	);
}
