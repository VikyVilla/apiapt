import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { injectIntl} from 'react-intl';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Progress,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  CustomInput,
  CardHeader
} from "reactstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";
import { NavLink } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";
import { CalendarToolbar } from "Components/Calendar/CalendarToolbar";
import { PolarShadow, LineShadow, SmallLineChart } from "Components/Charts";
import {
  visitChartConfig,
  conversionChartConfig,
  lineChartConfig,
  polarChartConfig,
  smallChartData1,
  smallChartData2,
  smallChartData3,
  smallChartData4
} from "Constants/chartConfig";
import CountUp from "react-countup";
import axios from "axios";


import BigCalendar from "react-big-calendar";
import moment from "moment";
import ReactTable from "react-table";
import CircularProgressbar from "react-circular-progressbar";
import { Chart } from "react-chartjs-2";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import Rating from "Components/Rating";
import DataTablePagination from "Components/DataTables/pagination";
import Sortable from "react-sortablejs";

import "chartjs-plugin-datalabels";
import "react-circular-progressbar/dist/styles.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-table/react-table.css";

// import eventsData from "Data/events.json";
import ticketsData from "Data/tickets.json";
// import logsData from "Data/logs.json";
// import productsData from "Data/products.json";
// import profileStatusData from "Data/dashboard.profile.status.json";
// import cakeData from "Data/dashboard.cakes.json";

Chart.defaults.global.plugins.datalabels.display = false;

const localizer = BigCalendar.momentLocalizer(moment)

const selectData = [
  { label: "Chocolate", value: "chocolate", key: 0 },
  { label: "Vanilla", value: "vanilla", key: 1 },
  { label: "Strawberry", value: "strawberry", key: 2 },
  { label: "Caramel", value: "caramel", key: 3 },
  { label: "Cookies and Cream", value: "cookiescream", key: 4 },
  { label: "Peppermint", value: "peppermint", key: 5 }
];

const selectDataType = [
  { label: "Occupied", value: "Occupied", key: 0 },
  { label: "Unoccupied", value: "Unoccupied", key: 1 },
  { label: "Notice Period", value: "Notice Period", key: 2 }
];

const dataTableColumns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: props => <p className="list-item-heading">{props.value}</p>
  },
  {
    Header: "Sales",
    accessor: "sales",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Stock",
    accessor: "stock",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Category",
    accessor: "category",
    Cell: props => <p className="text-muted">{props.value}</p>
  }
];

// const recentOrders = productsData.data.slice(0, 6);
const tickets = ticketsData.data;
  // const events = eventsData.data;
  // const logs = logsData.data;
// const dataTableData = productsData.data.slice(0, 12);
// const profileStatuses = profileStatusData.data;
// const cakes = cakeData.data;

BigCalendar.momentLocalizer(moment);

class DefaultDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);

    this.state = {
      selectedOptions: [],
      selectedOptionsType: [],
      pendingPayments:14,
      completedPayments:32,
      totalPayments:74,
      model:[],
      modelLog:[]
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleChangeType = selectedOptionsType => {
    this.setState({ selectedOptionsType });
  };


  componentWillMount() {
    this.data();
    this.logdata();
  }

  data = () => {
      axios.get('https://pacific-temple-57282.herokuapp.com/api/v1/getbookservice')
    .then((response) => {
      this.setState({
        model: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  logdata = () => {
      axios.get('https://pacific-temple-57282.herokuapp.com/api/v1/getlog')
    .then((response) => {
      this.setState({
        modelLog: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
    const {messages} = this.props.intl;
    return (this.state.model && this.state.modelLog) == false ? (
      <div className="loading" />
    ) : (
      <Fragment>

        <Row>
          <Colxx lg="12" xl="6">
            <div className="icon-cards-row">
              <ReactSiemaCarousel
                perPage={{
                  0: 1,
                  320: 2,
                  576: 3,
                  1800: 4
                }}
                controls={false}
                loop={false}
              >
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-clock" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.pending-payments" />
                      </p>
                      <p className="lead text-center">
                        <CountUp
                          duration={3}
                          start={-20}
                          end={this.state.pendingPayments}
                        />
                  </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-basket-coins" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.completed-payments" />
                      </p>
                      <p className="lead text-center">
                      <CountUp
                        duration={3}
                        start={-20}
                        end={this.state.completedPayments}
                      />
                      </p>
                    </CardBody>
                  </Card>
                </div>
                <div className="icon-row-item">
                  <Card className="mb-4">
                    <CardBody className="text-center">
                      <i className="iconsminds-arrow-refresh" />
                      <p className="card-text font-weight-semibold mb-0">
                        <IntlMessages id="dashboards.total-payments" />
                      </p>
                      <p className="lead text-center">
                        <CountUp
                          duration={3}
                          start={-20}
                          end={this.state.totalPayments}
                        />
                      </p>
                    </CardBody>
                  </Card>
                </div>

              </ReactSiemaCarousel>
            </div>

            <Row>
              <Colxx md="12" className="mb-4">
                <Card>

                  <CardBody>
                    <CardTitle>
                      <IntlMessages id="dashboards.week" />
                    </CardTitle>
                    <div className="dashboard-line-chart">
                      <LineShadow {...lineChartConfig} />
                    </div>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </Colxx>

          <Colxx lg="12" xl="6" className="mb-4">
            <Card>
              <div className="position-absolute card-top-buttons">
                <button className="btn btn-header-light icon-button">
                  <i className="simple-icon-refresh" />
                </button>
              </div>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.schedule" />
                </CardTitle>
                <div className="scroll dashboard-list-with-thumbs">
                  <PerfectScrollbar
                    options={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    {this.state.model.map((order, index) => {
                      return (
                        <div key={index} className="d-flex flex-row mb-3">
                          <NavLink
                            to=""
                            className="d-block position-relative"
                          >
                            <img
                              src={order.img}
                              alt="image"
                              className="list-thumbnail border-0"
                            />
                            <Badge
                              key={index}
                              className="position-absolute badge-top-right"
                              color="primary"
                              pill
                            >
                            BENDING
                            </Badge>
                          </NavLink>

                          <div className="pl-3 pt-2 pr-2 pb-2">
                            <NavLink to="">
                              <p className="list-item-heading">{order.category}</p>
                              <div className="pr-4">
                              <p className="text-muted mb-1 text-small">
                                Block : {order.block},Floor : {order.floor}, Roomno : {order.roomno}
                              </p>
                                <p className="text-muted mb-1 text-small">
                                  {order.description}
                                </p>
                              </div>
                              <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                                {order.date}
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      );
                    })}
                  </PerfectScrollbar>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx lg="4" md="12" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.apartment" />
                </CardTitle>
                <div className="dashboard-donut-chart">
                  <PolarShadow {...polarChartConfig} />
                </div>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx lg="4" md="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.todo" />
                </CardTitle>
                <div className="dashboard-logs">
                  <PerfectScrollbar
                    options={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    <table className="table table-sm table-borderless">
                      <tbody>
                        {this.state.modelLog.map((log, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <span
                                  className={`log-indicator align-middle ${
                                    log.color
                                  }`}
                                />
                              </td>
                              <td>
                                <span className="font-weight-medium">
                                  {log.label}
                                </span>
                              </td>

                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </PerfectScrollbar>
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx lg="4" md="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="dashboards.service" />
                </CardTitle>
                <div className="dashboard-list-with-user">
                  <PerfectScrollbar
                    options={{ suppressScrollX: true, wheelPropagation: false }}
                  >
                    {tickets.map((ticket, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex flex-row mb-3 pb-3 border-bottom"
                        >
                          <NavLink to="">
                            <img
                              src={ticket.thumb}
                              alt={ticket.label}
                              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                            />
                          </NavLink>

                          <div className="pl-3 pr-2">
                            <NavLink to="">
                              <p className="font-weight-medium mb-0 ">
                                {ticket.label}
                              </p>
                              <p className="text-muted mb-0 text-small">
                                {ticket.date}
                              </p>
                            </NavLink>
                          </div>
                        </div>
                      );
                    })}
                  </PerfectScrollbar>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>





        <Sortable
          options={{
            handle: ".handle"
          }}
          className="row"
        >
          <Colxx xl="3" lg="6" className="mb-4">
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.payment-status" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={64}
                    text={"64%"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="3" lg="6" className="mb-4">
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.work-progress" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={75}
                    text={"75%"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="3" lg="6" className="mb-4">
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.tasks-completed" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={32}
                    text={"32%"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xl="3" lg="6" className="mb-4">
            <Card>
              <CardHeader className="p-0 position-relative">
                <div className="position-absolute handle card-icon">
                  <i className="simple-icon-shuffle" />
                </div>
              </CardHeader>
              <CardBody className="d-flex justify-content-between align-items-center">
                <CardTitle className="mb-0">
                  <IntlMessages id="dashboards.payments-done" />
                </CardTitle>
                <div className="progress-bar-circle">
                  <CircularProgressbar
                    strokeWidth={4}
                    percentage={60}
                    text={"45%"}
                  />
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Sortable>
      </Fragment>
    );
  }
}
export default injectIntl(DefaultDashboard);
