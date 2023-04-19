const Pet = (props) => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, props.name),
		React.createElement("h2", {}, props.animal),
		React.createElement("h2", {}, props.breed),
	]);
};

const App = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Adopt Me!"),
		React.createElement(Pet, {
			name: "Fluffy",
			animal: "Dog",
			breed: "Siberian Husky",
		}),
		React.createElement(Pet, {
			name: "Sage",
			animal: "Dog",
			breed: "Daschund",
		}),
		React.createElement(Pet, {
			name: "Mabu",
			animal: "Dog",
			breed: "Mixed",
		}),
	]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
