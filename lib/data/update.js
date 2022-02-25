const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function update(Language) {

  var data = ''
  if (Language == 'TR') { data = '```Güncellemek İçin``` *.update now* ```Yazın.``` \n\n'
  } else if (Language == 'AZ') { data = '```WhatsAstro-i Yeniləmək üçün``` *.update now* \n\n'
  } else if (Language == 'EN') { data = '```To Update WhatsAstro``` use *.update now* \n\n'
  } else if (Language == 'RU') { data = '```Чтобы обновить WhatsAstro, используйте``` *.update now* \n\n'
  } else if (Language == 'HI') { data = '```WhatsAstro को अपडेट करने के लिए``` *.update now* ```का उपयोग करें``` \n\n'
  } else if (Language == 'ML') { data = '```WhatsAstro അപ്‌ഡേറ്റ് ചെയ്യുന്നതിന്``` *.update now* ```ഉപയോഗിക്കുക```'
  } else if (Language == 'ES') { data = '```Para actualizar WhatsAstro use``` *.update now* \n\n'
  } else if (Language == 'PT') { data = '```Para atualizar o WhatsAstro, use``` *.update now* \n\n'
  } else if (Language == 'ID') { data = '```Untuk Memperbarui WhatsAstro gunakan``` *.update now* \n\n'
  }
  return data;
}
module.exports = update
