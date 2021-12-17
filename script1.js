$("#inputAmount1").on("input", function () { // Amount changed
    console.log("inpudchanged");
    amount = parseInt(document.getElementById('inputAmount1').value);
    percent = parseInt(document.getElementById('inputPercent1').value);
    total = amount + (amount * (percent / 100));
    document.getElementById('totalAmount1').innerHTML = "סכום כללי: " + total;
    sessionStorage.setItem('totalAmount1', JSON.stringify(total));
    let totalAmount = parseInt(sessionStorage.getItem('totalAmount1'));
    console.log("total amount is " + totalAmount);
});

function valuesTest(){ 
        console.log(sessionStorage.getItem("months"));
}

// let totalAmount = parseInt(sessionStorage.getItem('totalAmount1'));
// let months = [];
// let monthly=totalAmount/12;
// months.push(monthly);
// for(let i=1; i<6; i++){
//     monthly=monthly*1.1;
//     months.push(monthly)
// }

// sessionStorage.setItem("months", JSON.stringify(months));

// function updateTable(){
//     let maslulLength = $('.maslulim').length;
//     for(let i = 1; i <= maslulLength; i++) {
//         // console.log(`inputAmount${i}`);
//         // console.log(document.getElementById(`inputAmount${i}`).value);
//         months = [];
//         amount = parseInt(document.getElementById(`inputAmount${i}`).value);    
//         percent = parseInt(document.getElementById(`inputPercent${i}`).value);
//         total = amount + (amount * (percent / 100));
//         monthly=total/12;
//         months.push(monthly);
//         for(let i=1; i<6; i++){
//             monthly=monthly*1.1;
//             months.push(monthly)
//         }
//     }
//     myBarChart.reset();
//     console.log(months);
//     myBarChart.configBar.data.datasets[0].data = months;
//     myBarChart.update();
// }

let colors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)' ];
function updateTable(){
    let maslulLength = $('.maslulim').length;
    for(let i = 1; i <= maslulLength; i++) {
        let j=i;
        months = [];
        amount = parseInt(document.getElementById(`inputAmount${i}`).value);    
        percent = parseInt(document.getElementById(`inputPercent${i}`).value);
        total = amount + (amount * (percent / 100));
        monthly=total/12;
        months.push(monthly);
        for(let i=1; i<6; i++){
            monthly=monthly*1.1;
            months.push(monthly)
        }
        console.log(myBarChart);
        if (total>0){
            set = {
                fill: true,
                label: 'החזר חודשי',
                data: months,
                backgroundColor: colors[i%6],
                // borderColor: [
                //     'rgba(255, 99, 132, 1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(255, 206, 86, 1)',
                //     'rgba(75, 192, 192, 1)',
                //     'rgba(153, 102, 255, 1)',
                //     'rgba(255, 159, 64, 1)'
                // ],
                borderWidth: 1
            };
            myBarChart.config.data.datasets[i-1] = set;
            myBarChart.update();
        }
    }

}
function newFunc(){
    alert("newfunc");
}

function addMaslul(){
    var maslulNum = $('.maslulim').length +1;
    var div2=$(`<div class="maslulim" id="maslul${maslulNum}">
                    <label for="inputPercent" style="font-size: 15px; color:gray;">אחוז</label>
                    <input type="text" placeholder="אחוז" id="inputPercent${maslulNum}" data-type="number"/>
                    <label for="inputAmount" style="font-size: 15px; color:gray;">סכום</label>
                    <input type="text" placeholder="סכום" id="inputAmount${maslulNum}" data-type="number"/>
                    <label for="inputAmount" style="font-size: 15px; color:gray;"> תקופה בחודשים</label>
                    <input type="text" placeholder=" תקופה בחודשים" id="inputMonths${maslulNum}" data-type="number"/>
                    <label for="inputAmount" style="font-size: 15px; color:gray;">ריבית</label>
                    <input type="text" placeholder="ריבית" id="inputRibit${maslulNum}" data-type="number"/>
                    <br>
                    <a id="totalAmount${maslulNum}">סכום כללי: </a>
                    <a id="monthlyAmount${maslulNum}">סכום חודשי: </a>
                </div>`);
    console.log(`#maslul${maslulNum-1}`);
    var oldiv=$(`#maslul${maslulNum-1}`);
    $(oldiv).after(div2);
}

function addTamhil(){
    console.log("new tamhil clicked")
    var ul = document.getElementById("tamhilimNavbar");
    var liNum = $('ul#tamhilimNavbar li').length;
    
    console.log(liNum);

    document.getElementById("addTamhil").innerHTML=`תמהיל ${liNum}`;
    document.getElementById("addTamhil").setAttribute('id', `tamhil${liNum}NavItem`);
    document.getElementById(`tamhil${liNum}NavItem`).setAttribute('onClick', 'showTamhil(this.id)');

    var li = document.createElement("li");
    //li.appendChild(document.createTextNode("הוסף תמהיל"));
    li.innerHTML=`<a class="navbar1Li" id="addTamhil" onclick="addTamhil()" href="javascript:void(null);">הוסף תמהיל</a>`;
    ul.appendChild(li);

    var tamhilN = $('.tamhilimNavbar').length +1;
    console.log(tamhilN);
    var div2=$(`<a class="tamhilNavItem" id="tamhil${tamhilN}NavItem" onclick="showTamhil(this.id)" href="javascript:void(null);">tamhil${tamhilN}</a>`);
    console.log(div2);
    var oldiv=$(`#tamhil${tamhilN-1}`);
    $(oldiv).after(div2);
}
function showTamhil(tamhilId){
    console.log(tamhilId);
    var testDiv=$(`<div><a> This is a test </a> </div>`)
    var newTamhil=$(`
    <div class="tamhilim">
        <div class="tamhilContent">

            <div class="contentMedium"><!-- input section> -->
                <div class="maslulim" id="maslul1">
                    <label for="" id="maslulID1" style="font-size:  smaller;">מסלול 1</label>
                    <select id="maslulType1">
                        <option value="שפיצר"> שפיצר</option>
                        <option value="קרן שווה">קרן שווה</option>
                    </select>
                    <select id="maslulType1">
                        <option value="סוג ריבית">סוג ריבית</option>
                        <option value="type1">1</option>
                    </select>
                    <select id="grice"> 
                        <option value="גרייס">גרייס</option>
                        <option value="חלקי">חלקי</option>
                        <option value="מלא">מלא</option>
                    </select>
                    <br>
                    <label for="inputPercent" style="font-size: 15px; color: rgb(59, 58, 58);">אחוז</label>
                    <input type="text" placeholder="אחוז" class="maslulInputs" id="inputPercent1" size="10" data-type="number" title="אחוז"/>
                    <label for="inputAmount" style="font-size: 15px; color:rgb(59, 58, 58);;" >סכום</label>
                    <input type="text" placeholder="סכום" id="inputAmount1" size="10" data-type="number" title="סכום"/>
                    <label for="inputAmount" style="font-size: 15px; color:rgb(59, 58, 58);;" >תקופה בחודשים</label>
                    <input type="text" placeholder="תקופה" id="inputMonths1" size="10" data-type="number" title="תקופה בחודשים"/>
                    <label for="inputAmount" style="font-size: 15px; color:rgb(59, 58, 58);;">ריבית עוגן</label>
                    <input type="text" placeholder="ריבית עוגן" id="inputRibitOgen1" size="10" data-type="number" title="ריבית עוגן"/>
                    <label for="inputAmount" style="font-size: 15px; color:rgb(59, 58, 58);;">ריבית מרווח</label>
                    <input type="text" placeholder="ריבית מרווח" id="inputInterval1" size="10" data-type="number" title="ריבית מרווח"/>
                    <label for="inputAmount" style="font-size: 15px; color:rgb(59, 58, 58);;">ריבית סופית</label>
                    <input type="text" placeholder="ריבית סופית" id="inputRibitOgen1" size="10" data-type="number" title="ריבית סופית"/>

                    <br>
                    <a id="totalAmount1">סכום כללי: </a>
                    <a id="monthlyAmount1">סכום חודשי: </a>
                </div>
                <input type="button" value="הוסף מסלול" onclick="addMaslul()">
            </div>
            <div class="contentSmall">
                <button>כפתור 1</button>
                <button>כפתור 1</button>
                <button>כפתור 1</button>
                <button>כפתור 1</button>
            </div>

            <div class="contentMedium">
                <input type="button" value="עדכן ערכים" onclick="updateTable()">
                <input type="button" value="בדיקה" onclick="valuesTest()">
                <div class="tamhilGraphs">
                    <canvas id="myBarChart"></canvas>
                </div>
                <div class="tamhilGraphs">
                    <canvas id="myPieChart" height="200"></canvas>
                </div>
            </div>
            <div class="contentSmall">content4</div>

        </div>
    </div>
</div>`);
    var oldtamhil = $(`#tamhilim`)
    console.log(oldtamhil);
   $(oldtamhil).after(testDiv);
}