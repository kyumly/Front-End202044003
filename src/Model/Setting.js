// const SetTbody ="<tr><td><input type='text' numberOnly/></td></tr>"

const SetTbody ="<tr class='basic'>" +
        "<td width='3%'><input type='checkbox' name='selectCK'/></td>" +
        "<td width='6%'>" +
        "<select style='width: 80%' name='esu'>" +
            "<option value='전공' selected>전공</option>"+
            "<option value='교양'>교양</option> "+
        "</select>" +
        "<td width='6%'>" +
        "<select style='width: 100%' name='essential'>" +
            "<option value='필수' selected>필수</option>"+
            "<option value='선택'>선택</option> "+
            "</select>" +
        "</td>" +
        "<td style='text-align: left'; width='30%'>" +
            "<input type='text' name='subjectName' style='width: 95%'>"+
        "</td>" +
        "<td width='5%'>" +
            "<select name='credit' style='width: 95%'>"+
                "<option value='1' selected>1</option>" +
                "<option value='2'>2</option>" +
                "<option value='3'>3</option>" +
            "</select>" +
        "</td>" +
        "<td>" +
            "<input type='text' name='attendance' readonly style='width: 95%' numberOnly>"+
        "</td>" +
        "<td>" +
            "<input type='text' name='assignment' readonly style='width: 95%' numberOnly>"+
        "</td>" +
        "<td>" +
            "<input type='text' name='midScore' readonly style='width: 95%' numberOnly>"+
        "</td>" +
        "<td>" +
            "<input type='text' name='finalScore' readonly style='width: 95%' numberOnly>"+
        "</td>" +
        "<td width='5%'></td>" +
        "<td width='5%'></td>" +
        "<td width='5%'>" +
            "<select name='StudentScore'>" +
                "<option value='P' name='P'>P</option>"+
                "<option value='NP' name='NP'>NP</option>"+
            "</select>" +
        "</td>" +
    "</tr>"

// const SetTbody ="            <tr>\n" +
//     "                <td width={\"10%\"}><input type=\"checkbox\" name = 'selectCK'/></td>\n" +
//     "                <td width={\"5%\"}>\n" +
//     "                    <select style={{width : '75%'}} name=\"esu\">\n" +
//     "                        <option value=\"전공\" selected> 전공</option>\n" +
//     "                        <option value=\"전공\"> 교양</option>\n" +
//     "                    </select>\n" +
//     "                </td>\n" +
//     "\n" +
//     "                <td width={\"5%\"}>\n" +
//     "                    <select style={{width : '75%'}} name=\"essential\">\n" +
//     "                        <option value=\"필수\" selected> 필수</option>\n" +
//     "                        <option value=\"선택\"> 선택</option>\n" +
//     "                    </select>\n" +
//     "                </td>\n" +
//     "\n" +
//     "                <td style={{textAlign : \"left\", width : '30%'}}>\n" +
//     "                    <input type={'text'} name=\"subjectName\" style={{width : '95%'}} />\n" +
//     "                </td>\n" +
//     "                <td>\n" +
//     "                    <input type={'text'} name=\"score\" style={{width : '95%'}} numberOnly/>\n" +
//     "                </td>\n" +
//     "                <td>\n" +
//     "                    <input type={'text'} name=\"attendance\" style={{width : '95%'}} numberOnly/>\n" +
//     "                </td>\n" +
//     "\n" +
//     "                <td>\n" +
//     "                    <input type={'text'} name=\"taskScore\" style={{width : '95%'}} numberOnly/>\n" +
//     "                </td>\n" +
//     "                <td>\n" +
//     "                    <input type={'text'} name=\"midScore\"style={{width : '95%'}}/>\n" +
//     "                </td>\n" +
//     "                <td>\n" +
//     "                    <input type={'text'} name=\"finalScore\"style={{width : '95%'}}/>\n" +
//     "                </td>\n" +
//     "\n" +
//     "                <td width={\"5%\"}>\n" +
//     "                </td>\n" +
//     "                <td width={\"5%\"}>\n" +
//     "                </td>\n" +
//     "\n" +
//     "                <td width={\"5%\"}>\n" +
//     "                    <select name=\"StudentScore\">\n" +
//     "                        <option value={''}selected></option>\n" +
//     "                        <option value={\"P\"}>P</option>\n" +
//     "                        <option value={\"NP\"}>NP</option>\n" +
//     "                    </select>\n" +
//     "                </td>\n" +
//     "\n" +
//     "\n" +
//     "            </tr>"


export default SetTbody