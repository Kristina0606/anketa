const form = [
  prompt('Ваша фамилия:').trim(),
  prompt('Ваше имя:').trim(),
  prompt('Ваше отчество:').trim(),
  Number(prompt('Ваш возраст:').trim()),
  confirm('Ваш пол: если Мужской(ОК) \ если Женский(ОТМЕНА):') ];

if (form[4]) form[4] = 'мужской'; else form[4] = 'женский';
if ((form[3] >= 65 )) form.push('да'); else form.push('нет');

alert('ФИО: ' + form[0] + ' ' + form[1] + ' ' + form[2] + '\n' +
            'Ваш полный возраст в годах: ' + form[3] + '\n' +
            'Ваш полный возраст в днях: ' + (form[3] * 365) + '\n' +
            'Через 5 лет Вам будет: ' + (form[3] + 5) + '\n' +
            'Ваш пол: ' + form[4] + '\n' +
            'Вы на пенсии: ' + form[5]);