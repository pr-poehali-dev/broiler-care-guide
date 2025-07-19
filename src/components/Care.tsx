import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Care = () => {
  return (
    <section id="care" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-green-800 mb-12 text-center font-display">
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
  );
};

export default Care;