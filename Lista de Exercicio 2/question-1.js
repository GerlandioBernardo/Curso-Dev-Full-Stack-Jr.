// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano){
    if(ano < 0) return false;
   const data = new Date(ano, mes -1, dia);
   
   if(data.getFullYear() === ano && data.getMonth() === mes -1 && data.getDate() === dia){
        return true
   }
   return false;

}
console.log(ehDataValida(31, 1, 2024)); // true
console.log(ehDataValida(29, 2, 2024)); // true 
console.log(ehDataValida(29, 2, 2023)); // false 
console.log(ehDataValida(31, 4, 2024)); // false 
console.log(ehDataValida(30, 4, 2025)); // true 
console.log(ehDataValida(0, 5, 2023));  // false 
console.log(ehDataValida(15, 13, 2025));// false 
console.log(ehDataValida(1, 12, -1));   // false 
console.log(ehDataValida(32, 1, 2024)); // false

