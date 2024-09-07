import SingleSignal from "@/components/SingleSignal/SingleSignal";


interface SingleSignalPageProp {
	params: {
		id: string;
	};
}

const SignalPage = ({ params }: SingleSignalPageProp) => {
	const { id } = params;
	return <>
	<div>
			<SingleSignal id={id} />
	</div>
	
	</>
};

export default SignalPage;

