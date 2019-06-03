import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx } from "Components/CustomBootstrap";
import { render } from "react-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { loginUser } from "Redux/actions";

class LoginLayout extends Component {
  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }

  state = {
    validaiton: false
  };

  render() {
    return (
      <Fragment>
        <div className="fixed-background" />
        <main>
          <div className="container">
            <Row className="h-100">
              <Colxx xxs="12" md="7" className="mx-auto my-auto">
                <Card className="auth-card">
                  <div className="form-side">
                    <NavLink to={`/`} className="white">
                      <span className="logo-single logo-left-margin2" />
                    </NavLink>
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      validationSchema={Yup.object().shape({
                        email: Yup.string().required("Required"),
                        password: Yup.string().required("Required")
                      })}
                      onSubmit={values => {
                        this.props.loginUser(values, this.props.history);
                      }}
                    >
                      {({ errors, touched, fieldStatus }) => (
                        <Form>
                          <Colxx xxs="12">
                            <h3>
                              <IntlMessages id="user.login-title" />
                            </h3>
                            <FormGroup
                              className={
                                errors.email && touched.email
                                  ? "form-group has-top-label m-0 text-danger"
                                  : "form-group has-top-label mb-4"
                              }
                            >
                              <Label
                                className={
                                  errors.email && touched.email
                                    ? "text-danger"
                                    : ""
                                }
                              >
                                <IntlMessages id="user.email" />
                              </Label>
                              <Field
                                name="email"
                                type="text"
                                className={
                                  "form-control" +
                                  (errors.email && touched.email
                                    ? " border-danger"
                                    : "")
                                }
                                disabled={fieldStatus}
                              />
                              {errors.email && touched.email ? (
                                <small className="text-danger">
                                  {errors.email}
                                </small>
                              ) : (
                                ""
                              )}
                            </FormGroup>
                            <FormGroup
                              className={
                                errors.password && touched.password
                                  ? "form-group has-top-label m-0 text-danger"
                                  : "form-group has-top-label mb-4"
                              }
                            >
                              <Label
                                className={
                                  errors.password && touched.password
                                    ? "text-danger"
                                    : ""
                                }
                              >
                                <IntlMessages id="user.password" />
                              </Label>
                              <Field
                                name="password"
                                type="password"
                                className={
                                  "form-control" +
                                  (errors.password && touched.password
                                    ? " border-danger"
                                    : "")
                                }
                              />
                              {errors.password && touched.password ? (
                                <small className="text-danger">
                                  {errors.password}
                                </small>
                              ) : (
                                ""
                              )}
                            </FormGroup>
                            <div className="d-flex justify-content-between align-items-center">
                              <NavLink to={`/forgot-password`}>
                                <IntlMessages id="user.forgot-password-question" />
                              </NavLink>
                              <Button
                                color="primary"
                                className="btn-shadow"
                                size="lg"
                                type="submit"
                              >
                                <IntlMessages id="user.login-button" />
                              </Button>
                            </div>
                            {this.loginFailed}
                          </Colxx>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Card>
              </Colxx>
            </Row>
          </div>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(LoginLayout);
