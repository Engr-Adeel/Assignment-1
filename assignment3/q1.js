function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Mirza Muhammad Adeel Ahmad"));
