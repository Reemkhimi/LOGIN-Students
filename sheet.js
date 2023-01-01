   // Username Test
   function chkusername() {
    //للحصول على قيمة اسم المستخدم
    var username = document.getElementById("username").value;
    if (!/^[A-Z]+[a-z]+_+[0-9]+$/.test(username))//التحقق من الشرط المطلوب
     {
        alert("اسم المستخدم غير صحيح. يجب ان يكون أول محرف كبير وبعده احرف صغيرة وارقام يفصلها علامة _  "); //اظهار رسالة خطأ في حال تم الادخال بشكل غير صحيح
        return false;
    } else
        return true;
}



// Student name test
function chkname() {
    var myName = document.getElementById("studentname").value;//للحصول على قيمة اسم الطالب
    if (!/^[ا-ي ]+$/.test(myName))
     {
        alert("اسم الطالب غير صحيح. يجب ان يكون باللغة العربية ويمكن أن يتضمن فراغات فقط.");//اظهار رسالة خطأ في حال كان الادخال غير صحصح
        return false;
    } else
        return true;
}


// date test
function chkcaddDate() {
    var date = document.getElementById('date').value;//للحصول على صيغة التاريخ
   var dateFormat= /\d{4}\/\d{2}\/\{2}$/;//استخدام نمط التاريخ الذي يحدد الصيغة المعطاة 
    if(date.Math(dateFormat)){
        alert("ادخال التاريخ بصيغة mm/dd/yyyy"); 
        return false;
     }else
     return true;
    }
    


    //Mobile phone test
    function chk_addNumber(){
        var the_number=document.querySelector('#mobile').value;// للحصول على رقم الموبايل 
        if(the_number.length != ""){
        if(the_number.substring(0,4) == "+963"){//شرط لكي يتم حصر النداء الوطني باربع ارقام النداء الوطني واشارة +
        if(the_number.length == 13){//شرط لعدم تجاوز رقم الموبايل 13 رقم مع النداء الوطني واشارة +
        if(the_number.substring(4,5) == "9"){//الرقم بعد النداء يحوي 9 ارقام
      
    }else{
        alert("الموبايل المدخل غير متوافق مع شبكتي سرياتيل وام تي ان");
        }
        }else{
        alert("يجب ان يكون الموبايل مؤلف من 7 ارقام فقط بعد النداء الدولي");
                     
        }
        }else{
        alert("+يجب ان يبدأالموبايل ب 963");
         
        }
        }else{
        alert(' يجب ادخال رقم الموبايل');
        }
        
        }


//captcha test
//ادخال حروف التحقق كابتشا للتأكد من ان المستخدم ليس روبوت الي
function captcha() {
    var captcha, chars;
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";//صفة احرف الانكليزي  احرف صغيرة وكبيرة للتفريق بينه
    captcha = chars[Math.floor(Math.random() * chars.length)];
    for (var i = 0; i < 6; i++) {// اسناد قيمة الكود الى العنصر كابتش للتأكد من صحته
        captcha = captcha + chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("captcha").value = captcha;
    let
        fromlable = document.getElementsByTagName("label"),
        forminput = document.getElementsByTagName("input");
}
captcha();
emplyees = [];
class employee { // المعلومات السابقة لجدول الطلاب
    constructor(numer_no, username, name, prog, cddate, phone) {
        this.numer_no = numer_no;
        this.username = username;
        this.name = name;
        this.prog = prog;
        this.cddate = cddate;
        this.phone = phone;
    }
    getinfo() {
        return this.username;
    }
}

    var e1 = new employee('1', 'aya_161004','آية مهايني', 'BAIT');
    var e2 = new employee('2', 'reem_209392','ريم خيمي', 'ITC');
    var e3 = new employee('3', 'anas_159967', 'انس فياض', 'BIT');
    

    emplyees.push(e1);
    emplyees.push(e2);
    emplyees.push(e3);
    

// التحقق من االضغط على زر معين في حال الضغط القيام بالغرض المخصص له 

    if (document.getElementById('username_radio').checked) { planeChoice(11); }
    if (document.getElementById('name_radio').checked) { planeChoice(22); }
    if (document.getElementById('prog_radio').checked) { planeChoice(33); }


    function addemp() {
        chkusername();
        chkname();
        chkcddate();
        chkphone();
        checkdate();

        if (document.getElementById("username").value != "") {  //في حال وجود قيمة لاسم المستخدم ، اكمال التأكد من المدخلات التالية
            //اسناد قيمةvalue كل مربع ادخال الى التابع المخصص له
            if (document.getElementById("captcha").value = document.getElementById("CaptchaEnter").value) {
                var numer_no = emplyees.length + 1;
                var username = document.getElementById("username").value;
                var name = document.getElementById("name").value;
                var cddate = document.getElementById("cddate").value;
                var prog = document.getElementById("prog").value;
                var phone = document.getElementById("phone").value;
                var e = new employee(numer_no, username, name, prog, cddate, phone);
                emplyees.push(e);

                // نضع الفرز هنا
                if (document.getElementById('username_radio').checked) { planeChoice(11); }
                if (document.getElementById('name_radio').checked) { planeChoice(22); }
                if (document.getElementById('prog_radio').checked) { planeChoice(33); }
                document.getElementById("myForm").reset();
            }
            else {
                alert('رمز رمز التحقق (كابتشا ) غير مطابق ');

            }

        }
        else {
            alert('لم يتم ادخال اسم المستخدم');

        }
        captcha();

    }

    function planeChoice(plane) { //التحقق من value القيم الموجودة بالجدول والقيام بالفرز حسب الشكل المطلوب
        switch (plane) {
            case 11:
                emplyees.sort(function (e1, e2) {
                    if (e1.username < e2.username) return -1;
                    if (e1.username > e2.username) return 1;
                    return 0;
                });
                break;
            case 22:
                emplyees.sort(function (e1, e2) {
                    if (e1.name < e2.name) return -1;
                    if (e1.name > e2.name) return 1;
                    return 0;
                });
                break;
            case 33:
                emplyees.sort(function (e1, e2) {
                    if (e1.prog < e2.prog) return -1;
                    if (e1.prog > e2.prog) return 1;
                    return 0;
                });
                break;



        }
        var s = "<table border = 1> <tr><th>متسلسل</th><th> اسم المستخدم </th><th> اسم الطالب </th><th>  البرنامج </th></tr>";

        emplyees.forEach((e) =>
            s += "<tr>" +
            "<td>" + e.numer_no + "</td><td>" + e.username + "</td><td>" + e.name + "</td><td>" + e.prog + "</td>"
            + "</tr>");
        s += "</table>";
        document.getElementById("table_table").innerHTML = s;
    }




    function bubbleSort() { //التصريح عن المتحولات
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("select");
        filter = input.value.toUpperCase();
        table = document.getElementById("table_table");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }

    }


    function convertToTable() { //نقل البيانات المدخلة الى الجدول في الاسفل مع تحديد اسطر واعمدة الجدول
        var table = document.getElementById("table_table");
        var header = [];
        var rows = [];

        for (var i = 0; i < table.rows[0].cells.length; i++) {
            header.push(table.rows[0].cells[i].innerHTML);

        }

        for (var i = 1; i < table.rows.length; i++) {
            var row = {};
            for (var j = 0; j < table.rows[i].cells.length; j++) { // تصدير ملف json واسناد قيمته
                row[header[j]] = table.rows[i].cells[j].innerHTML;
            }
            rows.push(row);
        }
        document.getElementById("Converttextarea").value = JSON.stringify(rows);



    }