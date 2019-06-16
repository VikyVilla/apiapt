import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import DataTablePagination from "Components/DataTables/pagination";
import ReactTable from "react-table";
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
  FormGroup,
  TabPane,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardSubtitle,
  CardTitle,
  Form,
  Label,
  Input
} from "reactstrap";
import Rating from "Components/Rating";
import {
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4
} from "Constants/chartConfig";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import CustomSelectInput from "Components/CustomSelectInput";
import Select from "react-select";
import DatePicker from "react-datepicker";

import { LineShadow } from "Components/Charts";
import { areaChartConfig } from "Constants/chartConfig";

import { NavLink } from "react-router-dom";
import CircularProgressbar from "react-circular-progressbar";

import { Colxx } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import classnames from "classnames";

const models =[
{name: "Robert",flatDetails:"No 3,4th floor,D block",category:"Electricity",status: "Pending",assignedDate:"May 25 2019",completedDate:"May 30 2019",feedback:"Good work"},
{name: "Johnson",flatDetails:"No 8,2th floor,E block",category:"Drainage",status: "Completed",assignedDate:"May 2 2019",completedDate:"May 3 2019",feedback:"Good work"},
{name: "Clive",flatDetails:"No 5,2th floor,A block",category:"Security",status: "Pending",assignedDate:"Apr 25 2019",completedDate:"",feedback:"Good work"},
{name: "Christoper",flatDetails:"No 2,6th floor,D block",category:"House keeping",status: "Completed",assignedDate:"Sep 5 2019",completedDate:"Sep 8 2019",feedback:"Good work"},
{name: "Kevin",flatDetails:"No 1,3th floor,C block",category:"Laundry",status: "Pending",assignedDate:"Jun 25 2019",completedDate:"",feedback:"Good work"}

];

const selectData = [
  { label: "Photography", value: "Photography", key: 0 },
  { label: "Drainage", value: "Drainage", key: 1 },
  { label: "Electricity", value: "Electricity", key: 2 },
  { label: "Security", value: "Security", key: 3 },
  { label: "Manager", value: "Manager", key: 4 },
  { label: "Furnish", value: "Furnish", key: 5 }
];

const block = [
  { label: "A", value: "A", key: 0 },
  { label: "B", value: "B", key: 1 },
  { label: "C", value: "C", key: 2 },
  { label: "D", value: "D", key: 3 },
  { label: "E", value: "E", key: 4 },
  { label: "F", value: "F", key: 5 },
];

const floor = [
  { label: "F1", value: "F1", key: 0 },
  { label: "F2", value: "F2", key: 1 },
  { label: "F3", value: "F3", key: 2 },
  { label: "F4", value: "F4", key: 3 },
  { label: "F5", value: "F5", key: 4 },
  { label: "F6", value: "F6", key: 5 },
];

const room = [
  { label: "1", value: "1", key: 0 },
  { label: "2", value: "2", key: 1 },
  { label: "3", value: "3", key: 2 },
  { label: "4", value: "4", key: 3 },
  { label: "5", value: "5", key: 4 },
  { label: "6", value: "6", key: 5 },
];

const dataTableColumns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: props => <p className="list-item-heading">{props.value}</p>
  },
  {
    Header: "Flat details",
    accessor: "flatDetails",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Category",
    accessor: "category",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: props => <p className="text-muted">{props.value}</p>
  },

  {
    Header: "Assigned date",
    accessor: "assignedDate",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Completed date",
    accessor: "completedDate",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Feedback",
    accessor: "feedback",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
];

export default class DetailsLayout extends Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
    this.handleChangeDateLabelTop = this.handleChangeDateLabelTop.bind(this);
    this.state = {
      activeFirstTab: "1",
      modalRight: false,
      modalRight1: false,
      startDateLabelTop: null,
      selectedOptionLabelTop: "",
      selectedOptionBlockTop: "",
      selectedOptionFloorTop: "",
      selectedOptionRoomTop: "",
      name:'',
      salary:'',
      category:'',
      desc:'',
      model: []
    };
    this.toggleRight = this.toggleRight.bind(this);
    this.toggleRight1 = this.toggleRight1.bind(this);
  }

  componentWillMount() {
    this.data();
  }

  data = () => {
      axios.get('https://pacific-temple-57282.herokuapp.com/api/v1/getservice')
    .then((response) => {
      this.setState({
        model: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeFirstTab: tab
      });
    }
  }

  toggleRight() {
    this.setState({
      modalRight: !this.state.modalRight
    });
  }

  toggleRight1() {
    this.setState({
      modalRight1: !this.state.modalRight1
    });
  }


  handleChangeDateLabelTop(date) {
    this.setState({
      startDateLabelTop: date
    });
  }

  handleChangeLabelTop = selectedOptionLabelTop => {
    this.setState({ selectedOptionLabelTop });
  };

  handleChangeBlockTop = selectedOptionBlockTop => {
    this.setState({ selectedOptionBlockTop });
  };

  handleChangeFloorTop = selectedOptionFloorTop => {
    this.setState({ selectedOptionFloorTop });
  };

  handleChangeRoomTop = selectedOptionRoomTop => {
    this.setState({ selectedOptionRoomTop });
  };

  onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState({state});
  };

  onSubmit = (e) => {
    e.preventDefault();

    axios.post('https://pacific-temple-57282.herokuapp.com/api/v1/addservice', {
      name: this.state.name,
      salary: this.state.salary,
      category: this.state.category
  })
  .then(response => {
    var msg = "New Service registration" +' '+this.state.category;
    axios.post('https://pacific-temple-57282.herokuapp.com/api/v1/addlog', {
      color: "border-theme-2",
      label: msg
  })
    this.setState({
      name: "",
      salary:"",
      category:""
    });
    this.data();
  })
  .catch(function (error) {
    console.log(error);
  });
  };


  onBook = (e) => {
    e.preventDefault();
    var dat = this.state.startDateLabelTop.toLocaleString();
    var daet = dat.slice(4, 15);
    var image;
    if (this.state.selectedOptionLabelTop.value === "Photography"){
      image = "/assets/img/photogr.jpg";
    }
    else if (this.state.selectedOptionLabelTop.value === "Drainage") {
      image = "/assets/img/drain.jpg";
    }
    else if (this.state.selectedOptionLabelTop.value === "Electricity"){
      image = "/assets/img/ele.jpg";
    }
    else if (this.state.selectedOptionLabelTop.value === "Security"){
      image = "/assets/img/sec.jpg";
    }
    else if (this.state.selectedOptionLabelTop.value === "Manager"){
      image = "/assets/img/main.jpeg";
    }
    else if (this.state.selectedOptionLabelTop.value === "Furnish"){
      image = "/assets/img/fur.jpg";
    }
    // description need to be set
    axios.post('https://pacific-temple-57282.herokuapp.com/api/v1/bookservice', {
      date: daet,
      category: this.state.selectedOptionLabelTop.value,
      block: this.state.selectedOptionBlockTop.value,
      floor: this.state.selectedOptionFloorTop.value,
      roomno: this.state.selectedOptionRoomTop.value,
      description: this.state.desc,
      img: image

    })
    .then(response => {
      var msg = this.state.selectedOptionLabelTop.value + ' '+ "service booked for" +' '+daet;
      axios.post('https://pacific-temple-57282.herokuapp.com/api/v1/addlog', {
        color: "border-danger",
        label: msg
    })

      this.setState({
        startDateLabelTop: null,
        selectedOptionLabelTop:"",
        selectedOptionBlockTop:"",
        selectedOptionFloorTop:"",
        selectedOptionRoomTop:"",
        desc: ""
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return models == false ? (
      <div className="loading" />
    ) : (

      <Fragment>
      <Row>
      <Colxx xxs="12">
        <Card className="mb-4">
          <CardBody>
            <CardTitle>
              <IntlMessages id="table.react-book"/>
              <div className="rt">
              <Button color="primary" outline onClick={this.toggleRight1}>
                <IntlMessages id="button.updEmp" />
              </Button>{" "}
              <Button color="primary" outline onClick={this.toggleRight}>
                <IntlMessages id="button.book" />
              </Button>{" "}
              </div>
            </CardTitle>

            <ReactTable
              data= {models}
              columns={dataTableColumns}
              defaultPageSize={5}
              filterable={true}
              showPageJump={true}
              PaginationComponent={DataTablePagination}
              showPageSizeOptions={true}
            />
          </CardBody>
        </Card>
      </Colxx>




            <Modal isOpen={this.state.modalRight1} toggle={this.toggleRight1} wrapClassName="modal-right">
              <ModalHeader toggle={this.toggleRight1}>Add Service</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.onSubmit}>

                  <FormGroup>
                    <Label for="exampleEmailGrid">
                      <IntlMessages id="forms.name" />
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      id="example1"
                      onChange={this.onChange.bind(this)}
                      value={this.state.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmailGrid">
                      <IntlMessages id="forms.salary" />
                    </Label>
                    <Input
                      type="text"
                      name="salary"
                      id="example2"
                      onChange={this.onChange.bind(this)}
                      value={this.state.salary}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmailGrid">
                      <IntlMessages id="pages.category" />
                    </Label>
                    <Input
                      type="text"
                      name="category"
                      id="example3"
                      onChange={this.onChange.bind(this)}
                      value={this.state.category}
                    />
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


      <Card className="mb-4">
          <div>
            <Modal isOpen={this.state.modalRight} toggle={this.toggleRight} wrapClassName="modal-right">
              <ModalHeader toggle={this.toggleRight}>Book a service</ModalHeader>
              <ModalBody>

              <Row className="mb-4">
                <Colxx xxs="12">

                    {/*  form starts here*/}
                        <Form onSubmit={this.onBook}>
                          <div className="form-group has-top-label">
                            <DatePicker
                              shouldCloseOnSelect={true}
                              selected={this.state.startDateLabelTop}
                              onChange={this.handleChangeDateLabelTop}
                            />
                            <IntlMessages id="forms.date-u" />
                          </div>

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
                            <IntlMessages id="forms.cat-u" />
                          </div>

                          <div className="form-group has-top-label">
                            <Select
                              components={{ Input: CustomSelectInput }}
                              className="react-select"
                              classNamePrefix="react-select"
                              name="form-field-name"
                              value={this.state.selectedOptionBlockTop}
                              onChange={this.handleChangeBlockTop}
                              options={block}
                              placeholder=""
                            />
                            <IntlMessages id="forms.block-u" />
                          </div>

                          <div className="form-group has-top-label">
                            <Select
                              components={{ Input: CustomSelectInput }}
                              className="react-select"
                              classNamePrefix="react-select"
                              name="form-field-name"
                              value={this.state.selectedOptionFloorTop}
                              onChange={this.handleChangeFloorTop}
                              options={floor}
                              placeholder=""
                            />
                            <IntlMessages id="forms.floor-u" />
                          </div>

                          <div className="form-group has-top-label">
                            <Select
                              components={{ Input: CustomSelectInput }}
                              className="react-select"
                              classNamePrefix="react-select"
                              name="form-field-name"
                              value={this.state.selectedOptionRoomTop}
                              onChange={this.handleChangeRoomTop}
                              options={room}
                              placeholder=""
                            />
                            <IntlMessages id="forms.room-u" />
                          </div>

                          <FormGroup>
                            <Label for="ex">
                              <IntlMessages id="forms.desc" />
                            </Label>
                            <Input
                              type="text"
                              name="desc"
                              id="ex"
                              onChange={this.onChange.bind(this)}
                              value={this.state.desc}
                            />
                          </FormGroup>
                          <Button color="primary" type="submit" onClick={this.toggleRight}>
                            Submit
                          </Button>{" "}
                          <Button color="secondary" onClick={this.toggleRight}>
                            Cancel
                          </Button>
                        </Form>

                      {/*form ends here*/}

                  </Colxx>
                </Row>

              </ModalBody>

            </Modal>
          </div>
      </Card>


      </Row>
    </Fragment>
    );
  }
}
