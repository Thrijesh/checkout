import { Helmet } from 'react-helmet';

export default function Title({ title }: { title: string }): JSX.Element {
	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	);
}
