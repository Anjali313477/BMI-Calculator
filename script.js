let btn = document.querySelector('.btn')
btn.addEventListener("click", (event) => {
    event.preventDefault();
    let weight = document.querySelector('#weight').value;
    let height = document.querySelector('#height').value;
     
    height = height / 100;
    let BMI = (weight / Math.pow(height, 2));
    document.querySelector('#result').value = BMI;

    if (height == "" || weight == "") {
        alert("All fields are manadetory to fill")
        return false
    }
    else if(BMI < 18) {
        document.querySelector("#classification").value = "Underweight"
    } else if (BMI>18 && BMI<=24){
        document.querySelector("#classification").value =" Normalweight"
    }else if(BMI>25 && BMI<=29){
        document.querySelector("#classification").value =" Overweight"
    }else if(BMI>30){
        document.querySelector("#classification").value = "Obese"
    }
})