import Button from "./Button";

export default function Extensions() {
	return (
		<div className="pt-[2.5rem] max-w-[18.43rem] flex flex-col items-center">
			<strong className="text-4xl">Extensions List</strong>
			<div className=" flex justify-between pt-[1.5rem]  gap-[.75rem]">
				<Button title="All" />
				<Button title="Active" />
				<Button title="Inactive" />
			</div>
		</div>
	);
}
