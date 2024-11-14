// let btn = document.querySelector('.btn')
// btn.addEventListener("click", (event) => {
//     event.preventDefault();
//     let weight = document.querySelector('#weight').value;
//     let height = document.querySelector('#height').value;

//     if (height == "" || weight == "") {
//         swal("All Fields are mandatory to fill!", "", "warning");
//         return false
//     }else if(height.toString().length>=4 || weight.toString().length>=4){
//         swal("Please Enter appropriate value", "", "warning");
//         return false
//     }

//     height = height / 100;
//     let BMI = (weight / Math.pow(height, 2));
//     BMI=parseInt(BMI);
//     document.querySelector('#result').innerHTML='BMI = '+BMI;

//     if (BMI < 18) {
//         document.querySelector("#classification").innerHTML = "UNDERWEIGHT"
//     } else if (BMI >=18 && BMI <= 24) {
//         document.querySelector("#classification").innerHTML = "NORMALWEIGHT"
//     } else if (BMI >=25 && BMI <= 29) {
//         document.querySelector("#classification").innerHTML = "OVERWEIGHT"
//     } else if (BMI >=30) {
//         document.querySelector("#classification").innerHTML = "OBESE"
//     }
// })




















//jQueary
$(document).ready(function () {
    $('.btn').click(function (event) {
        event.preventDefault();
        let Weight = $('#weight').val();
        let Height = $('#height').val();


        if (Height == "" || Weight == "") {
            swal("All Fields are mandatory to fill!", "", "warning");
            return false
        } else if (Height.toString().length >= 4 || Weight.toString().length >= 4) {
            swal("Please Enter appropriate value", "", "warning");
            return false
        }

        Height = Height / 100;
        let BMI = (Weight / Math.pow(Height, 2));
        BMI = parseInt(BMI);
        $('#result').text('BMI=' + BMI)

        if (BMI < 18) {
            $('#classification').text("UNDERWEIGHT")
        }
        else if (BMI >= 18 && BMI <= 24) {
            $('#classification').text("NORMALWEIGHT")
        }
        else if(BMI >=25 && BMI <= 29){
            $('#classification').text("OVERWEIGHT")  
        }
        else if (BMI >=30){
            $('#classification').text("OBESE")  
        }
    })
})