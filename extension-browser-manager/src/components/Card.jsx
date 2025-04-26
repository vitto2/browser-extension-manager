import Button from "./Button";

export default function Card(props) {
	return (
		<div className="bg-white px-[1.25rem] py-[1.25rem] max-w-[23.875rem] rounded-[1.25rem] flex flex-col mt-[2.5rem] gap-[1.5rem]">
			<div className="flex gap-[1rem] items-start">
				<img src={props.icon} alt="" />
				<div className="flex flex-col gap-[.5rem] ">
					<strong>{props.title}</strong>
					<p>{props.text}</p>
				</div>
			</div>

			<div className="flex justify-between">
				<button className="border rounded-full border-neutral-300 px-[1rem] py-[0.5rem] text-[1rem] font-medium tracking-[-0.0313rem] leading-[140%]">
					Remove
				</button>

                <label class="relative inline-block w-14 h-8">
                    <input type="checkbox" class="peer opacity-0 w-0 h-0"/>
                    <span class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-red-600 rounded-full transition duration-300 peer-checked:bg-green-500"></span>
                    <span class="absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6"></span>
                </label>
			</div>
		</div>
	);
}
