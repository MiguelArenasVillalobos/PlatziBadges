import React from "react";

class BadgeForm extends React.Component {
  // state = {};

  onChange = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form was submmited");
  //   console.log(this.state);
  // };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              id="name"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              id="lastName"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              id="email"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              id="jobTitle"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              id="twitter"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
