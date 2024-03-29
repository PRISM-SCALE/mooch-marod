/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {ReactElement, useEffect, useState} from "react";
import Loader from "../components/Loader";

type ComponentType = () => Promise<{default: React.ComponentType<any>}>;

function DynamicImport({load}: {load: ComponentType}): ReactElement {
	const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

	useEffect(() => {
		let isMounted = true;

		const loadComponent = async () => {
			const {default: DynamicComponent} = await load();

			if (isMounted) {
				setComponent(() => DynamicComponent);
			}
		};

		loadComponent();

		return () => {
			isMounted = false;
		};
	}, [load]);

	if (Component) {
		return <Component />;
	}

	return <Loader />;
}

export default DynamicImport;
