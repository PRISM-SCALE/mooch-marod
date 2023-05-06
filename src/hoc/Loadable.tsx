import React, {ComponentType, LazyExoticComponent, lazy} from "react";
import {RouteProps} from "react-router-dom";

type Props = RouteProps & {
	component: LazyExoticComponent<ComponentType<any>>;
};

const withLazyLoad = (Component: LazyExoticComponent<ComponentType<any>>) =>
	class extends React.Component<Props> {
		render() {
			const {component, ...props} = this.props;
			const LazyComponent = lazy(() => component);

			return (
				<React.Suspense fallback={<div>Loading...</div>}>
					<LazyComponent {...(props as any)} />
				</React.Suspense>
			);
		}
	};

export default withLazyLoad;
