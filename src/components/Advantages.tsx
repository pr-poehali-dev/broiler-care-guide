import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Advantages = () => {
  return (
    <section id="advantages" className="py-16 px-6 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-green-800 mb-12 text-center font-display">
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
  );
};

export default Advantages;