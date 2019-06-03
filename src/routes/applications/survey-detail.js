import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import DataTablePagination from "Components/DataTables/pagination";
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  Button,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  ButtonDropdown,
  FormGroup,
  CustomInput,
  Progress,
  CardTitle
} from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import SurveyQuestionBuilder from "Components/SurveyQuestionBuilder";
import Sortable from "react-sortablejs";
import { mapOrder } from "Util/Utils";
import ApplicationMenu from "Components/ApplicationMenu";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
import ReactTable from "react-table";

import { connect } from "react-redux";
import {
    getSurveyDetail,
    deleteSurveyQuestion,
    saveSurvey

} from "Redux/actions";


import {
  DoughnutShadow
} from "Components/Charts";
import {
  doughnutChartConfig
} from "Constants/chartConfig";

import { ThemeColors } from "Util/ThemeColors";

const dataTableColumns = [
  {
    Header: "Name",
    accessor: "name",
    Cell: props => <p className="list-item-heading">{props.value}</p>
  },
  {
    Header: "Category",
    accessor: "category",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Notes",
    accessor: "notes",
    Cell: props => <p className="text-muted">{props.value}</p>
  },
  {
    Header: "Type",
    accessor: "type",
    Cell: props => <p className="text-muted">{props.value}</p>
  }
];



 class SurveyDetailApplication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:this.props.location.state,
      model:[]
    };
  }

  componentWillMount() {
    this.data();
  }

  data = () => {
      axios.get(`https://pacific-temple-57282.herokuapp.com/api/v1/history/${this.state.id}`)
    .then((response) => {
      this.setState({
        model: response.data
      });
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



          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>

                <ReactTable
                  data={this.state.model}
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

      </Fragment>
    );
  }
}

const mapStateToProps = ({  surveyDetailApp }) => {
  return {
      surveyDetailApp
  };
};
export default connect(
  mapStateToProps,
  {
      getSurveyDetail,
      deleteSurveyQuestion,
      saveSurvey
  }
)(SurveyDetailApplication);
