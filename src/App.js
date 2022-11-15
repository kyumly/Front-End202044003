import ReactDOM from 'react-dom';
import React from "react";
import styles from './App.css'
import $ from "jquery";
import "./Model/Setting.js"
import SetTbody from "./Model/Setting";
import StudentScore from "./Model/StudentScore";
import * as events from "events";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";
import {tab} from "@testing-library/user-event/dist/tab";



class ScoreTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            schoolYear : '0',
            tableId : 'not',
            saveMask : 0,
            result : {}
        }
    }



    static getDerivedStateFromProps(props, state){
        return {
            schoolYear : props.year,
            tableId:  "tableId"+props.year
        }
    }




    componentDidMount() {
        let tableId = this.state.tableId
        let table = document.getElementById(tableId)
        $(document).ready(function(){

            $("input:text[numberOnly]").on("keyup", function() {
                $(this).val($(this).val().replace(/[^0-9]/g,""));
            });

        });



    }

    setInsert = (tableId) => {
        // if(this.state.saveMask === 1){
        //     return alert("저장버튼을 클릭해주세요")
        // }

        let table = document.getElementById(tableId)
        let tbody = table.childNodes[1]
        $(tbody).append(SetTbody)
        this.state.saveMask = 1
        this.componentDidMount()
    }

    setSave = () =>{
        let dict = {}

        if(this.state.saveMask === 0){
            alert("추가버튼을 먼저 클릭해 주세요")
            return
        }
        //테이블 아이디 가져오기
        let table = document.getElementById(this.state.tableId)
        let tbody = table.getElementsByTagName("tbody")
        let tr = tbody[tbody.length -1].getElementsByTagName("tr")
        let td = tr[tr.length -1].getElementsByTagName("td")


        //딕셔너리 형태로 값 넣기
        dict['esu'] = td[1].lastChild.value
        dict['essential'] = td[2].lastChild.value
        dict['subjectName'] = td[3].lastChild.value
        dict['credit'] = td[4].lastChild.value
        dict['attendanceScore'] = td[5].lastChild.value
        dict['assignmentScore'] = td[6].lastChild.value
        dict['midScore'] = td[7].lastChild.value
        dict['finalScore'] = td[8].lastChild.value
        dict['StudentScore'] = td[11].lastChild.value


        let sum = parseInt(dict['midScore']) + parseInt(dict['assignmentScore']) + parseInt(dict['attendanceScore']) + parseInt(dict['finalScore'])

        //조건
        if(this.flag(dict, sum)){
            console.log("test")
            return
        }


        //테이블안에 그리기
        this.grid_table(dict, td)

        if(sum <= 60 || td[11].lastChild.value === "NP"){
            td[11].parentNode.style.backgroundColor = "red"
        }
        let hakjum = this.getScore(sum)
        td[9].innerText = sum
        td[11].innerHTML = hakjum


        this.grid_tfoot(tbody)
        this.componentDidMount()

    }

    //
    grid_tfoot = (tbody)=> {
        let sumList = [4,5,6,7,8,9]
        let trs = tbody[0].getElementsByTagName("tr")
        let table = document.getElementById(this.state.tableId)
        let tfoot = table.getElementsByTagName("tfoot")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")



        let scoreList = [0,0]
        for(let list of sumList){
            let sum = 0
            for(let i =0; i<trs.length; i++){
                let td = trs[i].getElementsByTagName("td")
                // if(i === trs.length -1){
                //     console.log(td[sumList[list]].lastChild.value.toString())
                //     sum += parseInt(td[sumList[list]].lastChild.value.toString())
                //     continue
                // }
                sum += parseInt(td[list].innerText.toString())
                //console.log(td[list].innerText)

            }
            scoreList.push(sum)
        }
        scoreList.push(scoreList[scoreList.length-1]/trs.length)
        scoreList.push(this.getScore(scoreList[scoreList.length -1]))
        console.log(tfoot)

        for(let i = 2; i<tfoot.length;i++){
            tfoot[i].innerText = scoreList[i].toString()
        }
    }

    //학점 반환하기
    getScore = (score) =>{
        score = parseFloat(score);
        let objResult;
        if (score >= 95){
            objResult = "A+";
        }else if(score <95 && score >= 90){
            objResult = "A0";
        }else if(score < 90 && score >= 85){
            objResult = "B+";
        }
        else if(score < 85 && score >= 80){
            objResult = "B0";
        }
        else if(score < 80 && score >= 75){
            objResult = "C+";
        }
        else if(score < 75 && score >= 70){
            objResult = "C0";
        }
        else if(score < 70 && score >= 65){
            objResult = "D+";
        }
        else if(score < 65 && score >= 60){
            objResult = "D0";
        }
        else{
            objResult = "F";
        }
        return objResult;
    }

    //테이블안에 그리는 메소드
    grid_table(dict, td) {
        let index = 1
        for (let key in dict) {
            this.grid_row(td[index], dict[key])
            index += 1
        }
    }

    //row 값 채워넣기
    grid_row(id,score) {
        id.innerHTML = score
    }

    //입력 조건문
    flag = (dict, sum)=> {

        let flagMask = false

        console.log(sum)
        if(dict['subjectName'] === ""){
            flagMask = true
        }
        if(sum > 100) {
            alert("출석 + 과제 + 중간 + 기말 점수가 100점 이상입니다")
            flagMask = true
        }

        //점수가 없다면
        if(isNaN(parseInt(dict['assignmentScore'])) && isNaN(parseInt(dict['attendanceScore']))
            && isNaN(parseInt(dict['midScore'])) && isNaN(parseInt(dict['finalScore']))){

            if(dict['StudentScore'].toString().toUpperCase() === "P" || dict['StudentScore'].toString().toUpperCase() === "NP"){
                flagMask = false;
            }else{
                alert("성적란에는 P, NP만 입력이 가능합니다.")
                flagMask = true;
            }
        }//점수가 있다면
        else if(dict['StudentScore'].toString().toUpperCase() !== "") {
            alert("성적란에는 P, NP만 입력하고 출석, 과제, 중간, 기말 점수아 비어 있어야 합니다.")
            flagMask = true;
        }



        return flagMask

    }

    subjectNameFlag = () =>{
        let one = document.getElementById("tableId1")
        let two = document.getElementById("tableId2")
        let three = document.getElementById("tableId3")

        let subjectNameList = []



        let tbody = one.getElementsByTagName("tbody")
         console.log(tbody[0].childNodes.length)
    }





    render() {
        const button_css = {
            float: "right",
            marginLeft : "10px",
            background : "gray",
            fontSize: "18px",
            marginBottom: "10px",
            color: "white"
        }


        return (


            <div>
                <span style={{fontSize : "20px"}}>{this.state.schoolYear}학년</span>
                <input style={button_css} type="button" value="저장" onClick={() => this.setSave(this.state.tableId)}/>
                <input style={button_css} type="button" value="삭제" onClick={() => this.setDelete(this.state.tableId)}/>
                <input style={button_css} type="button" value="추가" onClick={() => this.setInsert(this.state.tableId)}/>
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