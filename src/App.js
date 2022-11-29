import React from "react";
import $ from "jquery";
import "./Model/Setting.js"
import SetTbody from "./Model/Setting";
import styles from "./App.css"

class ScoreTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            schoolYear : '0',
            tableId : "",
            tableTbodyId : "",
            saveMask : 0,
            result : {},
        }
    }



    // 학년 + 테이블 아아디 + TbodyID
    static getDerivedStateFromProps(props, state){
        return {
            schoolYear : props.year,
            tableId:  "tableId"+props.year,
            tableTbodyId : "tableTbodyId" + props.year
        }
    }




    componentDidMount() {

        let scoreDict = {}
        scoreDict['attendance'] = 0
        scoreDict["assignment"] = 0
        scoreDict["midScore"] = 0
        scoreDict["finalScore"] = 0
        let total = 0;


        $(document).ready(function(event){
            $("input:text[numberVal]").on("keyup", function() {
                $(this).val($(this).val().replace(/[^0-9]/g,""));
            });

            //값이 100점이 넘으면 체크하기
            function sum() {
                total = scoreDict['attendance'] + scoreDict['assignment'] + scoreDict["midScore"] + scoreDict["finalScore"]
                //console.log(total)
                if(total > 100){
                    alert("100점을 초과했습니다.")
                    return true
                }
                return false;
            }

            //NAN값을 0으로 치환하기
            function nanCheck(key) {
                if (isNaN(scoreDict[key])) {
                    scoreDict[key] = 0
                }
            }


            function optionChange(studentScore, scoreList) {
                let $option1 = $("<option value='' name='null'></option>")
                let $option2 = $("<option value='P' name='P'>P</option>")
                let $option3 = $("<option value='NP' name='NP'>NP</option>")


                //전체 select 있는거 삭제하기
                studentScore.children().remove()

                //1학점 선택하면 PASS / NP 과목
                if (parseInt(this.value) === 1) {
                    studentScore.append($option2)
                    studentScore.append($option3)

                    for (let score of scoreList) {
                        score.val("")
                        score.attr("readonly", true)
                        score.css("background-color", "gray")
                    }

                } else {
                    studentScore.append($option1)

                    for (let score of scoreList) {
                        score.val("")
                        score.attr("readonly", false)
                        score.css("background-color", "")
                    }
                }
            }
            // todo 매우 줄이고싶지만.....테이블 아이디가 생명이기에 ...
            $('#tableId1 select[name=credit]').on("change", function (){
                let scoreList = Array()
                let studentScore = $('#tableId1 select[name=StudentScore]')
                let attendance = $('#tableId1 input[name=attendance]')
                let assignment = $('#tableId1 input[name=assignment]')
                let midScore = $('#tableId1 input[name=midScore]')
                let finalScore = $('#tableId1 input[name=finalScore]')
                //console.log(finalScore)

                scoreList.push(attendance, midScore, assignment, finalScore)

                optionChange.call(this, studentScore, scoreList);

            });

            $('#tableId2 select[name=credit]').on("change", function (){
                let scoreList = Array()

                let studentScore = $('#tableId2 select[name=StudentScore]')
                let attendance = $('#tableId2 input[name=attendance]')
                let assignment = $('#tableId2 input[name=assignment]')
                let midScore = $('#tableId2 input[name=midScore]')
                let finalScore = $('#tableId2 input[name=finalScore]')
                //console.log(finalScore)

                scoreList.push(attendance, midScore, assignment, finalScore)

                optionChange.call(this, studentScore, scoreList);

            });

            $('#tableId3 select[name=credit]').on("change", function (){
                let scoreList = Array()
                let studentScore = $('#tableId3 select[name=StudentScore]')
                let attendance = $('#tableId3 input[name=attendance]')
                let assignment = $('#tableId3 input[name=assignment]')
                let midScore = $('#tableId3 input[name=midScore]')
                let finalScore = $('#tableId3 input[name=finalScore]')
                //console.log(finalScore)

                scoreList.push(attendance, midScore, assignment, finalScore)

                optionChange.call(this, studentScore, scoreList);

            });


            $('input[name=attendance]').on("keyup", function (){
                scoreDict.attendance = parseInt($(this).val())
                nanCheck("attendance");
                if(sum()){
                    scoreDict.attendance = 0
                    $(this).val("")
                }
            });
            $('input[name=assignment]').on("keyup", function (){
                scoreDict.assignment = parseInt($(this).val())
                nanCheck("assignment");
                if(sum()){
                    scoreDict.assignment = 0
                    $(this).val("")
                }
            });
            $('input[name=midScore]').on("keyup", function (){
                scoreDict.midScore = parseInt($(this).val())
                nanCheck("midScore");
                if(sum()){
                    scoreDict.midScore = 0
                    $(this).val("")
                }
            });
            $('input[name=finalScore]').on("keyup", function (){
                scoreDict.finalScore = parseInt($(this).val())
                nanCheck("finalScore");
                if(sum()){
                    scoreDict.finalScore = 0
                    $(this).val("")
                }
            });
        });


    }

    setInsert = (tableId) => {
        //저장 버튼 Flag
        if(this.state.saveMask === 1){
            return alert("저장버튼을 클릭해주세요")
        }
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
        dict['esu'] = td[1].childNodes[0].value
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
            return
        }


        //테이블안에 그리기
        this.grid_table(dict, td)
        //console.log(td[11].innerText)
        if(sum < 60 || td[11].innerText === "NP"){
            td[11].parentNode.style.backgroundColor = "red"
        }
        let hakjum = this.getScore(sum)


        if(!td[11].innerText){
            td[9].innerText = sum
            td[11].innerHTML = hakjum
        }


        this.grid_tfoot(tbody)
        this.Sorting(tbody)
        this.componentDidMount()

        this.state.saveMask = 0

    }

    //삭제 메소드
    setDelete = (tableId) =>{

        if(this.state.saveMask === 1){
            alert("먼저 추가를 완료해 주세요")
            return;
        }
        let body= document.getElementById(tableId).getElementsByTagName("tbody")
        let tr = document.getElementById(tableId).getElementsByTagName("tbody")[0].getElementsByTagName("tr")

        //체크한거 카운트하기
        let count = 0
        for(let i =0; i<tr.length; i++){
            let mask = tr[i].getElementsByTagName("td")[0].lastChild.checked
            if(mask){
                count +=1
            }
        }

        let mask;
        //console.log(count)
        if(count === 0){
            return
        }else{
            mask = window.confirm(count+"건을 삭제하시겠습니까?")
        }

        //check한거 while을 통해 삭제
        if(mask){
            while (true){
                for(let i =0; i<tr.length; i++){
                    let mask = tr[i].getElementsByTagName("td")[0].lastChild.checked
                    if(mask){
                        tr[i].parentNode.removeChild(tr[i])
                        count -=1
                    }
                }
                if (count === 0){
                    break
                }
            }
            this.grid_tfoot(body)
            this.Sorting(body)
            this.componentDidMount()
        }
    }


    //정렬 방식은 값을 받으면 가장 맨뒤로 보내고 하나씩 비교해서 정렬하는 방법
    Sorting = (tbody) =>{
        let trs = tbody[0].getElementsByTagName("tr")
        //교양수
        let refinement = this.getSortCount(0,trs.length, trs, 1, "교양")
        this.mySorter(0,trs.length, trs, "교양", 1, refinement)


        //
        //전공 수
        let test = trs.length - refinement

        // //교양 선택 수
        let refinement_select
        refinement_select = this.getSortCount(0,refinement, trs, 2, "선택", );
        this.mySorter(0,refinement, trs, "선택", 2, refinement_select);
        //
        //젠체 교양에서 선택 추출
        // // //교양 선택/ 필수 정렬
        this.mySorterNoName(refinement_select,0, trs, 3)
        this.mySorterNoName(refinement,refinement_select , trs, 3)
        //
        //
        let  majorSelect = this.getSortCount(refinement,trs.length, trs, 2, "선택")

        this.mySorter(refinement, trs.length, trs, "선택", 2, (refinement+majorSelect))
        this.mySorterNoName((refinement + majorSelect), refinement, trs,3)
        this.mySorterNoName(trs.length, (refinement+majorSelect), trs,3)
    }

    // count 갯수, trs, name 교양/전공/선택/필수, index td 번호, appnedIndex, 어디로 옮긴건지
    mySorter(start,end, trs, name, index, appendIndex) {
        for (let i = start; i < end - 1; i++) {
            let fCell = trs[i].cells[index].innerText.toString() === name ? 0 : 1;
            let sCell = trs[i + 1].cells[index].innerText.toString() === name ? 0 : 1
            if (fCell > sCell) {
                trs[0].parentNode.insertBefore(trs[i + 1], trs[appendIndex-1]);
            }
        }
    }

    //교양/전공 정렬
    mySorterNoName(start, end, trs,index) {
        for (let i = start-1; i > end; i--) {
            let fCell = trs[i-1].cells[index].innerText
            let sCell = trs[i].cells[index].innerText
            if (fCell > sCell) {
                trs[0].parentNode.insertBefore(trs[i], trs[i-1]);
            }
        }
    }

    //갯수 카운트
    getSortCount(start, end, trs, index, name) {
        let result = 0
        for (let i = start; i < end; i++) {
            if (trs[i].getElementsByTagName("td")[index].innerText === name) result += 1
        }
        return result;
    }


    grid_tfoot = (tbody)=> {
        let count = 0

        let sumList = [4,5,6,7,8,9]
        let trs = tbody[0].getElementsByTagName("tr")
        let table = document.getElementById(this.state.tableId)
        let tfoot = table.getElementsByTagName("tfoot")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")




        //TR 갯수중에 P/NP 갯수 구하기 (이것은 총점에 반영되면 안된다.)
        for(let i =0; i<trs.length; i++){
            let td = trs[i].getElementsByTagName("td")
            let score =  td[11].innerText
            if(score.toUpperCase() === "NP" || score.toUpperCase() === "P"){
                count +=1
            }
        }


        let scoreList = [0,0]


        //학점/ 출석점수/ 과제점수 등 점수를 구하기 위한것을 배열처리
        for(let list of sumList){
            let sum = 0
            for(let i =0; i<trs.length; i++){
                let td = trs[i].getElementsByTagName("td")
                let score =  td[11].innerText
                if(score === "NP"){
                    continue
                }else{
                    if(score === "P"){
                        if(list === 4){
                            sum += parseInt(td[list].innerText.toString())
                        }
                    }else{
                        sum += parseInt(td[list].innerText.toString())
                    }
                }
            }
            scoreList.push(sum)
        }
        //총점 평균 점수

        let avg = (scoreList[scoreList.length-1]/(trs.length - count)).toFixed(2)
        scoreList.push(parseFloat(avg))

        //학점 (A+, B+, 등)
        scoreList.push(this.getScore(scoreList[scoreList.length -1]))


        if(trs.length === 0){
            for(let i = 2; i<tfoot.length;i++){
                tfoot[i].innerText = ""
            }
        }else{
            for(let i = 2; i<tfoot.length;i++){
                tfoot[i].innerText = scoreList[i].toString()

            }
        }

        if(isNaN(scoreList[8])){
            tfoot[8].innerText = ""
            tfoot[9].innerText = ""
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
            if(key === "StudentScore"){
                this.grid_row(td[11], dict[key])
                break
            }
            this.grid_row(td[index], dict[key])
            index += 1
        }
    }

    //row 값 채워넣기
    grid_row(id,score) {
        id.innerHTML = score.trim()
    }

    //입력 조건문
    flag = (dict, sum)=> {

        let flagMask = false

        if(dict['subjectName'].trim() === ""){
            alert("과목명이 비워있습니다.")
            return  true
        }


        if(sum > 100) {
            alert("출석 + 과제 + 중간 + 기말 점수가 100점 이상입니다")
            flagMask = true
        }
        if(parseInt(dict["credit"]) !== 1){
            if(isNaN(parseInt(dict['assignmentScore'])) || isNaN(parseInt(dict['attendanceScore']))
                     || isNaN(parseInt(dict['midScore'])) || isNaN(parseInt(dict['finalScore']))) {
                alert("출석 /과제 / 중간 / 기말 한곳이 빠져있습니다.")
                return true
            }
        }

        if(this.subjectNameFlag(dict['subjectName'])){
            alert("과목명이 중복됩니다.")
            flagMask = true
        }

        return flagMask

    }

    //과목이름 중복 체크
    //배열을 보내면 call-by-Reference
    subjectNameFlag = (subjectInput) =>{
        let one = document.getElementById("tableId1")
        let two = document.getElementById("tableId2")
        let three = document.getElementById("tableId3")

        let tableList = []
        let subjectNameList = []

        let result = false


        let oneTbody = one.getElementsByTagName("tbody")
        let twoTbody = two.getElementsByTagName("tbody")
        let threeTbody = three.getElementsByTagName("tbody")

        tableList.push(oneTbody, twoTbody, threeTbody)

        for (let table of tableList){
            if(this.state.tableId === table[0].parentNode.id){
                this.subjectName(table, subjectNameList, table[0].childNodes.length-1);
            }else{
                this.subjectName(table, subjectNameList, table[0].childNodes.length);
            }
        }

        for(let name of subjectNameList){
            if(name === subjectInput){
                result = true
            }
        }
        return result
    }


    //과복 중복 체크
    subjectName(table, subjectNameList, size) {
        for (let i = 0; i < size; i++) {
            let name
            let score = table[0].childNodes[i].childNodes[11].innerText
            if (score.toUpperCase() === "NP" || score.toUpperCase() === "F") {
                continue
            } else {
                name = table[0].childNodes[i].childNodes[3].innerText
            }
            name = table[0].childNodes[i].childNodes[3].innerText
            subjectNameList.push(name)
        }
    }

    render() {
        return (
            <div>
                <span style={{fontSize : "20px"}}>{this.state.schoolYear}학년</span>
                <input className="button_css" type="button" value="저장" onClick={() => this.setSave(this.state.tableId)}/>
                <input className="button_css" type="button" value="삭제" onClick={() => this.setDelete(this.state.tableId)}/>
                <input className="button_css" type="button" value="추가" onClick={() => this.setInsert(this.state.tableId)}/>
            <table border={1} width={"100%"} id={this.state.tableId} className="tablesorter">


                <thead>
                <tr className="basic_head" style={{background : "deepskyblue"}}>
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

                <tbody id={this.state.tableTbodyId}>
                </tbody>

                <tfoot>
                <tr className="bottom" style={{background : "#f2f2f2"}}>
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