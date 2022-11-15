import React from "react";
import $ from "jquery";
import styles from "../App.css";

class StudentScore extends React.Component{

    myChangeHandler = (event) => {
        let nam = event.target.name
        let age = event.target.value
        console.log(nam)
        console.log(age)
        if (nam === "score") {
            if (!Number(age)) {
                event.target.value = ""
                alert("숫자만 입력 나능합니다.")
                return false
            }
        }
    }

    render() {
        return(
            <tr>
                <td width={"10%"}><input type="checkbox" name = 'selectCK'/></td>
                <td width={"5%"}>
                    <select style={{width : '75%'}} name="esu">
                        <option value="전공" selected> 전공</option>
                        <option value="전공"> 교양</option>
                    </select>
                </td>
                <td width={"5%"}>
                    <select style={{width : '75%'}} name="essential">
                        <option value="필수" selected> 필수</option>
                        <option value="선택"> 선택</option>
                    </select>
                </td>

                <td style={{textAlign : "left", width : '30%'}}>
                    <input type={'text'} name="subjectName" style={{width : '95%'}} />
                </td>
                <td>
                    <input type={'text'} name="score" style={{width : '95%'}} onChange={this.myChangeHandler}/>
                </td>
                <td>
                    <input type={'text'} name="attendance" style={{width : '95%'}}/>
                </td>

                <td>
                    <input type={'text'} name="taskScore" style={{width : '95%'}}/>
                </td>
                <td>
                    <input type={'text'} name="midScore"style={{width : '95%'}}/>
                </td>
                <td>
                    <input type={'text'} name="finalScore"style={{width : '95%'}}/>
                </td>

                <td width={"5%"}>
                </td>
                <td width={"5%"}>
                </td>

                <td width={"5%"}>
                    <select name="StudentScore">
                        <option value={''}selected></option>
                        <option value={"P"}>P</option>
                        <option value={"NP"}>NP</option>
                    </select>
                </td>


            </tr>
        )
    }

}

export default StudentScore