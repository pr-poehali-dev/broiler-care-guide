import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-800 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Bird" size={32} />
            <h1 className="text-2xl font-bold">ПТИЦЕВОДСТВО ЭКСПЕРТ</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#description" className="hover:text-green-200 transition-colors">Описание</a>
            <a href="#advantages" className="hover:text-green-200 transition-colors">Достоинства</a>
            <a href="#care" className="hover:text-green-200 transition-colors">Уход</a>
            <a href="#products" className="hover:text-green-200 transition-colors">Продукция</a>
            <a href="#contacts" className="hover:text-green-200 transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-100 to-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-green-800 mb-6 font-display">
            Бройлеры премиум качества
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-body">
            Профессиональное разведение мясных кур с гарантией качества. 
            Быстрорастущие породы с отличными показателями мясной продуктивности.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-green-200 text-green-800">
              Рост 45 дней
            </Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-green-200 text-green-800">
              Вес до 3 кг
            </Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-green-200 text-green-800">
              Конверсия 1:1.8
            </Badge>
          </div>
          <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg">
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Description Section */}
      <section id="description" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-green-800 mb-8 text-center font-display">
            Описание бройлеров
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <Icon name="Zap" size={24} className="mr-2" />
                  Быстрый рост
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Бройлеры - специально выведенные гибриды мясных кур, достигающие 
                  товарного веса за 6-7 недель. Высокая скорость роста обеспечивает 
                  быструю окупаемость инвестиций.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <Icon name="Award" size={24} className="mr-2" />
                  Мясные качества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Отличный выход мяса (до 75%), нежная текстура, высокие вкусовые 
                  качества. Грудные мышцы составляют до 25% живого веса птицы.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <Icon name="Target" size={24} className="mr-2" />
                  Эффективность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Низкая конверсия корма (1.6-1.8 кг корма на 1 кг прироста), 
                  высокая выживаемость поголовья, адаптированность к промышленному содержанию.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <Icon name="Shield" size={24} className="mr-2" />
                  Устойчивость
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Хорошая резистентность к заболеваниям, стабильные показатели 
                  роста при соблюдении технологии кормления и содержания.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-green-800 mb-12 text-center">
            Достоинства и недостатки
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-300 bg-white">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center">
                  <Icon name="ThumbsUp" size={24} className="mr-2" />
                  Достоинства
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 mt-1 text-green-600" />
                    <span>Быстрый набор живого веса</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 mt-1 text-green-600" />
                    <span>Высокая мясная продуктивность</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 mt-1 text-green-600" />
                    <span>Эффективная конверсия корма</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 mt-1 text-green-600" />
                    <span>Низкие затраты на содержание</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="mr-2 mt-1 text-green-600" />
                    <span>Быстрая окупаемость</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-300 bg-white">
              <CardHeader>
                <CardTitle className="text-orange-700 flex items-center">
                  <Icon name="AlertTriangle" size={24} className="mr-2" />
                  Особенности содержания
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Minus" size={16} className="mr-2 mt-1 text-orange-600" />
                    <span>Требуют качественные корма</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Minus" size={16} className="mr-2 mt-1 text-orange-600" />
                    <span>Контроль температурного режима</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Minus" size={16} className="mr-2 mt-1 text-orange-600" />
                    <span>Профилактика заболеваний</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Minus" size={16} className="mr-2 mt-1 text-orange-600" />
                    <span>Соблюдение плотности посадки</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Minus" size={16} className="mr-2 mt-1 text-orange-600" />
                    <span>Регулярная вентиляция</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section id="care" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-green-800 mb-12 text-center">
            Уход и содержание
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700 flex items-center">
                  <Icon name="Thermometer" size={24} className="mr-2" />
                  Температура
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Первая неделя: 32-35°C
                  <br />Вторая неделя: 29-32°C
                  <br />Далее: снижение на 2-3°C/неделю
                </p>
                <Badge variant="outline" className="text-blue-600 border-blue-300">
                  Критически важно
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-700 flex items-center">
                  <Icon name="Utensils" size={24} className="mr-2" />
                  Кормление
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  0-10 дней: стартер (23% белка)
                  <br />11-25 дней: рост (20% белка)
                  <br />26-42 дня: финиш (18% белка)
                </p>
                <Badge variant="outline" className="text-purple-600 border-purple-300">
                  По расписанию
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-teal-200">
              <CardHeader>
                <CardTitle className="text-teal-700 flex items-center">
                  <Icon name="Droplets" size={24} className="mr-2" />
                  Поение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Постоянный доступ к чистой воде
                  <br />Температура воды: 18-22°C
                  <br />Фронт поения: 2-2.5 см/гол
                </p>
                <Badge variant="outline" className="text-teal-600 border-teal-300">
                  24/7 доступ
                </Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-green-800 mb-4 text-center">
              Программа вакцинации
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-green-700 mb-2">Обязательные прививки:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• 1 день - Марека, Гамборо</li>
                  <li>• 7-10 дней - Ньюкасл + Бронхит</li>
                  <li>• 18-21 день - Гамборо (повтор)</li>
                  <li>• 28-30 дней - Ньюкасл (повтор)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-green-700 mb-2">Профилактика:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• Кокцидиостатики в корме</li>
                  <li>• Витаминные комплексы</li>
                  <li>• Пробиотики для ЖКТ</li>
                  <li>• Антистрессовые препараты</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-green-800 mb-12 text-center">
            Наша продукция
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-300 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Icon name="Egg" size={24} className="mr-2" />
                  Суточные цыплята
                </CardTitle>
                <CardDescription>Здоровый молодняк с гарантией</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Привитые суточные цыплята от ведущих племзаводов. 
                  Гарантия выживаемости 96%.
                </p>
                <div className="text-2xl font-bold text-green-700 mb-2">от 85 ₽/шт</div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-300 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Icon name="Timer" size={24} className="mr-2" />
                  Подрощенная птица
                </CardTitle>
                <CardDescription>2-3 недели, готова к откорму</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Цыплята 14-21 день с пройденным критическим периодом. 
                  Привиты, адаптированы.
                </p>
                <div className="text-2xl font-bold text-green-700 mb-2">от 180 ₽/шт</div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-green-300 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Icon name="Package" size={24} className="mr-2" />
                  Товарная птица
                </CardTitle>
                <CardDescription>Готовая к убою, 6-7 недель</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Откормленные бройлеры весом 2.5-3 кг. 
                  Убой и переработка на собственной площадке.
                </p>
                <div className="text-2xl font-bold text-green-700 mb-2">от 320 ₽/кг</div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg border-2 border-green-200">
            <h4 className="text-2xl font-bold text-green-800 mb-6 text-center">
              Логистика и доставка
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-green-700 mb-3 flex items-center">
                  <Icon name="Truck" size={20} className="mr-2" />
                  Условия транспортировки
                </h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• Специализированный транспорт с вентиляцией</li>
                  <li>• Контроль температуры во время перевозки</li>
                  <li>• Минимальная партия: 500 голов</li>
                  <li>• Документооборот: справки ф.1 и ф.4</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-green-700 mb-3 flex items-center">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  География доставки
                </h5>
                <ul className="space-y-2 text-gray-700">
                  <li>• Московская область: бесплатно от 1000 гол</li>
                  <li>• Центральный регион: 15 ₽/км</li>
                  <li>• Другие регионы: по согласованию</li>
                  <li>• Самовывоз: круглосуточно</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-green-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center font-display">
            Контакты и заказ
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3" />
                  <span>info@broiler-expert.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3" />
                  <span>Московская область, Серпуховский район</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3" />
                  <span>Работаем: 24/7</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h5 className="font-semibold mb-3">Гарантии качества:</h5>
                <ul className="space-y-2 text-green-100">
                  <li>• Ветеринарные справки на всю птицу</li>
                  <li>• Замена некондиционного поголовья</li>
                  <li>• Консультации зоотехника</li>
                  <li>• Техническая поддержка 24/7</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-green-800">
                Оставить заявку
              </h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Количество голов</label>
                  <input 
                    type="number" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="от 500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Комментарий</label>
                  <textarea 
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Дополнительная информация о заказе"
                  ></textarea>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <Icon name="Bird" size={24} className="mr-2" />
            <span className="text-lg font-semibold">ПТИЦЕВОДСТВО ЭКСПЕРТ</span>
          </div>
          <p className="text-green-200 mb-4">
            Профессиональное разведение бройлеров с 2010 года
          </p>
          <div className="flex justify-center space-x-6 text-sm text-green-300">
            <span>© 2024 Все права защищены</span>
            <span>•</span>
            <span>Лицензия ВЕТ-77-123</span>
            <span>•</span>
            <span>ОГРН 1234567890123</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;