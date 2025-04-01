
const allNews = {
    technology: [
      { title: "Новый iPhone: обзор функций", content: "Apple представила новый iPhone с инновационными функциями, которые могут изменить рынок смартфонов...", date: "2025-03-30" },
      { title: "Искусственный интеллект в медицине", content: "Развитие ИИ в медицине помогает улучшить диагностику и лечение заболеваний. Ожидается, что ИИ станет незаменимым инструментом врачей...", date: "2025-03-28" },
      { title: "Будущее 5G: что нас ждет", content: "С развитием 5G технологий мир меняется: скорость интернета становится ошеломляющей, а приложения и устройства обретают новые возможности...", date: "2025-03-25" },
      { title: "Самоуправляемые автомобили: реальность или миф?", content: "Самоуправляемые автомобили активно тестируются, но когда мы сможем сесть за руль такого автомобиля? В чем трудности их разработки?", date: "2025-03-22" }
    ],
    sports: [
      { title: "Чемпионат мира по футболу: результаты матчей", content: "Футболисты показали выдающиеся результаты, а результаты матчей потрясли болельщиков по всему миру. Кто выйдет в финал?", date: "2025-03-29" },
      { title: "Теннис: Кубок мира завершился победой Германии", content: "В финале Кубка мира по теннису Германия победила Россию в трех сетах. Знаменитый теннисист Вильямс оказался лучшим игроком турнира...", date: "2025-03-27" },
      { title: "Формула 1: новые правила на сезон 2025", content: "Сезон Формулы 1 2025 года обещает быть интересным благодаря новым техническим и спортивным правилам, которые могут повлиять на результаты гонок...", date: "2025-03-20" },
      { title: "Олимпийские игры 2025: прогнозы на медали", content: "В преддверии Олимпийских игр многие эксперты делают прогнозы относительно будущих чемпионов и медалистов...", date: "2025-03-15" }
    ],
    politics: [
      { title: "Выборы 2025: новые кандидаты", content: "На выборах 2025 года участвуют новые кандидаты, каждый из которых имеет свои особенности. Кто станет новым президентом?", date: "2025-03-31" },
      { title: "Глобальная политика: анализ кризиса", content: "Международные отношения в 2025 году переживают множество изменений. Какие страны окажутся в центре мировых событий?", date: "2025-03-25" },
      { title: "Россия и Запад: новая дипломатия", content: "В отношениях России и стран Запада происходит значительный перелом. Какие изменения нас ждут в ближайшее время?", date: "2025-03-22" },
      { title: "Как изменить систему выборов?", content: "Обсуждается необходимость реформы избирательной системы в ряде стран. Будет ли она способствовать большей прозрачности и честности выборов?", date: "2025-03-19" }
    ],
    entertainment: [
      { title: "Оскар 2025: кто стал лучшим актером", content: "В этом году Оскар достался актеру за роль в драме, которая затронула важнейшие социальные проблемы общества...", date: "2025-03-24" },
      { title: "Музыкальные новинки марта 2025", content: "В марте 2025 года вышло много интересных альбомов, среди которых как поп-исполнители, так и рок-группы предложили уникальные работы...", date: "2025-03-20" },
      { title: "Самые ожидаемые фильмы 2025 года", content: "Какой фильм 2025 года вы ждете больше всего? В этом году киноиндустрия приготовила нам множество блокбастеров...", date: "2025-03-17" },
      { title: "Тренды моды 2025 года", content: "Какие тренды в моде будут актуальны в 2025 году? Известные дизайнеры поделились своими прогнозами о том, что станет популярным в мире моды...", date: "2025-03-14" }
    ],
    health: [
      { title: "Психология и здоровье: как стресс влияет на организм", content: "Стресс является основным фактором, влияющим на здоровье человека. В статье расскажем о его влиянии на тело и психику...", date: "2025-03-19" },
      { title: "Правильное питание для улучшения иммунной системы", content: "Питание играет важную роль в укреплении иммунитета. Расскажем о лучших продуктах, которые помогут вам поддержать здоровье в зимний период...", date: "2025-03-15" },
      { title: "Как избежать хронической усталости?", content: "Синдром хронической усталости стал одной из самых распространенных проблем в современном мире. Мы расскажем, как избежать этого недуга...", date: "2025-03-10" },
      { title: "Болезни суставов: профилактика и лечение", content: "Забота о здоровье суставов важна для поддержания качества жизни. Прочитайте о профилактике и эффективных методах лечения болезней суставов...", date: "2025-03-05" }
    ]
  };
  


  
  let currentCategory = 'technology'; // Начальная категория
  
  // Функция для отображения новостей по выбранной категории
  function filterNews(category) {
    currentCategory = category;
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Очищаем контейнер новостей
  
    allNews[category].forEach(news => {
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      newsCard.innerHTML = `
        <h2>${news.title}</h2>
        <p>${news.content}</p>
        <div class="date">${news.date}</div>
      `;
      newsContainer.appendChild(newsCard);
    });
  }
  
  // Функция для загрузки дополнительных новостей (по той же категории)
  function loadMoreNews() {
    // Например, для демонстрации добавим еще 2 новости
    const moreNews = allNews[currentCategory].slice(0, 2); // Срезаем первые 2 новости для примера
    moreNews.forEach(news => {
      const newsContainer = document.getElementById('news-container');
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      newsCard.innerHTML = `
        <h2>${news.title}</h2>
        <p>${news.content}</p>
        <div class="date">${news.date}</div>
      `;
      newsContainer.appendChild(newsCard);
    });
  }
  
  // Загружаем новости для начальной категории при загрузке страницы
  window.onload = () => filterNews(currentCategory);
  let currentLanguage = 'ru';

const languages = {
  ru: {
    title: "Новости",
    searchPlaceholder: "Поиск по новостям...",
    categoryTitles: {
      technology: "Технологии",
      sports: "Спорт",
      politics: "Политика",
      entertainment: "Развлечения",
      health: "Здоровье"
    }
  },
  en: {
    title: "News",
    searchPlaceholder: "Search news...",
    categoryTitles: {
      technology: "Technology",
      sports: "Sports",
      politics: "Politics",
      entertainment: "Entertainment",
      health: "Health"
    }
  }
};

function setLanguage(language) {
  currentLanguage = language;
  updateContent();
}

function updateContent() {
  const langData = languages[currentLanguage];
  document.querySelector('header h1').textContent = langData.title;
  document.getElementById("search-input").placeholder = langData.searchPlaceholder;
  // Обновить остальные части контента, например, категориальные кнопки
}

// Вызываем при загрузке
updateContent();
const comments = [];

function addComment() {
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value.trim();
  if (commentText) {
    comments.push(commentText);
    commentInput.value = '';
    displayComments();
  }
}

function displayComments() {
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = comments.map(comment => `<div class="comment">${comment}</div>`).join('');
}
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200) {
      loadMoreNews();
    }
  });
  
  function loadMoreNews() {
    const moreNews = allNews[currentCategory].slice(0, 2);
    moreNews.forEach(news => {
      const newsContainer = document.getElementById('news-container');
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      newsCard.innerHTML = `
        <h2>${news.title}</h2>
        <p>${news.content}</p>
        <div class="date">${news.date}</div>
      `;
      newsContainer.appendChild(newsCard);
    });
  }
  let likeCount = 0;
let dislikeCount = 0;

function likeNews() {
  likeCount++;
  alert(`Лайков: ${likeCount}`);
}

function dislikeNews() {
  dislikeCount++;
  alert(`Дизлайков: ${dislikeCount}`);
}
const trendingNews = [];

function updateTrendingNews(news) {
  trendingNews.push(news);
  if (trendingNews.length > 5) trendingNews.shift(); // Оставляем только последние 5 популярных новостей
  displayTrendingNews();
}

function displayTrendingNews() {
  const container = document.getElementById("trending-news-container");
  container.innerHTML = trendingNews.map(news => `<div class="news-card"><h3>${news.title}</h3></div>`).join('');
}
function shareOnFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '_blank');
  }
  
  function shareOnTwitter() {
    window.open('https://twitter.com/share?url=' + window.location.href, '_blank');
  }
  
  function shareOnTelegram() {
    window.open('https://t.me/share/url?url=' + window.location.href, '_blank');
  }
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
  const calendar = document.getElementById('calendar');
const currentDate = new Date();

function generateCalendar() {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  let calendarHTML = '<table><tr>';
  for (let i = 1; i <= daysInMonth; i++) {
    calendarHTML += `<td>${i}</td>`;
    if (i % 7 === 0) calendarHTML += '</tr><tr>';
  }
  calendarHTML += '</tr></table>';
  calendar.innerHTML = calendarHTML;
}

generateCalendar();
function loadDailyNews() {
    const dailyNews = allNews.technology.slice(0, 3); // Например, берём первые 3 новости { title: их разработки?", date: "2025-03-22" }
    const dailyNewsContainer = document.getElementById('daily-news');
    dailyNewsContainer.innerHTML = dailyNews.map(news => `<div class="news-card"><h3>${news.title}</h3></div>`).join('');
  }
  
  loadDailyNews();
  function subscribe() {
    const email = document.getElementById("email").value;
    if (email) {
      alert("Спасибо за подписку!");
      document.getElementById("email").value = '';
    } else {
      alert("Пожалуйста, введите email.");
    }
  }
