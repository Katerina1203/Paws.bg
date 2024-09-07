import { getSignalById, getUser } from "@/lib/data";
import StaticGoogleMap from '@/components/StaticGoogleMap/StaticGoogleMap';
import { getSession } from '@/lib/actions'; 
import { auth } from "@/auth";
import ChatRoom from '@/components/ChatRoom/ChatRoom';
import { ObjectId } from 'mongoose';

type Params = {
	id: string;
};

const SingleSignal = async ({ id }: Params) => {
	const session = await auth();
	const signal = await getSignalById(id); 
	
	if (!signal || !signal._id) {
		console.error("Signal not found", id);
		return <div>Signal not found.</div>;
	}

	// Ensure signal._id is a valid ObjectId, convert if necessary
	let signalObjectId: ObjectId;
	if (typeof signal._id === 'string') {
		signalObjectId = new ObjectId(signal._id);
	} else {
		signalObjectId = signal._id;
	}
	const dbUser = await getUser(session.user.email);
	
	return (
		<div className="flex flex-col md:flex-row min-h-screen gap-6 p-6">
			<div className="w-full md:w-1/3 flex flex-col p-4 rounded-md">
				<div className="mb-4">
					<ChatRoom userId={dbUser?._id} userName = {dbUser?.username} signalId={signalObjectId} />
				</div>
			</div>

			{/* Signal Map and Info */}
			<div className="w-full md:w-2/3 flex flex-col gap-6">
				{/* Static Google Map */}
				<div className="w-full h-[400px] rounded-md shadow-lg">
					<StaticGoogleMap
						latitude={signal.location.coordinates[1]} 
						longitude={signal.location.coordinates[0]} 
					/>
				</div>

				{/* Signal Information */}
				<div className="mt-6 p-6 bg-white rounded-md shadow-lg">
					<h2 className="text-xl font-semibold mb-4">Информация за сигнала</h2>
					<div className="mb-2 text-lg">
						Кратко описание: <span className="font-medium">{signal.name}</span>
					</div>
					<div className="mb-4">
						Допълнителна информация: <span>{signal.description}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleSignal;
