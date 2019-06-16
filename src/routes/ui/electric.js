import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { LineShadow } from "Components/Charts";
import {Row,Card,CardBody,CardTitle,} from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";
import {
    chartTooltip
  } from "Components/Charts";
  import { ThemeColors } from "Util/ThemeColors";
  import Select from "react-select";
  import CustomSelectInput from "Components/CustomSelectInput";
  const colors = ThemeColors();

  const SELECT_DATA = [
  { label: "Robert", value: "robert", key: 0 },
  { label: "Johnson", value: "johnson", key: 1 },
  { label: "Steve", value: "steve", key: 2 },
  { label: "Cameron", value: "cameron", key: 3 },
  { label: "George", value: "george", key: 4 }
];


const lineChartConfig = {
   legend: {
     display: false
   },
   options: {
     responsive: true,
     maintainAspectRatio: false,
     tooltips: chartTooltip,
     plugins: {
       datalabels: {
         display: false
       }
     },
     scales: {
       yAxes: [
         {
           gridLines: {
             display: true,
             lineWidth: 1,
             color: "rgba(0,0,0,0.1)",
             drawBorder: false
           },
           ticks: {
             beginAtZero: true,
             stepSize: 100,
             min: 100,
             max: 500,
             padding: 20
           }
         }
       ],
       xAxes: [
         {
           gridLines: {
             display: false
           }
         }
       ]
     }
   },
   data: {
     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" , "Nov", "Dec"],
     datasets: [
       {
         label: "Unit",
         data: [],
         borderColor: colors.themeColor1,
         pointBackgroundColor: colors.foregroundColor,
         pointBorderColor: colors.themeColor1,
         pointHoverBackgroundColor: colors.themeColor1,
         pointHoverBorderColor: colors.foregroundColor,
         pointRadius: 6,
         pointBorderWidth: 2,
         pointHoverRadius: 8,
         fill: false
       }
     ]
   }
 };


const lineChartConfig1 = {
   legend: {
     display: false
   },
   options: {
     responsive: true,
     maintainAspectRatio: false,
     tooltips: chartTooltip,
     plugins: {
       datalabels: {
         display: false
       }
     },
     scales: {
       yAxes: [
         {
           gridLines: {
             display: true,
             lineWidth: 1,
             color: "rgba(0,0,0,0.1)",
             drawBorder: false
           },
           ticks: {
             beginAtZero: true,
             stepSize: 100,
             min: 100,
             max: 500,
             padding: 20
           }
         }
       ],
       xAxes: [
         {
           gridLines: {
             display: false
           }
         }
       ]
     }
   },
   data: {
     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" , "Nov", "Dec"],
     datasets: [
       {
         label: "Unit",
         data: [200, 250, 100, 120, 300, 250, 400, 300, 350, 210, 190, 260],
         borderColor: colors.themeColor1,
         pointBackgroundColor: colors.foregroundColor,
         pointBorderColor: colors.themeColor1,
         pointHoverBackgroundColor: colors.themeColor1,
         pointHoverBorderColor: colors.foregroundColor,
         pointRadius: 6,
         pointBorderWidth: 2,
         pointHoverRadius: 8,
         fill: false
       }
     ]
   }
 };

 const lineChartConfig2 = {
    legend: {
      display: false
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: chartTooltip,
      plugins: {
        datalabels: {
          display: false
        }
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: true,
              lineWidth: 1,
              color: "rgba(0,0,0,0.1)",
              drawBorder: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 100,
              min: 100,
              max: 500,
              padding: 20
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    },
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" , "Nov", "Dec"],
      datasets: [
        {
          label: "Unit",
          data: [120, 150, 180, 230, 330, 250, 200, 500, 350, 210, 190, 180],
          borderColor: colors.themeColor1,
          pointBackgroundColor: colors.foregroundColor,
          pointBorderColor: colors.themeColor1,
          pointHoverBackgroundColor: colors.themeColor1,
          pointHoverBorderColor: colors.foregroundColor,
          pointRadius: 6,
          pointBorderWidth: 2,
          pointHoverRadius: 8,
          fill: false
        }
      ]
    }
  };

  const lineChartConfig3 = {
     legend: {
       display: false
     },
     options: {
       responsive: true,
       maintainAspectRatio: false,
       tooltips: chartTooltip,
       plugins: {
         datalabels: {
           display: false
         }
       },
       scales: {
         yAxes: [
           {
             gridLines: {
               display: true,
               lineWidth: 1,
               color: "rgba(0,0,0,0.1)",
               drawBorder: false
             },
             ticks: {
               beginAtZero: true,
               stepSize: 100,
               min: 100,
               max: 500,
               padding: 20
             }
           }
         ],
         xAxes: [
           {
             gridLines: {
               display: false
             }
           }
         ]
       }
     },
     data: {
       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" , "Nov", "Dec"],
       datasets: [
         {
           label: "Unit",
           data: [400, 360, 380, 330, 430, 350, 200, 400, 350, 110, 490, 280],
           borderColor: colors.themeColor1,
           pointBackgroundColor: colors.foregroundColor,
           pointBorderColor: colors.themeColor1,
           pointHoverBackgroundColor: colors.themeColor1,
           pointHoverBorderColor: colors.foregroundColor,
           pointRadius: 6,
           pointBorderWidth: 2,
           pointHoverRadius: 8,
           fill: false
         }
       ]
     }
   };

   const lineChartConfig4 = {
      legend: {
        display: false
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: chartTooltip,
        plugins: {
          datalabels: {
            display: false
          }
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
                lineWidth: 1,
                color: "rgba(0,0,0,0.1)",
                drawBorder: false
              },
              ticks: {
                beginAtZero: true,
                stepSize: 100,
                min: 100,
                max: 500,
                padding: 20
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      },
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" , "Nov", "Dec"],
        datasets: [
          {
            label: "Unit",
            data: [100, 160, 150, 170, 230, 310, 400, 300, 250, 180, 410, 280],
            borderColor: colors.themeColor1,
            pointBackgroundColor: colors.foregroundColor,
            pointBorderColor: colors.themeColor1,
            pointHoverBackgroundColor: colors.themeColor1,
            pointHoverBorderColor: colors.foregroundColor,
            pointRadius: 6,
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            fill: false
          }
        ]
      }
    };

    const lineChartConfig5 = {
       legend: {
         display: false
       },
       options: {
         responsive: true,
         maintainAspectRatio: false,
         tooltips: chartTooltip,
         plugins: {
           datalabels: {
             display: false
           }
         },
         scales: {
           yAxes: [
             {
               gridLines: {
                 display: true,
                 lineWidth: 1,
                 color: "rgba(0,0,0,0.1)",
                 drawBorder: false
               },
               ticks: {
                 beginAtZero: true,
                 stepSize: 100,
                 min: 100,
                 max: 500,
                 padding: 20
               }
             }
           ],
           xAxes: [
             {
               gridLines: {
                 display: false
               }
             }
           ]
         }
       },
       data: {
         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" , "Nov", "Dec"],
         datasets: [
           {
             label: "Unit",
             data: [350, 260, 150, 270, 250, 410, 300, 370, 210, 180, 130, 380],
             borderColor: colors.themeColor1,
             pointBackgroundColor: colors.foregroundColor,
             pointBorderColor: colors.themeColor1,
             pointHoverBackgroundColor: colors.themeColor1,
             pointHoverBorderColor: colors.foregroundColor,
             pointRadius: 6,
             pointBorderWidth: 2,
             pointHoverRadius: 8,
             fill: false
           }
         ]
       }
     };

export default class electric extends Component {
  constructor(props) {

    super(props);
    this.state = {
      selectedOption:"",
      data:"",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = selectedOption => {
    if(selectedOption.key === 0){
      this.setState({
        data:lineChartConfig1
      });
    }
    else if(selectedOption.key === 1){
      this.setState({
        data:lineChartConfig2
      });
    }
    else if(selectedOption.key === 2){
      this.setState({
        data:lineChartConfig3
      });
    }
    else if(selectedOption.key === 3){
      this.setState({
        data:lineChartConfig4
      });
    }
    else if(selectedOption.key === 4){
      this.setState({
        data:lineChartConfig5
      });
    }
    this.setState({ selectedOption });
  };

  componentWillMount() {
    this.datas();
  }

  datas = () => {

      this.setState({
          data:""
      });

  }


  render() {
    return (
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="form-components.react-bill" />
              </CardTitle>
              <Row>
                <Colxx xxs="12" md="6" className="mb-5">
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <IntlMessages id="dashboards.read" />
                      </CardTitle>
                      <div className="dashboard-line-chart">{console.log(this.state.data)}
                        <LineShadow {...this.state.data} />
                      </div>
                    </CardBody>
                  </Card>
                </Colxx>
                <Colxx xxs="12" md="6">
                  <label>
                    <IntlMessages id="form-components.select-tenant" />
                  </label>
                  <Select
                    components={{ Input: CustomSelectInput }}
                    className="react-select"
                    classNamePrefix="react-select"
                    name="form-field-name"
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={SELECT_DATA}
                  />
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    );
  }
}
