module.exports.run = async(bot, message, args) => {
    const month = parseInt(args[0]);
    const day = parseInt(args[1]);

    if (!month) {
        return message.reply('Пожалуйста, введите правильные данные [Месяц] [Дата] - (Ваш ДР).');
    }

    if (month < 1 || month > 12) {
        return message.reply('Пожалуйста, введите действительный месяц [1-12].');
    }

    if (!day) {
        return message.reply('Пожалуйста, введите правильный день.');
    }

    if (month === 1) {
        if (day >= 1 && day <= 19) return message.reply('ваш зодиак Козерог');
        if (day >= 20 && day <= 31) return message.reply('ваш зодиак Водолей');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 2) {
        if (day >= 1 && day <= 18) return message.reply('ваш зодиак Водолей');
        if (day >= 19 && day <= 29) return message.reply('ваш зодиак Рыбы');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 3) {
        if (day >= 1 && day <= 20) return message.reply('ваш зодиак Рыбы');
        if (day >= 21 && day <= 31) return message.reply('ваш зодиак Овен');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 4) {
        if (day >= 1 && day <= 19) return message.reply('ваш зодиак Овен');
        if (day >= 20 && day <= 31) return message.reply('ваш зодиак Телец');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 5) {
        if (day >= 1 && day <= 20) return message.reply('ваш зодиак Телец');
        if (day >= 21 && day <= 31) return message.reply('ваш зодиак Близнецы');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 6) {
        if (day >= 1 && day <= 20) return message.reply('ваш зодиак Близнецы');
        if (day >= 21 && day <= 31) return message.reply('ваш зодиак Рак');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 7) {
        if (day >= 1 && day <= 22) return message.reply('ваш зодиак Рак');
        if (day >= 23 && day <= 31) return message.reply('ваш зодиак Лев');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 8) {
        if (day >= 1 && day <= 22) return message.reply('ваш зодиак Лев');
        if (day >= 23 && day <= 31) return message.reply('ваш зодиак Дева');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 9) {
        if (day >= 1 && day <= 22) return message.reply('ваш зодиак Дева');
        if (day >= 23 && day <= 31) return message.reply('ваш зодиак Весы');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 10) {
        if (day >= 1 && day <= 22) return message.reply('ваш зодиак Весы');
        if (day >= 23 && day <= 31) return message.reply('ваш зодиак Скорпион');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 11) {
        if (day >= 1 && day <= 21) return message.reply('ваш зодиак Скорпион');
        if (day >= 22 && day <= 31) return message.reply('ваш зодиак Стрелец');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else if (month === 12) {
        if (day >= 1 && day <= 21) return message.reply('ваш зодиак Стрелец');
        if (day >= 22 && day <= 31) return message.reply('ваш зодиак Козерог');
        return message.reply('Пожалуйста, введите правильную дату.');
    } else {
        return message.reply('Пожалуйста, введите правильную дату.');
    }


}
module.exports.help = {
	aliases: [],
    name: "zodiac",
    category: "info"
};
