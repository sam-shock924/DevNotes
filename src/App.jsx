import HTMLData from './data/HTMLData';
import JavascriptData from './data/JavascriptData';
import ReactData from './data/ReactData';

function App() {
	return (
		<>
			<h1>Welcome to</h1>
			<h2>
				<code>DevNotes</code>
			</h2>
			<HTMLData />
			<JavascriptData />
			<ReactData />
		</>
	);
}

export default App;
