import {useState, useEffect} from 'react';

const Form = () => {
	const defaultValue = {
		name: ''
	};

	const [formField, setFormField] = useState(defaultValue);
	const {name} = formField;

	const changeHandle = (event) => {
		const {name, value} = event.target;
		setFormField({...formField, name:value});
	}

	const submitHandler = (event) => {
		event.preventDefault();
		if(!name){
			alert("no data");
		}
		try{
			console.log("data-submitted" + name);
		}
		catch(error){
			console.log(error);
		}
	}
	return(
		<div>
			<h1>Form</h1>
			<form onSubmit={submitHandler}>
				<label>Name</label>
				<input type="text" name="name" value={name} onChange={changeHandle} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Form;