const form = document.querySelector('form');

form.addEventListener('submit',function(e){
 e.preventDefault();

const height = parseInt(document.querySelector('#height').value);

const weight = parseInt(document.querySelector('#weight').value);

const result = document.querySelector('#results');
if(height === ''||height < 0||isNaN(height)){
  result.innerHTML = `please give a vaid height ${height}`;
}
else if(weight === ''||weight < 0||isNaN(weight)){
  result.innerHTML = `please give a vaid weight ${weight}`;
} else{
 const bmi =  (weight / ((height*height) / 10000)).toFixed(2)

result.innerHTML =`<span>result: ${bmi}</span>`
result.style.color = 'red';

}

});
