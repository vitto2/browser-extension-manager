import Button from "./Button";

export default function Extensions() {
	return (
		<div className="pt-[2.5rem] w-full flex flex-col items-center md:flex-row md:justify-between md:items-center">
			<strong className="text-4xl text-[#091540]">Extensions List</strong>

			<div className=" flex justify-between pt-[1.5rem]  gap-[.75rem]">
				<Button title="All" />
				<Button title="Active" />
				<Button title="Inactive" />
			</div>
		</div>
	);
}
