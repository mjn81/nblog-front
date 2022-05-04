import React from "react";
import { SimpleCard } from "../../components/core";
import { useFetchUser } from "../../hooks";

const Info = () => {
	const { data } = useFetchUser();

	return (
		<div className="w-3/4 mx-auto mt-5">
			{data && (
				<SimpleCard>
					<h4 className="text-xl">username :{data.username}</h4>
					<h4 className="text-xl">email :{data.email}</h4>
					<h4 className="text-xl">firstName :{data.first_name}</h4>
					<h4 className="text-xl">lastName :{data.last_name}</h4>
				</SimpleCard>
			)}
		</div>
	);
};

export default Info;
