export default function Button(props) {
	return (
		<button className="bg-neutral-100 py-[.625rem] px-[1.25rem] rounded-full focus:text-white focus:bg-red-700 text-[1.25rem] border border-neutral-200 shadow-[0px_1px_2px_0px_rgba(184,196,215,0.4)]">
			{props.title}
		</button>
	);
}
