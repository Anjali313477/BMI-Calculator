let btn = document.querySelector('.btn')
btn.addEventListener("click", (event) => {
    event.preventDefault();
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;

    if (height == "" && weight == "") {
        swal("All Fields are mandatory to fill!", "", "warning");
        return false
    }else if(height.toString().length>=4 || weight.toString().length>=4){
        swal("Please Enter appropriate value", "", "warning");
        return false
    }

    height = height / 100;
    let BMI = (weight / Math.pow(height, 2));
    document.querySelector('#result').innerHTML = `Your BMI = ${parseInt(BMI)}`;

    if (BMI < 18) {
        document.querySelector("#classification").innerHTML = "UNDERWEIGHT"
    } else if (BMI > 18 && BMI <= 24) {
        document.querySelector("#classification").innerHTML = " NORMALWEIGHT"
    } else if (BMI > 25 && BMI <= 29) {
        document.querySelector("#classification").innerHTML = " OVERWEIGHT"
    } else if (BMI > 30) {
        document.querySelector("#classification").innerHTML = "OBESE"
    }
})