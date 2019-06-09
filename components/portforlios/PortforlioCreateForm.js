import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: '',
  endDate: '',
};

const validateInputs = values => {
  let errors = {};
  Object.entries(values).forEach(([key, value]) => {
    if (!values[key]) {
      errors[key] = `Field ${key} is required!`;
    }
  });
  return errors;
};

const PortforlioCreateForm = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" label="Title" component={PortInput} />
          <Field
            type="text"
            name="company"
            label="Company"
            component={PortInput}
          />
          <Field
            type="text"
            name="location"
            label="Location"
            component={PortInput}
          />
          <Field
            type="text"
            name="postion"
            label="Position"
            component={PortInput}
          />
          <Field
            type="textarea"
            name="description"
            label="Description"
            component={PortInput}
          />

          <Field name="startDate" label="Start Date" component={PortDate} />

          <Field name="endDate" label="End Date" component={PortDate} />

          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortforlioCreateForm;

// import React, { Component } from 'react';

// class PortforlioCreateForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: '', description: '', language: '' };
//   }

//   handleChange = event => {
//     const field = event.target.name;
//     this.setState({ [field]: event.target.value });
//   };

//   handleSubmit = event => {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Label>
//           Name:
//           <input
//             name="title"
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </Label>
//         <Label>
//           Description:
//           <textarea
//             name="description"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </Label>
//         <Label>
//           Pick your favorite Programming Language:
//           <select
//             name="language"
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <option value="javascript">Javascript</option>
//             <option value="java">Java</option>
//             <option value="c#">C#</option>
//             <option value="c++">C++</option>
//           </select>
//         </Label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default PortforlioCreateForm;
