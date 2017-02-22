import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
  width: '80%',
  position: 'relative',
  textAlign: 'center',
  margin : '0 auto',
};

const LoginViewComponent = ({style}) => {
  const templateStyle = Object.assign({}, styles, style);

  return (
    <div style={templateStyle}>
        <p>Welcome Back</p>
     	<div className="field-line">
	        <TextField
	          floatingLabelText="Name"
	          name="name" className="text-field"
	        />
      	</div>

	    <div className="field-line">
	        <TextField
	          floatingLabelText="Email"
	          name="email" className="text-field"
	        />
	    </div>

	    <div className="field-line">
	        <TextField
	          floatingLabelText="Password"
	          type="password"
	          name="password" className="text-field"
	        />
	    </div>
	    <div>
	    	<RaisedButton label="Submit" primary={true} style={style} />
	    </div>
	</div>
    );
};

export default LoginViewComponent;