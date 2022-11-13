import ReactDOM from 'react-dom';
import React from "react";
import styles from './App.css'


class StudentScore extends React.Component{
    render() {
        return(
            <tr>
                <td width={"10%"}>
                    <input type={"checkbox"}/></td>
                <td width={"5%"}>
                    <select style={{width : '75'}}>
                        <option value="전공" selected> 전공</option>
                        <option value="전공"> 교양</option>
                    </select>
                </td>
                <td width={"5%"}>
                    <select style={{width : '75'}}>
                        <option value="필수" selected> 필수</option>
                        <option value="선택"> 선택</option>
                    </select>
                </td>
                <td style={{textAlign : "left", width : '30%'}}>
                    <input type={'text'} style={{width : '95%'}}/>
                </td>
                <td>
                    <input type={'text'} style={{width : '95%'}}/>
                </td>
                <td>
                    <input type={'text'} style={{width : '95%'}}/>
                </td>

                <td>
                    <input type={'text'} style={{width : '95%'}}/>
                </td><td>
                <input type={'text'} style={{width : '95%'}}/>
            </td>
                <td>
                    <input type={'text'} style={{width : '95%'}}/>
                </td>
                <td width={"5%"}>
                </td>
                <td width={"5%"}>
                </td>

                <td width={"5%"}>
                    <select>
                        <option value={''}selected></option>
                        <option value={"P"}>P</option>
                        <option value={"NP"}>NP</option>
                    </select>
                </td>
            </tr>
        )
    }

}


class ScoreTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            schoolYear : '0',
            tableId : 'not'
        }
    }



    static getDerivedStateFromProps(props, state){
        return {
            schoolYear : props.year,
            tableId:  "tableId"+props.year
        }
    }


    setSave = () =>{
        // let save_mask;
        //
        // if(parseInt(save_mask) == 0){
        //     alert("추가버튼을 먼저 클릭해 주세요")
        //     alert()
        // }
    }

    setDelete = function (){

    }

    setInsert = (tableId) => {
        let table = document.getElementById(tableId)
        //const newRow = table.insertRow();
        let tbody = table.childNodes[1]
        let react_tbody = React.createElement("tbody", tbody)
        console.log(react_tbody.c)
    }


    render() {
        // const button_css = {
        //     float: "right",
        //     marginLeft : "10px",
        //     background : "gray",
        //     fontSize: "18px",
        //     marginBottom: "10px",
        //     color: "white"
        // }


        return (


            <div>
                <span style={{fontSize : "20px"}}>{this.state.schoolYear}학년</span>
                <input className={'styles.button_css'} type="button" value="저장" onClick={() => this.setSave(this.state.tableId)}/>
                <input className={'styles.button_css'} type="button" value="삭제" onClick={() => this.setDelete(this.state.tableId)}/>
                <input className={'styles.button_css'} type="button" value="추가" onClick={() => this.setInsert(this.state.tableId)}/>
            <table border={1} width={"100%"} id={this.state.tableId}>


                <thead>
                <tr className={styles.basic}>
                    <td>선택</td>
                    <td>이수</td>
                    <td>필수</td>
                    <td>과목명</td>
                    <td>학점</td>
                    <td>출석점수</td>
                    <td>과제점수</td>
                    <td>중간고사</td>
                    <td>기말고사</td>
                    <td>총점</td>
                    <td>평균</td>
                    <td>성적</td>
                </tr>
                </thead>

                <tbody>
                </tbody>

                <tfoot>
                <tr className={styles.bottom}>
                    <td></td>
                    <td colSpan="3">합 계</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tfoot>
            </table>
            </div>
        )
    }
}

export default ScoreTable;