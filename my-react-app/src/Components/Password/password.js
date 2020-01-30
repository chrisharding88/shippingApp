import React from 'react';

const Password = () => {
	return (
		<div>
			<h1>Sign Up</h1>
			<form action="/auth/login" method="post">
				<label>Username:</label>
				<input type="text" className="form-control" name="username" />
				<label>Password:</label>
				<input type="password" className="form-control" name="password" />
			</form>
			<button className="btn btn-primary">Submit</button>
		</div>
	);
};

export default Password;
