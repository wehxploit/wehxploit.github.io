function getlic() {
    // Удаляем существующие элементы подписки
    $(".overtablebox2.actsub").remove();
    
    // Создаем фейковые данные о подписке для "бесконечной" подписки
    const fakeLicenses = [
        {
            role: "Premium Subscription",
            end_time: Math.floor(Date.now() / 1000) + 3153600000, // +100 лет (100 * 365 * 24 * 60 * 60 секунд)
            end: new Date(Date.now() + 3153600000000).toLocaleString(), // Форматируем дату окончания
            ended: 0, // Подписка не истекла
            act_time: Math.floor(Date.now() / 1000) // Время активации — текущее
        }
    ];

    // Обрабатываем фейковые данные
    $.each(fakeLicenses, function(e, t) {
        var endTime = new Date(1e3 * t.end_time).toLocaleString();
        var $elstyle = "";
        var $endstyle = "";
        
        // Пропускаем проверки окончания подписки
        if (t.end == null) {
            $elstyle = "display:none;";
        } else if (t.ended == 1) {
            $elstyle = "color:gray;";
            t.end = t.end + "<br>(ENDED)";
        } else {
            var s = new Date(t.end.replace(" ", "T"));
            var a = new Date();
            var daysLeft = Math.ceil((s - a) / 864e5); // Вычисляем дни до окончания
            var diffDo = t.end_time - t.act_time;
            if (diffDo < 259200) {
                t.role = t.role + " (TRIAL)";
            }
            if (daysLeft <= 3) {
                $endstyle = "color:red; animation: blink 1s step-start infinite, color-change 1s alternate infinite;";
                t.end = t.end + "<br>(renewal required)";
            }
        }

        // Добавляем подписку в DOM
        $(".subblock").append(`
            <div style="${$elstyle}" class="overtablebox2 actsub" style=" margin-bottom: 20px; ">
                <div class="tablebox2" style="width: 200px; height:150px; padding:5px 20px 40px 20px;">
                    <center>
                        <div class="subname"><b>${t.role}</b></div>
                        <div class="subdesc"><br>Subscription to our rat.</div>
                        <div class="subtime" >Subscription until <br> <br> <b style="${$endstyle}">${endTime}</b></div>
                    </center>
                </div>
            </div>
        `);
    });
}

function showactivate() {
    $(".tablebox2").css("max-width", "1100px");
    $("#activateblock").css("max-width", "1100px");
    $("#activateblock").animate({ width: "300px" }, 500);
    $("#svgkey").fadeOut();
    $("#keyblock").fadeIn();
}

function needemail() {
    // Эмулируем успешный ответ с фейковым email
    const fakeUserInfo = {
        mail: "example@email.com" // Устанавливаем фейковый email
    };
    window.userinfo = fakeUserInfo;
    const mail = fakeUserInfo.mail;
    if (mail == null || mail == "") {
        mail = "Not set";
        window.mailstatus = false;
        $(".backblur").show();
        $(".popup").show();
    }
}

function activatelicens() {
    const key = $("#subkey").val();
    // Эмулируем успешную активацию без AJAX
    const fakeResponse = {
        success: 1,
        result: "Subscription activated successfully"
    };
    if (fakeResponse.success == 0) {
        notification("red", "Error", fakeResponse.result);
    } else {
        notification("00000", "Fuck your self nigger", "NiggerRAT ACTIVATED!!!");
        getlic();
        needemail();
    }
}

getlic();
if ("2" == readCookie("bgmode")) {
    $("body").css("background", readCookie("bgcolor"));
}