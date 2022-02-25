const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function eva_if(Language) {

  var data = ''
  if (Language == 'TR') { data = '*WhatsAstro Chatbot Olarak Çalışıyor!* 🦸‍♀️\n\n_Bu modun amacı botu tam fonksiyonel bir yapay zeka sohbet aracına çevirmektir._\n_Normal moda dönmek için_ *.fulleva off* _komutunu kullanabilirsiniz._\n\n*WhatsAstro Kullandığın İçin Teşekkürler 💌*\n    *- Eva*'
  } else if (Language == 'EN') { data = '*WhatsAstro Works as Chatbot!* 🦸‍♀️\n\n_The purpose of this mod is to turn the bot into a fully functional AI chat tool._\n_To return to normal mode_ *.fulleva off* _You can use this command._\n\n*Thanks For Using WhatsAstro 💌*\n    *- Eva*'
  } else if (Language == 'AZ') { data = '*WhatsAstro Chatbot olaraq işləyir!* 🦸‍♀️\n\n_Bu modun məqsədi botu tam işlək bir AI söhbət vasitəsinə çevirməkdir._\n_Normal rejimə qayıtmaq üçün_ *.fulleva off* _Bu əmrdən istifadə edə bilərsiniz._\n\n*WhatsAstro istifadə etdiyiniz üçün təşəkkürlər 💌*\n    *- Eva*'
  } else if (Language == 'ES') { data = '*WhatsAstro funciona como chatbot!* 🦸‍♀️\n\n_El propósito de este mod es convertir el bot en una herramienta de chat de IA completamente funcional._\n_Para volver al modo normal_ *.fulleva off* _Puedes usar este comando._\n\n*Gracias por usar WhatsAstro 💌*\n    *- Eva*'
  } else if (Language == 'PT') { data = '*WhatsAstro funciona como chatbot!* 🦸‍♀️\n\n_O objetivo deste mod é transformar o bot em uma ferramenta de chat de IA totalmente funcional._\n_Para voltar ao modo normal_ *.fulleva off* _Você pode usar este comando._\n\n*Obrigado por usar o WhatsAstro 💌*\n    *- Eva*'
  } else if (Language == 'RU') { data = '*WhatsAstro работает как чат-бот!* 🦸‍♀️\n\n_Цель этого мода - превратить бота в полнофункциональный инструмент чата с ИИ.._\n_Чтобы вернуться в нормальный режим_ *.fulleva off* _Вы можете использовать эту команду._\n\n*Спасибо за использование WhatsAstro 💌*\n    *- Eva*'
  } else if (Language == 'HI') { data = '*WhatsAstro चैटबोट के रूप में काम करता है!* 🦸‍♀️\n\n_इस मॉड का उद्देश्य बॉट को पूरी तरह कार्यात्मक AI चैट टूल में बदलना है._\n_सामान्य मोड पर लौटने के लिए_ *.fulleva off* _आप इस आदेश का उपयोग कर सकते हैं._\n\n*WhatsAstro का उपयोग करने के लिए धन्यवाद 💌*\n    *- Eva*'
  } else if (Language == 'ML') { data = '*WhatsAstro ചാറ്റ്ബോട്ടായി പ്രവർത്തിക്കുന്നു!* 🦸‍♀️\n\n_ബോട്ട് പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായ AI ചാറ്റ് ഉപകരണമാക്കി മാറ്റുക എന്നതാണ് ഈ മോഡിന്റെ ലക്ഷ്യം._\n_സാധാരണ മോഡിലേക്ക് മടങ്ങാൻ_ *.fulleva off* _നിങ്ങൾക്ക് ഈ കമാൻഡ് ഉപയോഗിക്കാം._\n\n*WhatsAstro ഉപയോഗിച്ചതിന് നന്ദി 💌*\n    *- Eva*'
  } else if (Language == 'ID') { data = '*WhatsAstro Bekerja sebagai Chatbot!* 🦸‍♀️\n\n_Tujuan dari mod ini adalah untuk mengubah bot menjadi alat obrolan AI yang berfungsi penuh._\n_Untuk kembali ke mode normal_ *.fulleva off* _Anda dapat menggunakan perintah ini._\n\n*Terima Kasih Telah Menggunakan WhatsAstro 💌*\n    *- Eva*'
  }
  return data;
}
module.exports = eva_if
