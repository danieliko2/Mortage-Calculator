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
}