//         function checkForSpam(message) {
//         let result;
//   // Change code below this line
//             //Спочатку приводимо до одного вигляду всі слова. Потім виконуємо перевірку на "sale".
//             // При перевірці "+" - це вивід значення true, "-" - виконання перевірки на "spam".
//             // При перевірці "+" - це вивід значення true, "-" - присвоення значення "false".
//         const messageToLowerCase = message.toLowerCase(message);
//         if (result = messageToLowerCase.includes("sale")) {
//         console.log(result)
//         } else {
//             if ( result = messageToLowerCase.includes("spam")) {
//                 console.log(result)
//             } else {
//                 result = false;
//                 console.log(result);
//             }
//         }
//     console.log(messageToLowerCase);
//   // Change code above this line
//   return result;
// }

checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!")
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");