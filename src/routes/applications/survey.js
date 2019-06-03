import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { injectIntl} from 'react-intl';
import DataTablePagination from "Components/DataTables/pagination";
import DatePicker from "react-datepicker";
import axios from "axios";

import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  Collapse,
  ButtonDropdown,
  CardSubtitle,
  CardTitle,
  CardImg,
  CardText,
  FormGroup,
  CustomInput,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input
} from "reactstrap";
import Select from "react-select";
import { Redirect, Route, Switch,Link } from "react-router-dom";
import CustomSelectInput from "Components/CustomSelectInput";
import ReactTable from "react-table";
// import productsData from "Data/products.json";
// const dataTableData = productsData.data.slice(0, 20);


import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import ApplicationMenu from "Components/ApplicationMenu";

import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import {
  getSurveyList,
  getSurveyListWithFilter,
  getSurveyListWithOrder,
  getSurveyListSearch,
  addSurveyItem,
  selectedSurveyItemsChange
} from "Redux/actions";

const selectData = [
  { label: "Credit", value: "Credit", key: 0 },
  { label: "Debit", value: "Debit", key: 1 },
  { label: "Cash", value: "Cash", key: 2 },

];

const dataTableColumns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: props => <p className="list-item-heading pt">{props.value}</p>
  },
  {
    Header: "Rent",
    accessor: "rent",
    Cell: props => <p className="text-muted pt">{props.value}</p>
  },
  {
    Header: "Advance",
    accessor: "advance",
    Cell: props => <p className="text-muted pt">{props.value}</p>
  },
  {
    Header: "Maintenance charges",
    accessor: "mcharge",
    Cell: props => <p className="text-muted pt">{props.value}</p>
  },
  {
    Header: "Joining date",
    accessor: "joiningdate",
    Cell: props => <p className="text-muted pt">{props.value}</p>
  }
];


class SurveyListApplication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      modalRight: false,
      selectedOptionLabelTop: "",
      name: "",
      check:false,
      chec:false,
      che:false,
      ch:false,
      selectedOptionLabelTop: "",
      note: '',
      detail:'',
      startDateLabelOver: null,
      names:"",
      rent:"",
      advance:"",
      mcharge: "",
      joiningdate:"",
      model: [],
      tenantid:""
    };
    this.toggleRight = this.toggleRight.bind(this);
    this.toggleRight1 = this.toggleRight1.bind(this);
    this.handleChangeDateLabelOver = this.handleChangeDateLabelOver.bind(this);
  }

  componentWillMount() {
    this.data();
  }

  data = () => {
      axios.get('https://pacific-temple-57282.herokuapp.com/api/v1/viewtenant')
    .then((response) => {
      this.setState({
        model: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  toggleRight(e) {
    this.setState({
      modalRight: !this.state.modalRight
    });

  }

  toggleRight1(e) {
    this.setState({
      modalRight1: !this.state.modalRight1
    });

  }

  handleChangeLabelTop = selectedOptionLabelTop => {
    this.setState({ selectedOptionLabelTop });
  };

  handleCheckboxChange = event =>{
    this.setState({ check: event.target.checked })
  };

  handleCheckboxChang = event =>{
    this.setState({ chec: event.target.checked })
  };

  handleCheckboxChan = event =>{
    this.setState({ che: event.target.checked })
  };

  handleCheckboxCha = event =>{
    this.setState({ ch: event.target.checked })
  };

  handleChangeLabelTop = selectedOptionLabelTop => {
    this.setState({ selectedOptionLabelTop });
  };

  onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState({state});
  }

  handleChangeDateLabelOver(date) {
    this.setState({
      startDateLabelOver: date
    });
  }


  onSubmit = (e) => {
    e.preventDefault();
    var dat = this.state.startDateLabelOver.toLocaleString();
    var daet = dat.slice(4, 15);

    axios.post('https://pacific-temple-57282.herokuapp.com/api/v1/addtenant', {
      name: this.state.names,
      rent: this.state.rent,
      advance: this.state.advance,
      mcharge: this.state.mcharge,
      joiningdate: daet
  })
  .then(response => {
    var msg = "New tenant added on "+ daet;
    axios.post('https://pacific-temple-57282.herokuapp.com/api/v1/addlog', {
      color: "border-theme-2",
      label: msg
    })
    this.setState({
      name:"",
      rent:"",
      advance:"",
      mcharge:"",
      joiningdate:""
    });
    this.data();
  })
  .catch(function (error) {
    console.log(error);
  });
  };

  onPay = (e) => {
    e.preventDefault();
    var a = "";

    if(this.state.check){
      a=a+"Rent";
    }
    if(this.state.chec){
      if(a){
        a=a+','+"Advance"
      }
      else{
        a=a+"Advance";
      }
    }
    if(this.state.che){
      if(a){
        a=a+','+"maintenance";
      }
      else{
        a=a+'maintenance';
      }
    }
    if(this.state.ch){
      if(a){
        a=a+','+"others";
      }
      else{
        a=a+'others';
      }
    }

    axios.post('https://pacific-temple-57282.herokuapp.com/api/v1/makepay', {
      name: this.state.name,
      category: a,
      notes: this.state.note,
      type: this.state.selectedOptionLabelTop.value,
      tenantid: this.state.tenantid
  })
  .then(response => {
    var msg =  this.state.name+' paid ' +a;
    axios.post('https://pacific-temple-57282.herokuapp.com/api/v1/addlog', {
      color: "border-theme-2",
      label: msg
    })
    this.setState({
      name: "",
      note: "",
      check:false,
      chec:false,
      che:false,
      ch:false,
      selectedOptionLabelTop:""
    });
    this.data();
  })
  .catch(function (error) {
    console.log(error);
  });


  }


  render() {
    return this.state.model == false ? (
      <div className="loading" />
    ) : (
      <Fragment>
      <Row>
      <Colxx xxs="12">
        <Card className="mb-4">
          <CardBody>
          <div className="rt">
            <Button outline color="primary" outline onClick={this.toggleRight1}>
              <IntlMessages id="button.tenant" />
            </Button>
          </div>
            <CardTitle>
              <IntlMessages id="table.rent-manage"/>
            </CardTitle>

            <ReactTable
              data={this.state.model}
              columns={dataTableColumns}
              defaultPageSize={5}
              filterable={true}
              showPageJump={true}
              PaginationComponent={DataTablePagination}
              showPageSizeOptions={true}

              getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  this.setState({
                    name: rowInfo.original.name,
                    detail: rowInfo.original.details,
                    tenantid: rowInfo.original._id,
                    note: "",
                    check:false,
                    chec:false,
                    che:false,
                    ch:false,
                    selectedOptionLabelTop:""
                  });
                  this.toggleRight()
                  if (handleOriginal) {
                    handleOriginal()
                  }
                }
              }
            }}
            />



            </CardBody>
          </Card>
        </Colxx>


            <div>
              <Modal isOpen={this.state.modalRight} toggle={this.toggleRight} wrapClassName="modal-right">
                <ModalHeader toggle={this.toggleRight}>Pay</ModalHeader>

                <div className="trt">
                  <Link to={{pathname: `./survey/${this.state.tenantid}` ,state: this.state.tenantid }}> View payment history </Link>
                </div>
                <ModalBody>

                  <Form onSubmit={this.onPay}>

                    <FormGroup>
                      <Label for="exampleEmailGrid">
                        <IntlMessages id="forms.name" />
                      </Label>
                      <Input
                        type="email"
                        name="exampleEmailGrid"
                        id="exampleEmailGrid"
                        placeholder=""
                        value={this.state.name}
                        disabled={true}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleEmailGrid">
                        <IntlMessages id="forms.cate" />
                      </Label>
                      <CustomInput
                        type="checkbox"
                        id="exampleCustomCheckbox"
                        label="Rent"
                        checked={this.state.check}
                        onChange={this.handleCheckboxChange}
                      />
                      <CustomInput
                        type="checkbox"
                        id="exampleCustomCheckbo"
                        label="Advance"
                        checked={this.state.chec}
                        onChange={this.handleCheckboxChang}
                      />
                      <CustomInput
                        type="checkbox"
                        id="exampleCustomCheckb"
                        label="Maintenance"
                        checked={this.state.che}
                        onChange={this.handleCheckboxChan}
                      />
                      <CustomInput
                        type="checkbox"
                        id="exampleCustomCheck"
                        label="Other"
                        checked={this.state.ch}
                        onChange={this.handleCheckboxCha}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleEmailGrid">
                        <IntlMessages id="forms.note" />
                      </Label>
                      <Input
                        type="text"
                        name="note"
                        id="example"
                        onChange={this.onChange.bind(this)}
                        value={this.state.note}
                      />
                    </FormGroup>

                    <div className="form-group has-top-label">
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        value={this.state.selectedOptionLabelTop}
                        onChange={this.handleChangeLabelTop}
                        options={selectData}
                        placeholder=""
                      />
                      <IntlMessages id="forms.payType" />
                    </div>

                    <div className="rt">
                    <Button color="primary" type ="submit" onClick={this.toggleRight}>
                      Submit
                    </Button>{" "}
                    <Button color="secondary" onClick={this.toggleRight}>
                      Cancel
                    </Button>
                    </div>


                  </Form>

                </ModalBody>

              </Modal>
            </div>


      </Row>


          <div>
            <Modal isOpen={this.state.modalRight1} toggle={this.toggleRight1} wrapClassName="modal-right">
              <ModalHeader toggle={this.toggleRight1}>Add Tenant</ModalHeader>
              <ModalBody>


              <Form onSubmit={this.onSubmit}>

                <FormGroup>
                  <Label for="exampleEmailGrid">
                    <IntlMessages id="forms.name" />
                  </Label>
                  <Input
                    type="text"
                    name="names"
                    id="example1"
                    onChange={this.onChange.bind(this)}
                    value={this.state.names}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmailGrid">
                    <IntlMessages id="forms.rent" />
                  </Label>
                  <Input
                    type="text"
                    name="rent"
                    id="example2"
                    onChange={this.onChange.bind(this)}
                    value={this.state.rent}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmailGrid">
                    <IntlMessages id="pages.advance" />
                  </Label>
                  <Input
                    type="text"
                    name="advance"
                    id="example3"
                    onChange={this.onChange.bind(this)}
                    value={this.state.advance}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleEmailGrid">
                    <IntlMessages id="forms.mcharge" />
                  </Label>
                  <Input
                    type="text"
                    name="mcharge"
                    id="example2"
                    onChange={this.onChange.bind(this)}
                    value={this.state.mcharge}
                  />
                </FormGroup>
                <FormGroup>
                <div className="form-group has-float-label">
                  <DatePicker
                    selected={this.state.startDateLabelOver}
                    onChange={this.handleChangeDateLabelOver}
                  />
                  <IntlMessages id="pages.joiningdate" />
                </div>
                </FormGroup>

                <div className="rt">
                  <Button color="secondary" onClick={this.toggleRight1}>
                    Cancel
                  </Button>{' '}
                  <Button color="primary" type="submit" onClick={this.toggleRight1}>
                    Submit
                  </Button>
                </div>


              </Form>


              </ModalBody>
            </Modal>
          </div>


      </Fragment>
    );
  }
}
const mapStateToProps = ({ surveyListApp }) => {
  return {
    surveyListApp
  };
};
export default injectIntl(connect(
  mapStateToProps,
  {
    getSurveyList,
    getSurveyListWithFilter,
    getSurveyListWithOrder,
    getSurveyListSearch,
    addSurveyItem,
    selectedSurveyItemsChange
  }
)(SurveyListApplication));
