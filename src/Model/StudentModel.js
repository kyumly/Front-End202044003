import React from "react";
import $ from "jquery";

let gv_json_data = [

]

class ListBox extends React.Component{
    getInitialState = () =>{
        return{
            data : []
        }
    }

    addARow = () =>{
        var tempStateData = this.state.data;
        tempStateData.push(
            {"gidx":<input type="text"/>, "home_name":"nc", "away_name":"hw","date":"2016-03-30"}
        );

        console.log(tempStateData);
        this.setState({data:tempStateData});
    }
    componentDidMount = function (){
        this.setState({data:gv_json_data});
    }

    render(){
        console.log("render");
        console.log(this.state);
        return(
            <div className="list_box">
                start
                <ButtonBox  addARow={() =>this.addARow } />
                <ScoreTable />
            </div>
        )
    }
}


class ButtonBox extends React.Component {

    handleClickButton = function (event){
        this.props.addARow();
    }
    render(){
        console.log("button box render");
        console.log(this.props);
        return(
            <div className="button_box">
                <button onClick={this.handleClickButton}>click me</button>
            </div>
        )
    }

}


class ScoreTable extends React.Component {
    render(){
        console.log(gv_json_data);
        var ar_rows = [];

        $.each(gv_json_data, function(key, value){
            ar_rows.push(<ScoreTableTr key={key} row={value} />);
        });

        return(
            <table>
                <tbody>
                {ar_rows}
                </tbody>
            </table>
        )
    }
}


class ScoreTableTr extends React.Component {

    render(){
        console.log(this.props.row);
        return (
            <tr className="score_table_tr">
                <td>{this.props.row['gidx']}</td>
                <td>{this.props.row['home_name']}</td>
                <td>{this.props.row['away_name']}</td>
                <td>{this.props.row['date']}</td>
            </tr>
        )
    }
}

export default ListBox;