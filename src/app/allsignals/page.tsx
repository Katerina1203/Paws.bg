import SignalCard from "@/components/SignalCard/SignalCard";
import { getAllSignals } from "@/lib/data";

const AllSignals = async () => {
	// Fetch the signals from the database
	const signals = await getAllSignals();

	return (
		<div className="max-w-full min-h-[75vh]">
			<div className="grid sm:grid-cols-1 gap-5 max-w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{signals.map((signal) => (
					<div className="bg-white rounded-[10px] p-[10px] text-center shadow-md max-w-xl" key={signal._id}>
						<SignalCard signal={signal} />
					</div>
				))}
			</div>
		</div>
	);
};

export default AllSignals;
