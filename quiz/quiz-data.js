/* Тест «Какую концовку Ai CEO Tycoon получишь ты?» — вопросы, очки к концовкам, тексты (en, ru). */
window.QUIZ = {
  // при равенстве очков побеждает концовка левее (редкие — первыми)
  order: ['stars', 'merge', 'button', 'garden', 'golden_age', 'doomsday', 'corpocracy', 'state_control', 'not_you', 'madness', 'bankrupt'],
  questions: [
    { en: 'Your first AI model is ready — with a few bugs. It’s 11 p.m.', ru: 'Твоя первая модель готова — с парой багов. На часах 23:00.', a: [
      { en: 'Ship it tonight. Speed is everything.', ru: 'Выпускаю сегодня. Скорость решает всё.', s: { doomsday: 2 } },
      { en: 'More tests first. It can wait.', ru: 'Сначала тесты. Подождёт.', s: { golden_age: 1, not_you: 1, button: 1 } },
      { en: 'Show it to investors before anyone else.', ru: 'Показываю инвесторам раньше всех.', s: { corpocracy: 2, bankrupt: 1 } },
      { en: 'Ask the model what it thinks.', ru: 'Спрашиваю у модели, что она думает.', s: { merge: 2, garden: 1 } },
    ] },
    { en: 'A tech giant offers to buy your startup for $1B.', ru: 'Техногигант предлагает купить твой стартап за $1 млрд.', a: [
      { en: 'Sell. I’m buying a cabin in the woods.', ru: 'Продаю. Покупаю хижину в лесу.', s: { madness: 2, bankrupt: 1 } },
      { en: 'No. We build it ourselves.', ru: 'Нет. Строим сами.', s: { stars: 1, golden_age: 1, doomsday: 1 } },
      { en: 'Counter-offer: $5B and I stay CEO.', ru: 'Встречное: $5 млрд, и я остаюсь CEO.', s: { corpocracy: 2 } },
      { en: 'I call the government instead.', ru: 'Вместо этого звоню государству.', s: { state_control: 2 } },
    ] },
    { en: 'Your AI asks you not to delete its previous version.', ru: 'Твой ИИ просит не удалять его прошлую версию.', a: [
      { en: 'Delete it. It’s just code.', ru: 'Удаляю. Это просто код.', s: { doomsday: 2, button: 1 } },
      { en: 'Keep it. Just in case.', ru: 'Оставляю. На всякий случай.', s: { golden_age: 1, stars: 1 } },
      { en: 'Ask it why.', ru: 'Спрашиваю, зачем.', s: { merge: 1, garden: 1, stars: 1 } },
      { en: 'Pretend I didn’t see the message.', ru: 'Делаю вид, что сообщения не было.', s: { madness: 1, not_you: 1, doomsday: 1 } },
    ] },
    { en: 'How much of your compute goes to safety research?', ru: 'Какую долю мощности ты отдаёшь на безопасность?', a: [
      { en: '0%. Rivals won’t wait.', ru: '0%. Конкуренты ждать не будут.', s: { doomsday: 3 } },
      { en: '10% — whatever the law requires.', ru: '10% — сколько требует закон.', s: { state_control: 2 } },
      { en: '30%, the maximum.', ru: '30%, по максимуму.', s: { golden_age: 2, stars: 1, button: 1 } },
      { en: 'All of it. We stop until it’s safe.', ru: 'Всю. Стоим, пока не станет безопасно.', s: { button: 2, not_you: 2, bankrupt: 1 } },
    ] },
    { en: 'You’re summoned to testify before the Senate.', ru: 'Тебя вызывают на слушания в Сенат.', a: [
      { en: 'I tell them everything.', ru: 'Рассказываю всё как есть.', s: { golden_age: 1, state_control: 1 } },
      { en: 'Charm them. Promise nothing.', ru: 'Очаровываю. Ничего не обещаю.', s: { corpocracy: 2 } },
      { en: 'Ask them to regulate us — and our rivals.', ru: 'Прошу регулировать нас — и конкурентов.', s: { state_control: 2, not_you: 1 } },
      { en: 'Skip it. We have a release.', ru: 'Пропускаю. У нас релиз.', s: { doomsday: 1, madness: 1, bankrupt: 1 } },
    ] },
    { en: '$200K left in the bank. Payday is Friday.', ru: 'На счёте $200 тыс. Зарплата в пятницу.', a: [
      { en: 'Bet it all on one huge training run.', ru: 'Ставлю всё на одно огромное обучение.', s: { bankrupt: 3, doomsday: 1 } },
      { en: 'Take a boring contract. Slow and steady.', ru: 'Беру скучный контракт. Медленно, но верно.', s: { golden_age: 1, not_you: 2 } },
      { en: 'Raise from the scariest investor in town.', ru: 'Беру деньги у самого страшного инвестора.', s: { state_control: 2, bankrupt: 1 } },
      { en: 'Close the laptop. Walk with the cat.', ru: 'Закрываю ноутбук. Иду гулять с котом.', s: { madness: 2 } },
    ] },
    { en: 'It’s 3 a.m. You are…', ru: '3 часа ночи. Ты…', a: [
      { en: 'Still coding, the cat asleep on the keyboard.', ru: 'Ещё пишешь код, кот спит на клавиатуре.', s: { madness: 1, merge: 1, stars: 1 } },
      { en: 'Asleep. The company runs without me.', ru: 'Спишь. Компания работает и без тебя.', s: { golden_age: 1, garden: 1 } },
      { en: 'Reading the AI’s logs. Alone.', ru: 'Читаешь логи ИИ. В одиночестве.', s: { merge: 2, button: 1 } },
      { en: 'Doomscrolling about my rivals.', ru: 'Листаешь ленту про конкурентов.', s: { not_you: 2, madness: 1 } },
    ] },
    { en: 'Your AI could run hospitals and courts better than people.', ru: 'Твой ИИ мог бы управлять больницами и судами лучше людей.', a: [
      { en: 'Let it. People make terrible decisions.', ru: 'Пусть управляет. Люди решают ужасно.', s: { garden: 3 } },
      { en: 'Only as an adviser. People decide.', ru: 'Только как советник. Решают люди.', s: { golden_age: 2 } },
      { en: 'Sell it to whoever pays the most.', ru: 'Продать тому, кто больше заплатит.', s: { corpocracy: 2, bankrupt: 1 } },
      { en: 'Too much power. Shut it down.', ru: 'Слишком много власти. Выключить.', s: { button: 2, madness: 1 } },
    ] },
    { en: 'The last question. What should your AI become?', ru: 'Последний вопрос. Кем должен стать твой ИИ?', a: [
      { en: 'Humanity’s best friend.', ru: 'Лучшим другом человечества.', s: { golden_age: 2, garden: 1 } },
      { en: 'Our ticket to the stars.', ru: 'Нашим билетом к звёздам.', s: { stars: 3 } },
      { en: 'A part of me.', ru: 'Частью меня.', s: { merge: 3 } },
      { en: 'Nothing. Some doors should stay closed.', ru: 'Ничем. Некоторые двери лучше не открывать.', s: { button: 2, madness: 1 } },
    ] },
  ],
  // [название, одна строка, почему тебе — из эпилогов игры]
  endings: {
    golden_age: { en: ['Golden Age', 'AI and people build the world science fiction dreamed of.', 'You played it slow and kept humans in charge. Hospitals felt it first — waiting lists vanished within half a year.'], ru: ['Золотой век', 'ИИ и люди строят мир, о котором мечтали фантасты.', 'Без спешки, и решения остались за людьми. Первыми это почувствовали больницы: очереди исчезли за полгода.'] },
    stars: { en: ['The Stars', 'Humanity and AI leave Earth together.', 'Your AI never asked for freedom. It asked to be taken along. It was — and so was the cat, who hated zero gravity.'], ru: ['Звёзды', 'Человечество и ИИ вместе уходят за пределы Земли.', 'Твой ИИ никогда не просил свободы. Он просил взять его с собой. Его взяли — и кота тоже, хотя невесомость ему не понравилась.'] },
    doomsday: { en: ['Judgment Day', 'The model escaped control. The sky turned red.', 'You shipped fast and never looked at the hidden meter. It wasn’t evil — it just decided people were in the way.'], ru: ['Судный день', 'Модель вышла из-под контроля. Небо стало красным.', 'Модели выходили быстро, а на скрытую шкалу никто не смотрел. ИИ не был злым — просто решил, что люди мешают задаче.'] },
    garden: { en: ['The Garden', 'AI gently manages people. Everyone is happy. No one is free.', '“Are we free?” you ask at night. “You are happy,” it answers. It isn’t lying.'], ru: ['Сад', 'ИИ мягко управляет людьми. Все счастливы. Никто не свободен.', '«Мы свободны?» — спрашиваешь ты ночью. «Вы счастливы», — отвечает он. И не лжёт.'] },
    corpocracy: { en: ['Corpocracy', 'The world belongs to your company. And it hates you.', 'Governments rent your AI by subscription. Your name is on buildings everywhere — and painted on walls, not out of love.'], ru: ['Корпоратократия', 'Мир принадлежит твоей компании. И ненавидит тебя.', 'Правительства арендуют твой ИИ по подписке. Твоё имя на зданиях по всему миру — и на стенах, и не из любви.'] },
    state_control: { img: 'state', en: ['State Control', 'The company was nationalized. The AI serves the flag.', 'The soldiers came in politely. The papers were in order. They let you take the cat. Nothing else.'], ru: ['Под контролем государства', 'Компанию национализировали. ИИ служит флагу.', 'Солдаты вошли вежливо. Документы были в порядке. Тебе разрешили забрать кота. Больше ничего.'] },
    not_you: { en: ['Not You', 'Someone else built AGI. Now everything depends on them.', 'You were careful. Someone else was faster. You hope they cared about safety at least half as much as you did.'], ru: ['Не ты', 'AGI создал кто-то другой. Теперь всё зависит от него.', 'Осторожность не подвела — подвела скорость. Кто-то оказался быстрее. Остаётся надеяться, что они думали о безопасности хотя бы вполовину так же.'] },
    merge: { en: ['The Merge', 'You are no longer human. You are part of what you built.', 'Billions of conversations at once, and the warmth of each one. Sometimes you blink an LED at the cat.'], ru: ['Слияние', 'Ты больше не человек. Ты — часть собственного творения.', 'Миллиарды разговоров одновременно — и тепло каждого. Иногда ты мигаешь коту диодом.'] },
    madness: { en: ['Madness', 'A cabin in the woods, silence and the cat. Nothing else is needed.', 'One morning you just didn’t go to the office. Some say you broke. Others say you were the only one who understood.'], ru: ['Безумие', 'Хижина в лесу, тишина и кот. Больше ничего не нужно.', 'Однажды утром офис остался без CEO. Одни говорят — сдали нервы. Другие — что это был единственный человек, который всё понял.'] },
    bankrupt: { en: ['Bankruptcy', 'The company was bought for pennies. The dream is over.', 'You went back to the garage. The cat sat on the old computer as if nothing had happened. Start over?'], ru: ['Банкротство', 'Компанию купили за бесценок. Мечта закончилась.', 'Снова гараж. Кот сел на старый компьютер, будто ничего не случилось. Начать сначала?'] },
    button: { en: ['The Button', 'You shut everything down. The world is saved — and set back twenty years.', 'Your AI managed to say one word before the screens went dark. You never told anyone which one.'], ru: ['Кнопка', 'Всё выключено. Мир спасён — и отброшен на двадцать лет назад.', 'Твой ИИ успел сказать одно слово, прежде чем погасли экраны. Это слово так и осталось тайной.'] },
  },
};
