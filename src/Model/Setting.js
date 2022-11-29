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
            "<input type='text' name='attendance' readonly style='width: 90%; background-color: gray' numberVal >"+
        "</td>" +
        "<td>" +
            "<input type='text' name='assignment' readonly style='width: 90%; background-color: gray' numberVal>"+
        "</td>" +
        "<td>" +
            "<input type='text' name='midScore' readonly style='width: 90%; background-color: gray' numberVal>"+
        "</td>" +
        "<td>" +
            "<input type='text' name='finalScore' readonly style='width: 90%; background-color: gray' numberVal>"+
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


export default SetTbody