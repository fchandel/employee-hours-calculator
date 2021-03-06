import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import 'rc-time-picker/assets/index.css';
import moment from 'moment'
import TableHours from './Table.js'
import icon from "../src/images/grid.png"

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      format: 'h:mm a',
      totalHours: 0,
      days: [], // var day = { id, start, end, total}
      defaultStart: moment().hour(10).minute(0),
      defaultEnd: moment().hour(19).minute(0),
      employeeName: ''
    };

    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.addRow = this.addRow.bind(this);
    this.calculateHours = this.calculateHours.bind(this);
    this.calculateTotalForDay = this.calculateTotalForDay.bind(this);
    this.displayHelp = this.displayHelp.bind(this);
    this.displayTable = this.displayTable.bind(this);
    this.printReport = this.printReport.bind(this);
  }

  calculateDifferenceInDefaultHours() {
    var startTime = moment(this.state.defaultStart, 'h:mm a')
    var endTime = moment(this.state.defaultEnd, 'h:mm a')

    var duration = moment.duration(endTime.diff(startTime))
    var hours = duration.asHours()

    var hoursRounded = Math.round(hours * 10) / 10;

    return hoursRounded;
  }

  calculateHours() {
    var totalHoursInMonth = 0

    this.state.days.map((day) => (
      totalHoursInMonth += day.total
    ))

    this.setState({ totalHours: totalHoursInMonth })
  }

  calculateTotalForDay(index) {
    let days = [...this.state.days];
    var startTime = days[index].start
    var endTime = days[index].end

    var startDate = moment(startTime, 'h:mm a')
    var endDate = moment(endTime, 'h:mm a')

    var duration = moment.duration(endDate.diff(startDate));
    var hours = duration.asHours();

    var hoursRounded = Math.round(hours * 20) / 20;


    days[index].total = hoursRounded
  }

  onChangeStart(value, index) {

    if (value == undefined || value == '' || value == null) {
      return
    }
    // create the copy of state array
    let days = [...this.state.days];
    days[index].start = value.format(this.state.format);

    //set new default start as moment object
    var newDefaultStart = moment(days[index].start, ["h:mm A"]);

    this.setState({ days: days, defaultStart: newDefaultStart }, () => { console.log("On Change Start", this.state) });

    this.calculateTotalForDay(index)
  }

  onChangeEnd(value, index) {
    
    if (value == undefined || value == '' || value == null) {
      return
    }
    // create the copy of state array
    let days = [...this.state.days];
    days[index].end = value.format(this.state.format);

    //set new default end in moment object
    var newDefaultEnd = moment(days[index].end, ["h:mm A"]);

    this.setState({ days: days, defaultEnd: newDefaultEnd }, () => { console.log("On Change End", this.state) });

    this.calculateTotalForDay(index)
  }

  addRow() {
    var day = {
      id: this.state.counter,
      start: this.state.defaultStart,
      end: this.state.defaultEnd,
      total: this.calculateDifferenceInDefaultHours()
    }

    this.setState(prevState => ({
      counter: this.state.counter + 1,
      days: [...prevState.days, day]
    }))
  }

  displayHelp() {
    if (!this.counterActive()) {
      return (
        <div>
          <h2 className='hint'>Click "Add Day" to get started!</h2>
          <img className='icon' src={icon} height="100px" />
        </div>
        )
    }
  }

  // Check if any days have been added
  counterActive() {
    if (this.state.counter != 0) {
      return true
    }
    return false
  }

  displayTable() {
    return (
      this.counterActive() ?
        <TableHours
          format={this.state.format}
          days={this.state.days}
          defaultStart={this.state.defaultStart}
          defaultEnd={this.state.defaultEnd}
          onChangeStart={this.onChangeStart}
          onChangeEnd={this.onChangeEnd} />
        :
        ''
    )
  }

  setupHeader(table) {
    var header = table.createTHead()

    var row = header.insertRow()
    var id = row.insertCell(0)
    var start = row.insertCell(1)
    var end = row.insertCell(2)
    var total = row.insertCell(3)
    id.innerHTML = 'Day #'
    start.innerHTML = "Start Time"
    end.innerHTML = "End Time"
    total.innerHTML = "Total Time Worked"  
  }

  setupTable() {
    var table = document.createElement('table')
    table.classList.add('tableToPrint')
    table.classList.add('print')

    var format = this.state.format

    this.setupHeader(table)

    this.state.days.map(function(key,map) {

      var newStart = moment(key.start, ["h:mm A"]);
      var newEnd = moment(key.end, ["h:mm A"]);

      console.log("key", key)
      console.log("key start", key.start)
      console.log("key end", key.end)
      var row = table.insertRow()
      var id = row.insertCell(0)
      var start = row.insertCell(1)
      var end = row.insertCell(2)
      var total = row.insertCell(3)
      id.innerHTML = key.id
      start.innerHTML = newStart.format(format);
      end.innerHTML = newEnd.format(format);
      total.innerHTML = key.total
    })


    // document.body.innerHTML =
    //   "<html><head><title></title></head><body>" + table.outerHTML + totalRowForPrint.outerHTML +
    //   "</body></html>"

    document.body.appendChild(table)

    return table
  }

  setupTotalRow() {
    var totalHoursWorked = this.state.totalHours

    var totalRowForPrint = document.createElement('div')
    totalRowForPrint.classList.add('totalRowForPrint')
    totalRowForPrint.classList.add('print')
    totalRowForPrint.innerHTML = 'Total Hours worked = ' + totalHoursWorked

    document.body.appendChild(totalRowForPrint)

    return totalRowForPrint
  }

  async printReport() {
    await this.calculateHours()
    var divElements = document.getElementById("myTable")
  
    var table = this.setupTable()
    var totalRowForPrint = this.setupTotalRow()
  
    window.print()

    document.body.removeChild(table)
    document.body.removeChild(totalRowForPrint)
  
  }

  render() {
    return (
      <div className="App no-print">
        <header className="App-header">
          {this.displayHelp()}
          <div className='tableDiv container-max'>
            {this.displayTable()}
          </div>
          <div className="white bottom-bar">
            <div className="container-max grid-bottom">
              <div className='float-left item1'>
                Total Hours Worked This Month: {this.state.totalHours}
              </div>
              <div className='buttons'>
                <Button variant="success" className='p-20 shadow-none' onClick={this.addRow}>Add Day</Button>
                <br/>
                <Button variant="success" className='p-20 shadow-none' onClick={this.calculateHours}>Calculate Hours</Button>
                <br/>
                {this.state.counter ? 
                <Button variant="success" className='p-20 shadow-none' onClick={this.printReport}>Print</Button> 
                : ''}

              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
